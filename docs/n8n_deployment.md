# n8n Deployment Guide

## 1. Hosting n8n
For production, it is highly recommended to self-host n8n using Docker or use n8n Cloud.

If using Docker:
```bash
docker volume create n8n_data
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

## 2. Environment Variables
Make sure to add the following variables if you are keeping secrets outside of n8n credentials:
- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`
- `WHATSAPP_TOKEN`
- `SUPABASE_URL`
- `SUPABASE_KEY`

## 3. Importing Workflows
1. Open n8n.
2. Go to **Workflows** > **Add Workflow**.
3. In the top right menu, select **Import from File**.
4. Select `search_workflow.json` or `follow_up_workflow.json` from the `n8n-workflows` directory in this project.

## 4. Configuring Credentials
After importing, you will see exclamation marks on nodes requiring credentials.
1. Click the node.
2. Select **Create New Credential**.
3. Enter your API keys and save.
