# Google Maps API Setup

LocalLens AI uses the Google Places API (New) to fetch local businesses.

## 1. Get an API Key
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Go to **APIs & Services** > **Credentials**.
4. Click **Create Credentials** > **API Key**.

## 2. Enable APIs
You need to enable the following APIs for your project:
1. Go to **APIs & Services** > **Library**.
2. Search for and enable **Places API (New)**.
3. Search for and enable **Geocoding API** (used if users type a location instead of dropping a pin).

## 3. Usage in n8n
- Store the API Key in an n8n Credentials block or environment variable.
- In your n8n HTTP Request node, include the header: `X-Goog-Api-Key: YOUR_API_KEY`.
- Include `X-Goog-FieldMask: places.id,places.displayName,places.rating,places.userRatingCount,places.location,places.currentOpeningHours,places.priceLevel` to restrict data and reduce costs.
