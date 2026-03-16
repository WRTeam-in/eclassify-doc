---
sidebar_position: 5
---

# ChangeLog

Welcome to the eClassify ChangeLog! This section documents all the important changes, updates, and improvements made to the eClassify platform.

## Version Compatibility Table

| Product Version | Flutter Version | Kotlin Version | AGP Version | distributionUrl (Gradle) | JDK Version |
|----------------|----------------|---------------|-------------|--------------------------|-------------|
| 2.11.0         | 3.41.3         | 2.3.0        | 8.9.1       | 8.11.1                      | 22          |
| 2.10.0          | 3.38.6         | 2.1.0        | 8.9.1       | 8.11.1                      | 22          |
| 2.9.0          | 3.38.3         | 2.1.0        | 8.9.1       | 8.11.1                      | 22          |
| 2.8.0          | 3.35.6         | 2.1.0        | 8.9.1       | 8.11.1                      | 22          |
| 2.7.0          | 3.35.1         | 2.1.0        | 8.6.1       | 8.8                      | 22          |

## Version History

<details open>
<summary>Version 2.11.0 (Updated on 16 March 2026)</summary>

#### New Features

- Redesigned chat feature with new UI for easy access
- Multi-message and full chat deletion
- Redesigned subscription module with active plans screen and support for global and category-specific packages
- Paytabs and DPO payment gateways support
- 2Factor.in OTP provider support
- Follow and unfollow functionality with dedicated followers and following screens
- Custom Google AdSense ads configuration (Admin + Web)
- Category bulk upload with multi-language translation support (Admin)
- Custom field bulk upload with translation support (Admin)
- Email notification templates configuration in Admin Settings
- Multi-select ads approval functionality in Admin Panel

#### Improvements

- Centralized Material 3 theme and color system (App)
- Redesigned seller profile screen with enhanced contact and rating details (App)
- Redesigned onboarding screen (App)
- Unread message badge on chat icon (App)
- Enabled edge-to-edge display support (App)
- Featured Category toggle from Admin Panel (Admin + Web)
- Improved location filtering on "/Ads" page (Web)
- URL language sync with fallback and HTML tag update (Web)
- Admin panel sidebar redesigned with improved navigation (Admin)
- Admin panel ads create and update UI enhancements (Admin)
- Admin panel theme color customization option in Settings (Admin)
- Added country code support when creating or updating items
- Multi-language ads creation and update support in Admin Panel

#### Bug Fixes

- Item details page now displays the item's contact number instead of the seller's profile number

#### Updates
- Flutter App Compatibility with Flutter SDK version 3.41.3

</details>

<details>
<summary>Version 2.10.0 (Updated on 23 January 2026)</summary>

#### New Features

- Multi-currency support
- Category-based subscription plans
- Location-based sliders
- Watermark feature (Requires [Cron Job Configuration](admin-panel-config/cron-job-setup.md))
- Custom field bulk update
- Phone and password login
- Location search in ad and edit listing (Web & App)
- Optional phone number during ad listing with display in ad details (Web & App)
- Stripe Dashboard payment methods support (Web)
- Listing duration support for free ad listings

#### Improvements

- Custom listing duration in subscription plans
- Share links open the app directly, avoiding website redirection (App)
- Centralized AppConfig for all app configuration properties (App)
- Dark theme for Map (App)
- General fixes and improvements

#### Updates
- Flutter App Compatibility with Flutter SDK version 3.38.6

</details>

<details>
<summary>Version 2.9.0 (Updated on 4 December 2025)</summary> 

#### New Features

- Create ads from Admin Panel
- Allow uploading of sample/demo data (Only Categories and Custom Field) (Admin)
- Enable bulk uploads for custom fields (Admin)
- Send email to users on new login (Admin)
- Let admins cancel user subscriptions from Admin Panel
- Caching for metadata and structured data in server-side APIs, configurable via `.env` (Web)

#### Improvements

- PHP support version updated to 8.2.0 or higher
- Advertisements page UI in Admin Panel
- Country code support for mobile numbers in Profile, Ad Listing, and Edit Listing (App + Web)
- Integrate Logout API to stop notifications after logout (App + Web)
- Reduce Place API costs by using session IDs (App + Web)
- Add filter options to the featured section screen (App + Web)
- Show global ads when no ads are available for the selected location (App + Web)
- Sitemap improvements (Web)
- Home page Lighthouse performance improvements (Web)
- Improved location selection flow for new users (App)
- Simplified authentication flow by removing redundant screens (App)
- Optimized filter screen and cleaned up unwanted code files (App)
- Optimized home screen to reduce lag issues (Additional optimizations are in progress and will roll out in upcoming updates)

#### Bug Fixes

- Minor bug fixes and general improvements


#### Updates
- Flutter App Compatibility with Flutter SDK version 3.38.3

</details>

<details>
<summary>Version 2.8.0 (Updated on 16 October 2025)</summary>

#### New Features

- Auto-renewal for items (same-package only)
- Bulk-delete expired items
- Bulk-renew selected ads
- PayPal payment gateway

#### Improvements

- Default language selector in top bar
- Area-level translation support
- Firebase notification scalability for mass admin broadcasts
- JSON upload for English & other languages in Language editor (Admin)
- Translation UI for About us, Contact us, Privacy policy, Terms & Conditions, Refund Policy (Admin)
- Sticky landing-page header with dynamic section highlights (Web)
- Responsive chat page on small screens (Web)
- Responsive profile page on small screens (Web)
- Side-sheet UI polish (Web)

#### Updates

- PhonePe SDK updated to latest version
- Flutter SDK compatibility raised to 3.35.6
- Resolved Google Play Console 16 KB page-size warning (App)
- Fixed Google Play Console warnings regarding READ_MEDIA_* permission usage

</details>

<details>
<summary>Version 2.7.0 (Updated on 27 August 2025)</summary>

#### New Features
- Multi-Language Support for Feature Section
- Multi-Language Support for Report Reasons for Ads
- Multi-Language Support for Subscription Packages
- Multi-Language Support for Settings (FAQs, Privacy Policy, Terms & Conditions, Contact Us etc.)
- Multi-Language Support for Blogs
- Multi-Language Support for Verification Fields
- Refund Policy Page with Multi-Language Support (Web)
- Multi-Language Support for Ad Details and Custom Fields
- Multi-Language Support for SEO - Metadata and Structured Data

#### Improvements
- Location Selection based on API selected in Admin Panel (Free API or Paid API)
- Converted Web Version from CSS to Tailwind CSS

#### Updates
- Flutter App Compatibility with Flutter SDK version 3.35.1

</details>

<details>
<summary>Version 2.6.0 (Updated on 11 June 2025)</summary>

#### New Features
- Edit Listing by Admin from admin panel
- API Source Selection (Free Map API Key or Paid Place Map API Key)
- Job Hiring functionality
- Job Application and Management
- Price Field Optional Toggle based on category
- Dynamic Sitemap Generation for all ads, blogs, and categories
- Location Selection After Login with Skip Option
- Location Change and Reset from Home and Search
- SEO Details Management from Admin Panel for Terms & Conditions, Privacy Policy, Landing Page, Contact Us, and About Us

#### Improvements
- Location Selection and Search Flow based on selected API source
- Home Page Ads display all by default when no location is selected
- API Response message translation based on selected language

#### Updates
- Flutter App compatibility with Flutter SDK version 3.32.2

</details>

<details>
<summary>Version 2.5.0 (Updated on 13 April 2025)</summary>

#### New Features
- Bank Transfer Payment Integration
- Twilio SMS Gateway Integration
- Ads Expiration Notification
- Subscription Plan Expiration Notification
- Add Latitude and Longitude Using Google Maps in Admin Panel (Area Creation)
- Add Latitude and Longitude Using Google Maps in Admin Panel (City Creation)
- Share Seller Functionality in the App

#### Improvements
- Approved Ads Editable with Resubmission & Re-approval
- Location Based Items Handling with Latitude and Longitude
- Deep Link Functionality
- Resolved Lagging Issue in the App
- Login modal now opens directly instead of showing an alert when login is required on the web

#### Updates
- Label Changed: 'Item' to 'Advertisement'
- Flutter Project Now Compatible with Flutter SDK v3.29.2

</details>

<details>
<summary>Version 2.4.0 (Updated on 5 March 2025)</summary>

#### New Features
- Premium & Featured ads with expiry date in admin panel
- Auto Approve toggle globally in settings
- FlutterWave payment integration
- Separate login options for Email & Mobile in website
- Renew item with rejection handling with soft and permanent rejection
- Ad filters: Soft Reject & Permanent Reject in my ads list screen

#### Improvements
- Phonepe payment integration with SDK in app
- Ad management & sorting updates in admin panel
- Allow changing parent category of category in admin panel
- Improve the appearance of the main company logo in the header for better visual appeal in website

</details>

<details>
<summary>Version 2.3.0 (Updated on 9 January 2025)</summary>

#### New Features
- Free AD Listing Option
- Range Radius in Featured Section
- Min and max Range for Radius wise Searching
- Unread messages indicator
- Show Google Ads in between items on home page infinite scroll (App)
- Auto Approval Ad Toggle for each Sellers – (Admin)
- Currency symbol Position

#### Improvements
- Number with Suffix
- SEO Optimisation
- Ads Details page full description Issue in desktop
- Set default active Seller tab in Chat
- Admin Panel Settings Page improvements (Admin)
- All country Filter Selection in Ads Page
- Custom Field value filter in Item Page

#### Bug Fixes
- Fix my Ads Page filter
- Rating Average issue
- Tips Rank order change issue

</details>

<details>
<summary>Version 2.2.0 (Updated on 22 November 2024)</summary>

#### New Features
- Phonepe Payment Gateway Integration
- Renew Item
- Authentication enable/disable
- Seller rating list display
- Rating Report

#### Improvements
- Offer notification redirection in chat item
- Deeplink share
- Filter tree category fix in admin panel
- Language translation new label improvement
- Improve Watermark image
- Make contact Number as optional in Registration
- Send Notification on Seller Verification Request Status change
- Infinity scroll remove and add load more in web home page
- Product detail page image should show full and with next and prev
- Change in the Filter tree flow
- All category name-wise items in app
- Pagination added in chat list and chat messages

</details>

<details>
<summary>Version 2.1.0 (Updated on 29 September 2024)</summary>

#### New Features
- Nearby Ads with KM Range
- Option to Hide/Show Personal Details of Seller
- Activate free package for only one time
- Watermark on Images
- Native Ads
- Auto Generate Slug
- Seller Profile and Ratings
- Filter to Only Country, State and City
- Category and custom field-wise filter
- Allow users to chat without making an offer
- User verification
- Add dynamic SEO to the website

#### Improvements
- Paystack Mobile Money
- Featured Subscription plan UI Change
- Improve home page access flow (without location static pages should be accessible)
- ERROR messages in location and auth in web
- Ad Expiry days in Package
- Send Notification on Make Offer
- Category View UI changes
- Dashboard improvement in admin panel
- Language menu UX Improvement
- Default lat and long set if location is not selected

</details>

<details>
<summary>Version 2.0.1 (Updated on 31 July 2024)</summary>

#### Improvements
- Infinite Items Scroll added in Home page - (Web)
- Category Menu UI Changed - (Web)
- Ad Listing Flow Improve - (Web)
- Improve Responsiveness in Mobile Devices - (Web)
- Map added in Location - (Web)

#### Bug Fixes
- Location issue fixed in safari browser - (Web)
- Other Known Issues - (Web)
- Type error when Ad Listing - (App)
- Broken Logo issue in General Settings - (Admin Panel)
- Panel Translation issue in Some Specific Servers - (Admin Panel)

</details>

<details>
<summary>Version 2.0.0 (Updated on 8 July 2024)</summary>

#### New Features
- Web Version

#### Improvements
- Multi-Device Notification Support (App & Web)
- Recursive Category Fetching using Mysql 8 CTE functions (Admin Panel & API)

#### Bug Fixes
- Company Name change (Admin Panel)
- Other Known Issues

</details>

<details>
<summary>Version 1.1.0 (Updated on 12 June 2024)</summary>

#### New Features
- Blog management (Admin Panel + App)
- Razorpay Payment Gateway (Admin Panel + App)
- Paystack Payment Gateway (Admin Panel + App)
- Custom Country, State, City, Area management instead of place API from google (Admin Panel + App)
- Assign Package to Customer using Cash & Cheque (Admin Panel + App)
- FAQ management - (Admin Panel)
- Category Option added in Slider (Admin Panel + App)

#### Improvements
- Multilingual Category names (Admin Panel + App)
- System Settings & Languages added in Caching for better speed - (Admin Panel)
- Rejected item reason message in Admin panel - (Admin Panel)
- Custom Field Search Functionality - (App)
- Slug in Category (Admin Panel)
- Slug in Item (App)
- Delete Item button (Admin Panel)
- Single account login even if user is login through (Email, Phone, Google) (APP)
- User & Item Active / Inactive options (Admin Panel)
- Flutter version compatibility upgraded to 3.22.1 (App)

#### Bug Fixes
- FCM Notification up-gradation (Admin Panel)
- Other known bug fixes (Admin Panel + App)

</details>

<details>
<summary>Version 1.0.2 (Updated on 5 May 2024)</summary>

#### New Features
- Block User Functionality (Admin Panel + App)
- User Safety Tips (Admin Panel + App)
- Admob Settings (Admin Panel)
- Video link functionality (App)

#### Improvements
- Package Pricing Calculation & UI (Admin Panel)
- Default logo added for English Language (Admin Panel)
- Reported Ads Functionality (App)

#### Bug Fixes
- User Signup issue when login using Phone Number (API)

</details>

<details>
<summary>Version 1.0.1 (Updated on 12 April 2024)</summary>

#### New Features
- Filters added in Custom Fields & Items (Admin Panel)
- English Name field added in language form (App & Admin Panel)
- Interstitial Google + (App)
- Native Share Link (App)

#### Improvements
- RTL Layout (App + & Admin Panel)
- Mobile responsive layout (Admin Panel)
- Dark Theme

#### Bug Fixes
- Missing language labels
- Known Bug Fixes

</details>

## Need Help?

If you have any questions about the changes or need assistance with updates, please visit our [Support](/docs/support) section or contact our support team.
