# LocalLens AI – WhatsApp Nearby Business Finder

LocalLens AI is a production-ready, AI-powered WhatsApp assistant that helps users discover nearby businesses (restaurants, gyms, salons, etc.) using natural language and smart filters. Built with n8n, OpenAI, Google Maps Places API, and Supabase.

## 🎯 Features

- **WhatsApp Chat-Based Search**: Users text "Find gyms near me open now".
- **Location Capabilities**: Drop a WhatsApp location pin or type a text location.
- **Google Places Integration**: Fetches real, nearby businesses with ratings, open status, and distance.
- **Smart AI Recommendations**: Ranks results and provides curated recommendations.
- **Personalized Experience**: Remembers user preferences.

## ⚙️ Project Structure

- `n8n-workflows/`: Contains JSON exports of the main automation workflows to import into your n8n instance.
- `database/`: Supabase SQL schema for user profiles, search history, and saved places.
- `prompts/`: Optimal system prompts for OpenAI intent extraction and business ranking.
- `docs/`: Guides for setting up WhatsApp Cloud API, Google Maps, and n8n deployment.
- `api/`: Optional lightweight Express backend for any custom pre/post-processing webhooks.

## 🚀 Getting Started

1. Set up your Supabase database using `database/supabase_schema.sql`.
2. Follow `docs/whatsapp_api_setup.md` to configure WhatsApp Cloud API.
3. Import the workflows from `n8n-workflows/` into your n8n instance.
4. Add your OpenAI and Google Maps API keys to the n8n environment.
5. Deploy and start texting your WhatsApp bot!

## 🔗 Tech Stack

- **Automation Engine**: n8n
- **Messaging**: Meta WhatsApp Cloud API
- **AI / NLP**: OpenAI (gpt-4o)
- **Maps & Discovery**: Google Maps Places API & Geocoding API
- **Storage**: Supabase (PostgreSQL)
