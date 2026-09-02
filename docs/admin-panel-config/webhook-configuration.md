---
sidebar_position: 2
---

# Payment Gateway Setup & Webhook Configuration

This guide walks you through connecting each payment gateway to your eClassify store. All settings below are entered in your eClassify admin panel under **Settings → Payment Gateways**.

## How This Works

Setting up any payment gateway comes down to two main steps:

1. **Copy API Credentials**: Copy your account credentials (API keys) from that gateway's dashboard and paste them into your eClassify admin panel.
2. **Configure Webhook**: Copy the Webhook URL displayed in your eClassify admin panel and paste it into the gateway's dashboard.

:::tip Webhook URL Note
The **Webhook URL** field is automatically filled in by eClassify with your store's address. You do not type it yourself — simply copy the value shown in this field and paste it wherever the gateway asks for a webhook, notification, or callback URL.
:::

## Supported Payment Gateways

- [1. Stripe Configuration](#1-stripe-configuration)
- [2. Razorpay Configuration](#2-razorpay-configuration)
- [3. Paystack Configuration](#3-paystack-configuration)
- [4. PayTabs Configuration](#4-paytabs-configuration)
- [5. DPO Configuration](#5-dpo-configuration)
- [6. PhonePe Configuration](#6-phonepe-configuration)
- [7. Flutterwave Configuration](#7-flutterwave-configuration)
- [8. PayPal Configuration](#8-paypal-configuration)

---

## 1. Stripe Configuration

### How to Find Your Keys

1. Log in to your Stripe Dashboard at [dashboard.stripe.com](https://dashboard.stripe.com).
2. Go to **Developers → API keys**. Copy your **Secret key** and **Publishable key**. Use the Live keys for a real store (Test keys only work for trying things out).
3. Go to **Developers → Webhooks → Add endpoint**.
4. Paste the **Webhook URL** shown in your eClassify admin panel into Stripe's **Endpoint URL** field, then save.
5. Stripe will show you a **Signing secret** for that endpoint — copy it into the **Webhook Secret** field in eClassify.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. USD, INR, EUR. | You choose this. |
| **Secret key** | Starts with `sk_live_` or `sk_test_`. | Developers → API keys |
| **Publishable key** | Starts with `pk_live_` or `pk_test_`. | Developers → API keys |
| **Webhook Secret** | Starts with `whsec_`. | Shown once, right after you create the webhook endpoint |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — copy into Stripe |
| **Status** | Turns Stripe on or off for checkout. | You choose this. |

---

## 2. Razorpay Configuration

### How to Find Your Keys

1. Log in to your Razorpay Dashboard.
2. Go to **Settings → API Keys**, then click **Generate Live Key** (or use Test Keys while trying things out). Razorpay shows the Key ID and Key Secret only once — save both immediately.
3. Go to **Settings → Webhooks → Add New Webhook**.
4. Paste the **Webhook URL** from your eClassify admin panel into Razorpay's **Webhook URL** field.
5. Razorpay asks you to set your own Secret for this webhook — type any strong value there, then enter that exact same value into the **Webhook Secret** field in eClassify.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. INR, USD. | You choose this. |
| **Secret key** | Razorpay calls this the Key Secret. | Settings → API Keys |
| **Public key** | Razorpay calls this the Key ID. | Settings → API Keys |
| **Webhook Secret** | A secret value you set yourself when creating the webhook. | Settings → Webhooks |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — copy into Razorpay |
| **Status** | Turns Razorpay on or off for checkout. | You choose this. |

---

## 3. Paystack Configuration

### How to Find Your Keys

1. Log in to your Paystack Dashboard.
2. Go to **Settings → API Keys & Webhooks**. Use the Live Secret Key and Live Public Key for a real store (Test keys for trying things out).
3. On the same page, paste the **Webhook URL** from your eClassify admin panel into Paystack's **Webhook URL** field and save.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. NGN, GHS, USD. | You choose this. |
| **Secret key** | Starts with `sk_live_` or `sk_test_`. | Settings → API Keys & Webhooks |
| **Public key** | Starts with `pk_live_` or `pk_test_`. | Settings → API Keys & Webhooks |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — copy into Paystack |
| **Status** | Turns Paystack on or off for checkout. | You choose this. |

---

## 4. PayTabs Configuration

### How to Find Your Keys

1. Log in to your PayTabs Merchant Dashboard.
2. Go to **Developers → API Keys → Key Management**.
3. Copy your **Profile ID**, **Server Key**, and **Client Key** from this page.
4. If PayTabs asks for a callback/notification URL on your profile, paste the **Webhook URL** from your eClassify admin panel there.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. SAR, AED, USD. | You choose this. |
| **Secret key** | This is PayTabs' "Server Key". | Developers → API Keys → Key Management |
| **Profile ID** | A numeric ID identifying your PayTabs profile. | Developers → API Keys, or your Profile page |
| **Public key** | This is PayTabs' "Client Key". | Developers → API Keys → Key Management |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — provide to PayTabs if asked |
| **Is Live** | Switches between PayTabs' test and live environments. | You choose this. |
| **Status** | Turns PayTabs on or off for checkout. | You choose this. |

---

## 5. DPO Configuration

### How to Find Your Keys

1. DPO doesn't hand out credentials through a self-service dashboard like most other gateways.
2. Your **Company Token** and **Service ID** are provided directly by DPO when your merchant account is approved — check the onboarding email from DPO, or contact your DPO account manager (`support@dpogroup.com`).
3. Share the **Webhook URL** from your eClassify admin panel with your DPO contact so they can register it against your account.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. KES, ZAR, USD. | You choose this. |
| **Company Token** | Your unique DPO merchant identifier. | Provided directly by DPO |
| **Service ID** | Also called Service Type — identifies what you're selling. | Provided directly by DPO |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — share with your DPO contact |
| **Payment Mode** | Live or UAT (test) — must match the credentials DPO gave you. | You choose this. |
| **Status** | Turns DPO on or off for checkout. | You choose this. |

---

## 6. PhonePe Configuration

### How to Find Your Keys

1. Log in to your PhonePe Business Dashboard.
2. Go to **Developer Settings**. If your account is on PhonePe's current integration, you'll see **Client ID**, **Client Secret**, and **Client Version** listed there directly.
3. **Merchant ID**, **Username**, and **Password** are usually issued separately by PhonePe's integration/onboarding team when your account is set up — check your onboarding email, or contact PhonePe support if any of these aren't visible in the dashboard.
4. Share the **Webhook URL** from your eClassify admin panel with your PhonePe contact so payment confirmations can be routed back to your store.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Client Secret** | Issued alongside your Client ID. | Developer Settings |
| **Client ID** | Identifies your app to PhonePe. | Developer Settings |
| **Client Version** | A version number for your integration, e.g. 1. | Developer Settings — confirm with PhonePe if unsure |
| **Merchant ID** | Identifies your business account. | Onboarding email, or your PhonePe contact |
| **Username** | API access username. | Onboarding email, or your PhonePe contact |
| **Password** | API access password. | Onboarding email, or your PhonePe contact |
| **Payment Mode** | Live or UAT (test). | You choose this. |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — share with your PhonePe contact |
| **Status** | Turns PhonePe on or off for checkout. | You choose this. |

---

## 7. Flutterwave Configuration

### How to Find Your Keys

1. Log in to your Flutterwave Dashboard.
2. Go to **Settings → API**. Copy your **Secret Key**, **Public Key**, and **Encryption Key** — use the Live keys for a real store.
3. Go to **Settings → Webhooks**, paste the **Webhook URL** from your eClassify admin panel, and save.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency** | The currency your store charges in, e.g. NGN, ZAR, USD. | You choose this. |
| **Secret Key** | Starts with `FLWSECK-`. | Settings → API |
| **Public Key** | Starts with `FLWPUBK-`. | Settings → API |
| **Encryption Key** | A separate key used to secure your integration. | Settings → API |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — copy into Flutterwave |
| **Status** | Turns Flutterwave on or off for checkout. | You choose this. |

---

## 8. PayPal Configuration

### How to Find Your Keys

1. Log in to the PayPal Developer Dashboard at [developer.paypal.com](https://developer.paypal.com).
2. Go to **Apps & Credentials**. Create a new REST API app, or open an existing one.
3. Switch between **Sandbox** and **Live** at the top of the page to see the matching Client ID and Secret — use the Live ones for a real store.
4. Under that same app (or **Account Settings → Webhooks**), add a webhook and paste the **Webhook URL** from your eClassify admin panel.

### Fields to Fill In

| Field in Your Admin Panel | What It Is | Where to Get It |
|---|---|---|
| **Currency Symbol** | The currency your store charges in, e.g. USD, EUR, GBP. | You choose this. |
| **Client ID** | Identifies your PayPal app. | Apps & Credentials |
| **Secret Key** | Your app's private key. | Apps & Credentials |
| **Webhook URL** | Your store's own webhook address. | Auto-filled — copy into PayPal |
| **Payment Mode** | Live or UAT (sandbox). | You choose this. |
| **Status** | Turns PayPal on or off for checkout. | You choose this. |

---

## After You Save

:::info Verification & Testing
Once you've entered a gateway's details and switched its Status to **Enabled**, save the settings page. Do a single small test payment before going fully live, so you can confirm the gateway is really working end-to-end — including that the webhook is reaching your store correctly.
:::

