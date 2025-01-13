import AppSidebar from "@/components/app-sidebar/view";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <AppSidebar /> 
      {children}
    </main>
  );
}
