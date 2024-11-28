"use client"; // Ensures client-side rendering
import React, { useEffect, useState } from "react";
import style from "./dashboard.module.css"; // Import styles
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use for redirection

export default function DashboardPage() {
  const [userName, setUserName] = useState<string>("Anura"); // State for user name
  const [notifications, setNotifications] = useState<
    { heading: string; text: string; link: string }[]
  >([]); // State for notifications

  const router = useRouter(); // Use Next.js router for navigation

  useEffect(() => {
    if (!userName) {
      alert("There is an error in login! Please Try Again");
      router.push("/login"); // Redirect to login
    } else {
      console.log("Welcome, " + userName);
    }
  }, [userName, router]);

  useEffect(() => {
    // Initialize with some notifications
    setNotifications([
      {
        heading: "Assignment Deadline",
        text: "Complete these urgent assignments before their deadline ends.",
        link: "/assignments",
      },
      {
        heading: "New Announcement",
        text: "A new course module is now available.",
        link: "/announcements",
      },
    ]);
  }, []); // Run once on component mount

  return (
    <div>
      <div className={style.GreetingMessage}>
        <h1>
          Good Morning <span>{userName ? userName : "Guest"}</span>
        </h1>
      </div>
      <div className={style.NotificationsContainer}>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={style.Notification}
            style={{
              borderColor: notification.heading === "Assignment Deadline" ? "red" : "green",
              backgroundColor:
                notification.heading === "Assignment Deadline" ? "var(--redNotificationx6)" : "var(--redNotificationGreenx6)",
            }}
          >
            <div className={style.NotificationHeading}>
              <h2 style={{
                color: notification.heading === "Assignment Deadline" ? "rgb(124, 10, 10)" : "rgb(12, 123,50)"
              }}>{notification.heading}</h2>
              <p>{notification.text}</p>
            </div>
            <div className={style.AssignmentLink}>
              <Link href={notification.link}>
                <u>Go to activity</u>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
