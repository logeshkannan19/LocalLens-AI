# LocalLens AI Roadmap

This roadmap outlines the planned trajectory for LocalLens AI from its MVP foundation to a mature, monetized enterprise product.

## Phase 1: MVP Foundation (Current)
- [x] WhatsApp Cloud API Integration.
- [x] Event-driven backend using n8n workflows.
- [x] Natural language intent extraction using OpenAI.
- [x] Real-time data from Google Places API.
- [x] Basic AI-driven ranking and structured replies.
- [x] Supabase database schema for users and preferences.

## Phase 2: Advanced User Experience
- [ ] **Voice Message Support**: Integrate OpenAI Whisper API to transcribe voice notes into text queries directly within the n8n flow.
- [ ] **Saved Places & Collections**: Allow users to save their favorite spots by replying "save 1" and view them later via "show my saved places".
- [ ] **Contextual Memory**: Maintain conversation history over a 24-hour window so users can say "Actually, make it cheaper" and the engine adjusts the previous query.
- [ ] **Multi-language Support**: Automatically detect the user's language natively within the ChatGPT node and respond natively.

## Phase 3: Infrastructure & Scale
- [ ] **Geo-caching Layer**: Implement a Redis cache at the API wrapper level to store and retrieve queries for the same geolocation within a 1-hour window (drastically reducing Google Maps API costs).
- [ ] **Migration to Custom Microservices**: Gradually port complex n8n nodes into pure Python (FastAPI) or Node.js services for finer latency control.
- [ ] **Analytics Dashboard**: Connect Supabase to Metabase for real-time tracking of popular search categories, user retention, and query failure rates.

## Phase 4: Monetization Strategies
- [ ] **Featured Listings**: Create a promotional tier where partner businesses are pinned to the "Top 1" spot if they match the user's organic search intent.
- [ ] **Premium Subscription Stripe Link**: Offer power users unlimited searches and advanced capabilities (e.g., booking reservations directly) via a monthly Stripe subscription triggered in WhatsApp.
- [ ] **Affiliate Delivery Links**: Automatically append Uber Eats/Deliveroo affiliate codes to restaurant recommendations.
