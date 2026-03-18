# WhatsApp Cloud API Setup Guide

To connect LocalLens AI to WhatsApp, you need to configure the Meta WhatsApp Cloud API.

## 1. Create a Meta App
1. Go to the [Meta Developer Dashboard](https://developers.facebook.com/apps).
2. Click **Create App**.
3. Select **Other** > **Next**.
4. Select **Business** > **Next**.
5. Give your app a name (e.g., *LocalLens AI*) and connect it to a Business Account.

## 2. Generate Access Tokens
1. In your App Dashboard, go to **WhatsApp** > **API Setup**.
2. Note your **Phone Number ID** and **WhatsApp Business Account ID**.
3. Generate a **Temporary Access Token** (or a Permanent one via the System User in Business Settings).
   - *This token will be used in n8n for the HTTP Request Node to send messages back to the user.*

## 3. Set up Webhooks (Connecting to n8n)
1. In n8n, create a **Webhook Node** and set it to listen to `GET` and `POST` requests.
2. In the Meta Developer Dashboard, go to **WhatsApp** > **Configuration**.
3. Under Webhook, click **Edit**.
4. Paste the **n8n Webhook URL**.
5. Enter a **Verify Token** (this can be any string, but it must match exactly what you check for in n8n or the custom API wrapper).
6. Click **Verify and Save**.

## 4. Subscribe to Message Fields
1. On the same Configuration page, click **Manage** next to Webhook fields.
2. Subscribe to the `messages` field.

You are now ready to receive WhatsApp messages in your n8n workflows!
