---
sidebar_position: 5
---

# Gemini AI Setup

Enable Gemini-powered AI content generation in the eClassify Admin Panel. This guide covers both a quick **development setup** (free API key) and a **production setup** (restricted key with billing enabled).

## What These Settings Control

The Gemini AI Settings page lets you:

- Toggle AI features on/off
- Configure the Gemini API key used by the server
- Select the Gemini model (e.g. `gemini-2.5-flash-lite`)
- Set **Global** daily rate limits (per day, across all users)
- Set **Per User** daily rate limits
- Clear cached AI-generated content

## Prerequisites

- A Google account with access to [Google AI Studio](https://aistudio.google.com/) or [Google Cloud Console](https://console.cloud.google.com/)
- For production: a Google Cloud project with **billing enabled**

---

## Option A — Development Setup (Free Key)

Use this for testing or evaluation. Free tier has lower quotas.

1. Open [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API key** and copy the generated key
4. In Admin Panel, go to **Settings → Gemini AI**
5. Enable the **Enable Gemini AI** toggle
6. Paste the key into **Gemini API Key**
7. Click **Fetch Models** and choose a model (default: `gemini-2.5-flash-lite`)
8. Set rate limits (use `0` for unlimited)
9. Click **Save Settings**

:::warning
Use the API key **only from the backend**. Never expose it in the browser or commit it to a public repo.
:::

---

## Option B — Production Setup (Restricted Key)

Use this for live deployments. Restrict the key by API and IP to prevent abuse.

### Step 1 — Enable the Generative Language API

1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Select (or create) your project and **enable billing**
3. Go to **APIs & Services → Library**
4. Search for **Generative Language API** and click **Enable**

### Step 2 — Create a Restricted API Key

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → API key**
3. Open the new key and click **Edit API key**
4. Under **API restrictions**, select **Restrict key** and pick **Generative Language API** only
5. Under **Application restrictions**, choose **IP addresses** and add your server's egress IPs (IPv4 and IPv6)
6. **Save**

### Step 3 — Configure Admin Panel

1. In Admin Panel, go to **Settings → Gemini AI**
2. Enable the **Enable Gemini AI** toggle
3. Paste the restricted key into **Gemini API Key**
4. Click **Fetch Models** and select a model
5. Configure rate limits:
   - **Global Rate Limits (per day)** — total daily quota across all users
     - **Description Limit** — max ad-description generations per day
     - **Meta Details Limit** — max meta-detail generations per day
   - **Per User Rate Limits (per day)** — same fields, applied per individual user
   - `0` = unlimited
6. Click **Save Settings**

:::warning
If your server's egress IP changes, update the key's allowed IPs — otherwise requests will fail with `403`.
:::

---

## Cache Management

Cached AI content speeds up repeated requests. To force regeneration, click **Clear AI Cache** under the Cache Management section at the bottom of the Gemini AI Settings page.

## Field Reference

| Field | Description |
|-------|-------------|
| Enable Gemini AI | Master toggle for all AI content generation |
| Gemini API Key | Server-side key from AI Studio or Cloud Console |
| Gemini Model | Model identifier (use **Fetch Models** to list available ones) |
| Global Description Limit | Daily cap on description generations across all users |
| Global Meta Details Limit | Daily cap on meta-detail generations across all users |
| Per User Description Limit | Daily cap on description generations per user |
| Per User Meta Details Limit | Daily cap on meta-detail generations per user |
| Clear AI Cache | Deletes cached AI responses; next request regenerates |
