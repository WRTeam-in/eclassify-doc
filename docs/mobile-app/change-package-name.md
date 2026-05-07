---
sidebar_position: 3
---

# How to change package name

For detailed information about package name structure and best practices, please refer to our [comprehensive guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename).

1. Open ide terminal go to your project path and execute command

   ```bash
   flutter pub get
   ```

2. If you are running this app for ios then run these following commands in terminal.

   ```bash
   cd ios
   pod install
   cd ..
   ```

3. Change package name of android app
   Execute this command in your terminal

   ```bash
   dart run change_app_package_name:main your_new_package_name
   ```
   
   :::note
   Replace `your_new_package_name` with your desired package name (e.g., `com.yourcompany.appname`). The package name should follow the reverse domain name notation.
   :::

4. Change package name of ios app
   Open ios folder of this project in xcode. Go Select Runner->Targets->General->Identity and enter new package name in Build Identifier.

   ![Change iOS Package Name](/images/app/changePackageName1.png)
