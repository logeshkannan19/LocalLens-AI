require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Validates the Webhook challenge sent by Meta (WhatsApp Cloud API).
 * Meta sends a GET request during webhook setup to ensure the endpoint is live and verified.
 * 
 * @route GET /webhook
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 */
app.get('/webhook', (req, res) => {
    const defaultVerifyToken = process.env.VERIFY_TOKEN;
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === defaultVerifyToken) {
            console.info('[WEBHOOK] Verified successfully with Meta.');
            res.status(200).send(challenge);
        } else {
            console.warn('[WEBHOOK] Verification failed. Token mismatch.');
            res.sendStatus(403);
        }
    } else {
        res.status(400).send('Missing verify token or mode.');
    }
});

/**
 * Ingestion Endpoint for real-time WhatsApp Messaging Events.
 * This acts as a protective gateway/middleware before traffic hits the n8n instances.
 * Use this layer for rate limiting, payload sanitization, or custom pre-processing (e.g., verifying X-Hub-Signature).
 * 
 * @route POST /webhook
 */
app.post('/webhook', async (req, res) => {
    const payload = req.body;
    
    try {
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
        
        if (n8nWebhookUrl) {
            // Forward payload to n8n asynchronously
            /*
            fetch(n8nWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).catch(err => console.error('[N8N_FORWARD_ERROR]', err));
            */
        }

        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.error('[WEBHOOK ERROR] Error routing payload:', error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * Initializes the server on the specified PORT environment variable.
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 LocalLens API Gateway successfully booted on port ${PORT}`);
});
