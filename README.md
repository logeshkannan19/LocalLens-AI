# 🌍 LocalLens AI

![LocalLens Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200)

> A production-ready conversational AI orchestrator for local business discovery via WhatsApp.

[![Node.js](https://img.shields.io/badge/Node.js-20-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.19-gray?style=flat-square&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 🚀 Overview

LocalLens AI is an advanced WhatsApp assistant designed to revolutionize local business discovery. Users can drop a pin or text queries like *"Find gyms near me open now"* directly in WhatsApp. Powered by **OpenAI**, **Google Places**, and **n8n**, LocalLens extracts geo-intent, fetches real-time business data, and delivers perfectly formatted, personalized recommendations.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **Semantic Intent Extraction** | Understands location, budget, distance, and categories from unstructured text |
| 📍 **Live Google Places Data** | Real-time business data with current hours and ratings |
| 🧠 **AI-Powered Ranking** | GPT-4o generates personalized 1-sentence pitches for top results |
| 💬 **WhatsApp Cloud Native** | Rich interactions with buttons and map deep links |
| ⚡ **Asynchronous Automation** | Event-driven architecture with sub-3-second responses |
| 🔒 **Secure Webhooks** | Protected gateway for request validation and shaping |

## 🏗️ Architecture

```
LocalLens/
├── api/                    # Express gateway for webhook pre-validation
│   ├── server.js         # Main Express server
│   ├── package.json      # Node.js dependencies
│   └── .env.example     # Environment template
├── database/              # Supabase PostgreSQL schemas
├── n8n-workflows/        # Automation workflow JSON exports
├── prompts/               # OpenAI system instructions
├── docs/                  # Integration blueprints
├── ARCHITECTURE.md        # System flow documentation
├── ROADMAP.md            # Future feature roadmap
└── CONTRIBUTING.md       # Contribution guidelines
```

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **API Gateway** | Express.js | Webhook processing |
| **Automation** | n8n | Workflow orchestration |
| **Database** | Supabase | PostgreSQL, Auth, RLS |
| **AI** | OpenAI GPT-4o | Intent extraction, responses |
| **Maps** | Google Places API | Business data |
| **Messaging** | WhatsApp Cloud API | User communication |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- n8n instance
- Supabase account
- Google Places API key
- OpenAI API key
- WhatsApp Business account

### Installation

```bash
# Clone the repository
git clone https://github.com/logeshkannan19/LocalLens.git
cd LocalLens

# Setup API gateway
cd api
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev

# Or start production server
npm start
```

### Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Execute the schema from `database/supabase_schema.sql`
3. Configure your credentials

### n8n Workflows

Import the JSON files from `n8n-workflows/` into your n8n instance:

- `search-workflow.json` - Main search engine
- `followup-workflow.json` - Follow-up response handling

### WhatsApp Webhook Configuration

Set your webhook URL to:
```
https://your-domain.com/webhook
```

## 📁 Project Structure

### API Gateway (`/api`)

The Express gateway provides:
- Webhook verification (Meta challenge)
- Request validation and sanitization
- Rate limiting hooks
- Payload pre-processing
- Forwarding to n8n

### Database (`/database`)

- User preferences storage
- Search history
- Business favorites
- Session management

### Automation (`/n8n-workflows`)

- Intent extraction from WhatsApp messages
- Google Places API integration
- OpenAI GPT-4o response generation
- WhatsApp message delivery

## 🔐 Environment Variables

| Variable | Description | Required |
|---------|-------------|----------|
| `PORT` | Server port (default: 3000) | No |
| `VERIFY_TOKEN` | WhatsApp webhook verify token | Yes |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint | Yes |
| `GOOGLE_MAPS_API_KEY` | Google Places API key | Yes |
| `OPENAI_API_KEY` | OpenAI API key | Yes |

## 🌐 API Reference

### GET /webhook

WhatsApp webhook verification endpoint.

**Query Parameters:**
- `hub.mode` - Subscription mode
- `hub.verify_token` - Verification token
- `hub.challenge` - Challenge string

### POST /webhook

WhatsApp message ingestion endpoint.

**Request Body:** WhatsApp Cloud API payload

**Response:** `EVENT_RECEIVED` on success

## 🔮 Roadmap

See [ROADMAP.md](ROADMAP.md) for upcoming features:

- [ ] Voice note support with Whisper AI
- [ ] Stripe monetization integration
- [ ] Geo-caching for faster responses
- [ ] Business owner dashboard
- [ ] Review management
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting PRs.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Meta](https://developers.facebook.com/) - WhatsApp Cloud API
- [Google](https://developers.google.com/maps) - Google Places API
- [OpenAI](https://openai.com/) - GPT-4o
- [Supabase](https://supabase.com/) - Database
- [n8n](https://n8n.io/) - Workflow automation
