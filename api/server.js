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
 * @param {express.Request} req - The Express request object containing `hub.mode`, `hub.verify_token`, and `hub.challenge`.
 * @param {express.Response} res - The Express response object used to reply with the challenge or a 403 Forbidden status.
 */
app.get('/webhook', (req, res) => {
    // Rely on an environment variable for security in production environments.
    const defaultVerifyToken = process.env.VERIFY_TOKEN || 'local_lens_secret_token';
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
 * @param {express.Request} req - The Express request object carrying the WhatsApp JSON payload.
 * @param {express.Response} res - Dispatches a 200 OK to Meta immediately to prevent retry-loops.
 */
app.post('/webhook', async (req, res) => {
    const payload = req.body;
    
    // In a production environment, you should avoid logging full payloads to prevent PII leaks.
    // Logging specifically just the timestamp or the ID is safer:
    // console.info(`[WEBHOOK] Received event from WhatsApp. ID: ${payload?.entry?.[0]?.id}`);
    console.log('Received Payload:', JSON.stringify(payload, null, 2));

    try {
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
        
        // Asynchronous offload:
        // We do not await the n8n response. Meta requires a 200 OK within 3 seconds.
        // If n8n parsing and AI generation takes 5-10 seconds, this architecture guarantees the webhook isn't dropped.
        if (n8nWebhookUrl) {
            /*
            fetch(n8nWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).catch(err => console.error('[n8n Forwarding ERORR]', err));
            */
        }

        // Immediately acknowledge reception to Meta
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
