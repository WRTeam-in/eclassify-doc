---
sidebar_position: 24
---

# AdMob Setup

For a comprehensive guide, check out [Google AdMob Setup Guide](https://marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/advertisement/google-admob)

1. Create Android and iOS apps in your [Google AdMob account](https://admob.google.com/home/) and note the App IDs.

2. Add the App IDs to your mobile projects:

## Android
Open `android/app/src/main/AndroidManifest.xml` and add the AdMob App ID meta-data inside the application tag (before the activity tag):

```xml
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="{{YOUR_GOOGLE_ADMOB_ANDROID_APP_ID_HERE}}" />
```

![Admob 3](/images/app/admob3.png)

## iOS
Open `ios/Runner/Info.plist` and add:

```xml
<key>GADApplicationIdentifier</key>
<string>{{"PLACE_YOUR_GOOGLE_ADMOB_IOS_APP_ID"}}</string>
```

![Admob 2](/images/app/admob2.png)

3. (Optional) You can disable AdMob at any time in Admin Panel → Settings → AdMob Settings.

4. Create ad units in AdMob (Banner, Interstitial, Native) and copy the Ad Unit IDs.

5. Paste the Ad Unit IDs into Admin Panel → Settings → AdMob Settings.

   ![Admob 1](/images/app/admob1.png)
