import AppSidebar from "@/components/app-sidebar/view";
import styles from "./layout.module.css";

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="appContainer" className={styles.main}>
      <div id="appSidebar">
        <AppSidebar /> 
      </div>
      <div id="appContent" className={styles.content}>
        {children}
      </div>
    </div>
  );
}
