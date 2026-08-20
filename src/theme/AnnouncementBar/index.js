import React from "react";
import AnnouncementBar from "@theme-original/AnnouncementBar";
import { useLocation } from "@docusaurus/router";

export default function AnnouncementBarWrapper(props) {
  const location = useLocation();

  // Show announcement bar only on Admin Panel documentation pages
  const isAdminPage =
    location.pathname.includes("/admin-panel") ||
    location.pathname.includes("/admin-panel-config");

  if (!isAdminPage) {
    return null;
  }

  return <AnnouncementBar {...props} />;
}
