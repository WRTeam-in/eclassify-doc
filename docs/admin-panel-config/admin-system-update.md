---
sidebar_position: 6
---

# Admin System Update

Update your eClassify Admin Panel from one version to the next using the built-in **System Update** tool. Follow the steps below in order.

## Steps

1. **Take a backup** of your current version code and database.
2. **Download the latest code** from CodeCanyon.
3. **Extract the code**, then extract the admin code and head to the `update` folder inside the admin code.
4. In your **Admin Panel → System Update**:
   1. Add your **Purchase Code**.
   2. Upload the update zip for the version you want to update to. For example, if your current version is `2.10.0`, upload the `Update-2.10.0-to-2.10.1.zip` file.
   3. Click **Save** and wait for the update to complete.

## Important Note

Starting from version `2.13.1`, the CodeCanyon package includes the update scripts for the **last 3 versions** only.

You must update your admin system **version by version**, sequentially. For example, if you are currently on `2.10.0`, update to `2.10.1` first, then to `2.11.0`, and so on, until you reach the latest version.

:::tip Recommended
After every version update, verify that the system is working properly. Then take a fresh backup of the current version before proceeding to the next version update.
:::

---

## Version-Specific Pre-Update Instructions

Some versions require **additional manual steps** before running the System Update. Expand the relevant version below for instructions.

<details open>
<summary><strong>v3.0.0 — Important Steps Before Updating</strong></summary>

If you are updating to version `3.0.0`, there are **additional manual steps** required before running the system update. Follow the steps below carefully.

#### Step 1 — Download & Extract the Latest Code

1. **Download the latest code** from CodeCanyon.
2. **Extract the downloaded zip**, then extract the **admin code** from within it.
3. Locate and **extract the fresh installation zip** from the extracted admin code.

#### Step 2 — Prepare the Required Files

From the **fresh installation** folder, collect the following files and folders:

- `vendor/` folder
- `composer.json`
- `composer.lock`
- `bootstrap/` folder

Compress all of the above into a **single zip file**.

#### Step 3 — Replace Files on Your Hosted Server

:::caution
This step involves deleting files from your live server. Make sure you have a **full backup** before proceeding.
:::

1. **Upload** the zip you created in Step 2 to your hosted server (where your current `2.14.0` version code is running).
2. **Before extracting**, delete the following existing files/folders from your server:
   - `bootstrap/` folder
   - `vendor/` folder
   - `composer.json`
   - `composer.lock`
3. **Extract the zip** you uploaded.
4. Verify that all the contents of the zip have been **extracted properly**.

:::warning PHP Version & Extension Requirement
After uploading and extracting the files, make sure that:
- Your server's **PHP version is 8.3 or above**.
- The **`exif`** PHP extension is enabled in your server configuration (required for image processing and upload handling).

Proceeding with a lower PHP version or without the `exif` extension will cause errors.
:::

#### Step 4 — Replace `config/app.php`

Replace the contents of **`config/app.php`** on your hosted server with the contents of `config/app.php` from the **fresh installation** folder.

#### Step 5 — Proceed with the 3.0.0 Update

Once all the above steps are complete, proceed with the standard **System Update** process in your Admin Panel to apply the `3.0.0` update.

</details>
