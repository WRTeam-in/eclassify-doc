---
sidebar_position: 26
---

# How to Update the Mobile App

Staying up to date with the latest version ensures you have the newest features, performance improvements, and bug fixes. This guide explains the two primary methods for updating your project.

:::important Backup First
Always create a complete backup of your current project directory before starting the update process. This ensures you can revert to a working state if anything goes wrong during the update.
:::

## Method 1: Granular Update (Using Changelog.txt)

This method is recommended if you have made extensive customizations to your codebase. It allows you to see exactly which files have changed and update them one by one.

1.  **Prepare your Project**: Ensure you have a backup and a clean working environment.
2.  **Open `Changelog.txt`**: This file contains a comprehensive list of every file that has been added, modified, or deleted in the latest version.
3.  **Update Files Manually**:
    *   **Modified (M)**: Locate the file in the update package and replace the corresponding file in your project.
    *   **Added (A)**: Copy the new file from the update package into the correct directory in your project.
    *   **Deleted (D)**: Remove the specified file from your project.
4.  **Handle Customizations**: If a file marked as **Modified (M)** contains your own custom code, you should:
    *   First, replace the file with the new version.
    *   Then, manually re-apply your custom changes to that file.
5.  **Verify**: After processing all entries in the changelog, run your application to ensure everything is functioning as expected.

---

## Method 2: Bulk Update (Using Changed-files folder)

This is a faster method that allows you to update all modified and added files simultaneously.

1.  **Locate the Folder**: Find the `changed-files` folder in the update package.
2.  **Copy and Replace**: Directly copy all contents of this folder and paste them into your project's root directory. When prompted, choose to **Replace** or **Overwrite** existing files.
3.  **Manual Cleanup**:
    :::warning Renamed and Deleted Files
    The `changed-files` folder only contains new and modified files. It **cannot** automatically handle renamed or deleted files. You **must** refer to the `Changelog.txt` to identify any files that need to be manually deleted or renamed.
    :::
4.  **Resolve Conflicts**: If you have custom changes in files that were just overwritten, you will need to re-integrate those changes.

---

## Understanding File Status Markers

The `Changelog.txt` uses the following markers to indicate what happened to each file:

| Marker | Meaning | Action Required |
| :--- | :--- | :--- |
| **M** | Modified | Replace the file in your project. |
| **A** | Added | Add the file to your project. |
| **D** | Deleted | Delete the file from your project. |
| **R** | Renamed | Rename the file in your project. |
| **R100** | Renamed (Identical) | Only the filename changed; content is 100% the same. |
| **R90** | Renamed (Similar) | Filename changed; content has minor (approx. 10%) changes. |
| **R50** | Renamed (Major) | Filename changed; content has significant (approx. 50%) changes. |

## Post-Update Steps

After updating the files:
1.  **Clean Build**: Run `flutter clean` to remove old build artifacts.
2.  **Update Dependencies**: Run `flutter pub get` to ensure all packages are up to date.
3.  **Test Thoroughly**: Test all core features, especially those mentioned in the latest release notes.
