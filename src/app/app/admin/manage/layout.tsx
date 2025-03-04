import { auth } from "@/utils/auth";
import styles from "./layout.module.css";
import { redirect } from "next/navigation";
import { user } from "@/utils/backend";
import { Work_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Tab from "@/components/tab/view";

const workSansFont = Work_Sans({
  subsets: ["latin"],
});

export default async function ManageLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // Unauthenticated
  if (!session) {
    redirect("/auth/signin");
  }

  const res = await user.get(session.user.id!);
  const currentUser = res?.payload;

  // Invalid user
  if (!currentUser) {
    throw new Error("Accessing an unavailable user");
  }

  // Only for authorized admins
  if (currentUser.Role !== "admin") {
    redirect("/app/dashboard");
  }

  return (
    <div className={styles.main + " " + workSansFont.className}>
      <header>
        <h1>Manage Resources</h1>
        <p>Manage all the courses, modules, students and lecturers</p>
        <Tab
          style={{ marginTop: "50px" }}
          tabs={[
            { label: "Students", href: "/app/admin/manage/students" },
            { label: "Modules", href: "/app/admin/manage/modules" },
            { label: "Lecturers", href: "/app/admin/manage/lecturers" },
            { label: "Courses", href: "/app/admin/manage/courses" },
          ]}
        />
        {children}
      </header>
    </div>
  );
}
