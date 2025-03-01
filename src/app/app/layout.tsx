"use client";
import { useState } from "react";
import AppSidebar from "@/components/app-sidebar/view";
import styles from "./layout.module.css";

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, toggleExpanded] = useState(true);
  return (
    <div id="appContainer" className={styles.main}>
      <div id="appSidebar">
        <AppSidebar expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
      <div
        id="appContent"
        className={styles.content}
        style={{ marginLeft: expanded ? "310px" : "70px" }}
      >
        {children}
      </div>
    </div>
  );
}
