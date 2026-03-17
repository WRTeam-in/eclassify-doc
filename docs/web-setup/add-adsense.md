---
sidebar_position: 10
---

# Google AdSense Setup

Integrating Google AdSense allows you to monetize your web platform. This guide explains how to configure AdSense dynamically using your Admin Panel. Our Next.js frontend fetches AdSense configurations dynamically, meaning changes in the Admin Panel reflect automatically without requiring a site rebuild for configuration changes.

## 1. Google AdSense Account Configuration

1.  **Sign Up/In**: Visit [Google AdSense](https://adsense.google.com) and sign in.
2.  **Add Your Site**: Go to the **Sites** tab, click **Add Site**, and enter your domain (e.g., `yourdomain.com`).
3.  **Setup ads.txt (Important)**: 
    - When adding a site into AdSense, it will show an option to use a script and will provide an `ads.txt` file.
    - Download this `ads.txt` file.
    - To prevent unauthorized ad inventory sales, Google requires this `ads.txt` file on your server.
    - Navigate to the **web code** directory of your project and place the `ads.txt` file inside the `public` folder.
    - *Note: A rebuild of the web app is required when the `ads.txt` file is added to the public folder.* After deploying, verify it is accessible at `yourdomain.com/ads.txt`.
4.  **Retrieve Publisher ID**: Navigate to **Account** > **Settings** > **Account information** in your AdSense dashboard to find your **Publisher ID**.

---

## 2. Admin Panel Setup

1.  Log in to your **Admin Panel**.
2.  Go to **Settings** > **AdSense**.
3.  **Status**: Use the toggle to **Enable** AdSense.

### Choose Your Ad Placement Method

Once enabled, you can choose between two configuration types:

#### Automatic
Google will automatically place ads in the most optimal positions on your website.

-   **Requirement**: You only need to provide your **Client ID**.
-   **Setup**: Select **Automatic** and paste your Publisher ID (including `ca-`) into the Client ID field (e.g., `ca-pub-1234567890123456`).

#### Manual
Ads will appear at the predefined places on your website. You will need to create specific Ad Units in your AdSense dashboard.

-   **Requirement**: You need three specific **Slot IDs**:
    -   **Banner Slot ID**: For horizontal banner placements.
    -   **Vertical Slot ID**: For sidebar or vertical placements.
    -   **Square Slot ID**: For grid or square-shaped placements.
-   **Setup**: Select **Manual** and enter the respective Slot IDs.

---

## 3. How to Find Slot IDs

If you opted for **Manual** placement, follow these steps in your Google AdSense Dashboard:

1.  Navigate to **Ads** > **By ad unit**.
2.  Select **Display ads**.
3.  Name your unit (e.g., "Web Banner") and select **Responsive** as the ad size to ensure it fits perfectly within the predefined layouts.
4.  After clicking **Create**, look for the following in the code snippet:
    `data-ad-slot="XXXXXXXXXX"`
5.  The 10-digit number is your **Slot ID**. You need to create three separate ad units to obtain the unique IDs for your **Banner (Horizontal)**, **Vertical**, and **Square** slots.

---

## Important Considerations

:::important Build & Deployment
A rebuild and redeploy of the web app is **only required** after adding the `ads.txt` file to the `public/` folder. Changes made to the AdSense settings within the Admin Panel (like toggling status or updating IDs) are fetched dynamically and do not require a rebuild.
:::

:::tip Verification
Always check the **Verification** status in your Google AdSense dashboard. It may take a few days for Google to review and approve your site before ads begin to appear.
:::
