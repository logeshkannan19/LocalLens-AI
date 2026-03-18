<div align="center">
  <h1>🌍 LocalLens AI – WhatsApp Nearby Business Finder</h1>
  <p><b>A production-ready conversational AI orchestrator built on WhatsApp.</b></p>
</div>

---

**LocalLens AI** is an advanced WhatsApp assistant designed to revolutionize local business discovery. Rather than navigating clunky map interfaces, users intuitively drop a pin or text queries like *"Find gyms near me open now"* directly in WhatsApp. Powered by **OpenAI**, **Google Places**, and **n8n**, LocalLens extracts geo-intent, fetches real-time business data, and delivers perfectly formatted, highly personalized recommendations back to the chat.

## 🎯 Core Capabilities

- 🤖 **Semantic Intent Extraction**: Instantly understands location, budget, distance, and categories from unstructured WhatsApp texts or voice notes.
- 📍 **Live Google Places Data**: Deep integration with the Google Maps API ensures users only see businesses that are actually open and highly rated right now.
- 🧠 **Contextual AI Ranking**: GPT-4o acts as a human concierge, reading the raw Google Maps JSON and writing personalized 1-sentence pitches for the Top 3 results.
- 💬 **WhatsApp Cloud Native**: Deployed natively over Meta's Cloud API utilizing rich interactions (buttons, maps deep links) for a pristine UI/UX.
- ⚡ **Asynchronous Automation**: Entirely event-driven using n8n for sub-3-second end-to-end response pipelines.

## ⚙️ Architecture & Repositories

This repository contains the full scaffolding required to deploy the startup MVP:

- 📂 `n8n-workflows/`: The crown jewel — exportable JSON files of the core search and follow-up engines.
- 📂 `database/`: Supabase PostgreSQL schemas handling state, user preferences, and history.
- 📂 `prompts/`: Curated, strictly-formatted OpenAI system instructions mapping unstructured language to intent objects.
- 📂 `api/`: An optional Node.js/Express gateway for custom webhook pre-validation and request shaping.
- 📂 `docs/`: Comprehensive integration blueprints (WhatsApp, Maps, n8n deployment).

> 💡 **Deep Dive**: To understand how data flows across the Meta Graph API into n8n and down to Supabase, check out our [Architecture Overview](ARCHITECTURE.md).

## 🚀 Quickstart Guide

1. **Spin up your DB Engine**: Execute `database/supabase_schema.sql` in your PostgreSQL or Supabase environment.
2. **Configure WhatsApp**: Follow our [Meta App blueprint guide](docs/whatsapp_api_setup.md) to generate your permanent Access tokens.
3. **Deploy the Orchestrator**: Ensure you have a running instance of n8n. Import the JSON blueprints located in `n8n-workflows/`.
4. **Environment Variables**: Hook your Google Maps API Key and OpenAI Keys directly into the credential blocks within the n8n UI, or inject them into the `.env` of the [API wrapper](api/.env.example).
5. **Start Texting**: Drop a pin to your WhatsApp bot number and ask for the nearest, highly-rated coffee shop!

## 🛣️ Roadmap & Future Horizons

We are scaling LocalLens AI from an MVP utility into an enterprise SaaS directory. View our full roadmap, including automated geo-caching, Stripe monetization loops, and Whisper-powered voice queries in the [Roadmap Document](ROADMAP.md).

## 🤝 Open Source & Contributions

We actively welcome contributions to standardize prompts or optimize the n8n json pipelines. Please refer to our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request.

---

<p align="center">
  Released under the <a href="LICENSE">MIT License</a>.<br>
  Built with ❤️ by Logesh Kannan.
</p>
