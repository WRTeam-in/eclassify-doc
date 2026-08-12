---
sidebar_position: 12
---

# Google Map Setup

:::note
**Free API** uses the pre-set location data bundled with the project and Admin Panel. It may not include every country/state/city. You must manually add locations in Admin Panel for complete coverage.  
**Place API** is Google’s paid API and provides accurate, up-to-date location results.
:::

1. Go to Admin Panel → Settings → Map Provider:
   - Free Map API: uses local/admin-managed location data
   - Paid Map API: uses Google Place API for accurate results
      - If selecting Paid Map API, add your Place API key

2. For enabling billing and obtaining a Place API key, refer to our guide: [Billing & API Keys](https://marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase-billing)

3. Copy place API key from Google Cloud Console and paste it into admin panel settings as shown below:

   ![Map API 9](/images/app/mapAPI9.png)

4. Go to [Google Cloud Platform](https://console.cloud.google.com/).

5. Select your Firebase Project

   ![Map API 2](/images/app/mapAPI2.png)

6. Search for APIs.

   ![Map API 3](/images/app/mapAPI3.png)

7. Click on Enable.

   ![Map API 4](/images/app/mapAPI4.png)
8. Enable the following APIs (search and enable one by one):

   Required:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Geocoding API
   - Geolocation API

   Only if using Paid Map API:
   - Place API (Legacy) (Only required if using Paid Version)

9. Go to Credential Tab. You will find your Android and iOS API keys.

    ![Map API 6](/images/app/mapAPI6.png)

10. You have to setup those above API keys for both Platform.

    ### Android

    Open `android/app/src/main/AndroidManifest.xml` and paste the Google Maps meta data tag into your application tag before the activity tag, placing the API key you copied before to replace `YOUR_API_KEY_HERE`.

      ```xml
      <meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY_HERE" />
      ```

    ![Map API 7](/images/app/mapAPI7.png)

    ### iOS

    Open `ios/Runner/AppDelegate.swift` and paste the following code at shown in image.

      ```swift
      GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
      ```

    ![Map API 8](/images/app/mapAPI8.png)
