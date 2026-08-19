---
sidebar_position: 6
---

# Google Maps Setup

For location features to work properly in your app, admin panel, and web, you need to set up Google Maps and Places API. Follow these steps:

## Setting up Google Cloud Console

1. Open [Google Cloud Console](https://console.cloud.google.com) and select your project.

2. Enable the following APIs from **"Enable API and Services"**:
   - Geocoding API
   - Places API
   - Geolocation API
   - Maps SDK for Android
   - Maps SDK for iOS
   - Maps JavaScript API

## API Key Options and Restrictions

You can use either a restricted two-key setup (recommended) or a single unrestricted key (simpler but less secure):

- **Option A — Restricted (recommended):**
  - Create **API Key 1** (server key) with these APIs enabled: Places API, Geocoding API, Geolocation API.
  - Restrict API Key 1 by your server IP address(es) — add both IPv4 and IPv6 (if available).
  - Create **API Key 2** (web key) with this API enabled: Maps JavaScript API.
  - Restrict API Key 2 by your website URL (HTTP referrer).

- **Option B — Single key (not recommended for production):**
  - Create one API key with all APIs enabled: Places API, Geocoding API, Geolocation API, Maps JavaScript API.
  - Do not apply restrictions.

## Setting Up Places API

For the Places API to work (which enables location search functionality):

1. **Enable billing** on your Google Cloud project.

   :::note
   This is mandatory for Places API to work.
   :::

2. Copy your API key(s) from Google Cloud Console.

3. Open your admin panel and go to **Settings → Settings -> Map Settings Section**.

4. Paste the key(s) as per your chosen option and save:
   - If you used the **restricted setup (Option A)**: use the IP-restricted server key in the **"Places API Key"** field, and the referrer-restricted web key in the **"Google Map Key"** field.
   - If you used a **single key (Option B)**: use the same key in both the **"Google Map Key"** and the **"Places API Key"** fields.

:::danger MANDATORY
Without enabling a billing account, location search will **not** work in the app, admin panel, or web application.
:::

## Setting Up Google Maps in the Mobile App

For mobile app configuration (Android & iOS), refer to the dedicated guide:
👉 [Mobile App - Google Map Setup](/docs/mobile-app/google-map)


## Map Provider Selection (Admin Panel)

In the Admin Panel, go to **Settings → Settings -> Map settings -> Map Provider** to choose between:

- **Free API** — uses local/admin-managed location data bundled with the project. May not include every country/state/city; you must manually add locations in the admin panel.
- **Place API (Google)** — uses Google Places API for accurate, real-time location results. Requires a valid API key with billing enabled.
