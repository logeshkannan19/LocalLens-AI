require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// WhatsApp Webhook Verification
app.get('/webhook', (req, res) => {
    const defaultVerifyToken = process.env.VERIFY_TOKEN || 'local_lens_secret_token';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === defaultVerifyToken) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    } else {
        res.status(400).send('Missing verify token');
    }
});

// Primary Webhook Receiver (Post-verification)
// This can act as a middleware to format or clean data before sending to n8n
app.post('/webhook', async (req, res) => {
    const body = req.body;
    console.log('Received Payload:', JSON.stringify(body, null, 2));

    try {
        // Example: Forward directly to n8n webhook URL
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
        
        if (n8nWebhookUrl) {
            // Uncomment in production:
            // await fetch(n8nWebhookUrl, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(body)
            // });
        }

        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`LocalLens API wrapper running on port ${PORT}`);
});
