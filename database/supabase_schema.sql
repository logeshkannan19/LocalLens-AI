-- Supabase Schema for LocalLens AI

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: users
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    whatsapp_number TEXT UNIQUE NOT NULL,
    name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_interaction TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: user_preferences
CREATE TABLE IF NOT EXISTS user_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    favorite_categories TEXT[] DEFAULT '{}',
    default_budget_level INT DEFAULT 2, -- 1 to 4 scaling similar to Google Maps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: search_logs
CREATE TABLE IF NOT EXISTS search_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    query_text TEXT,
    detected_location TEXT, -- LAT,LNG or address string
    detected_category TEXT,
    results_count INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: saved_places
CREATE TABLE IF NOT EXISTS saved_places (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    place_id TEXT NOT NULL, -- Google Place ID
    place_name TEXT NOT NULL,
    address TEXT,
    saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, place_id)
);

-- Indexes for performance
CREATE INDEX idx_users_whatsapp ON users(whatsapp_number);
CREATE INDEX idx_search_logs_user ON search_logs(user_id);
CREATE INDEX idx_saved_places_user ON saved_places(user_id);
