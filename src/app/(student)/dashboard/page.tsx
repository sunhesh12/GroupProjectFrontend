"use client"; // Ensures client-side rendering
import React, { useEffect, useState } from "react";
import style from "./dashboard.module.css";
import Link from "next/link";
import Cart from "@/component/cart/cart";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use for redirection
import Task from "@/component/Task/Task";

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>("null");
  const [notifications, setNotifications] = useState<
    { heading: string; text: string; link: string }[]
  >([
    {
      heading: "Loading...",
      text: "Please wait while we load your notifications.",
      link: "#",
    },
  ]);

  const router = useRouter();

  useEffect(() => {
    // Simulate user data fetch
    setUserName("Anura");

    // Simulate notifications fetch
    setNotifications([
      {
        heading: "Assignment Deadline",
        text: "Complete these urgent assignments before their deadline ends.",
        link: "/#",
      },
      {
        heading: "Event Reminder",
        text: "Don't miss the upcoming workshop this Friday.",
        link: "/#",
      },
    ]);
  }, []);

  useEffect(() => {
    if (!userName) {
      alert("There is an error in login! Please Try Again");
      router.push("/login");
    }
  }, [userName, router]);


  // ==================add continue your journy of learning============================
  const cartData = [
    {
      src: "/login.ico",
      headerText: "Create a study group",
      cartText:
        "Collaborate with your friends by making study groups to share resources",
      Link: "#",
    },
    {
      src: "/login.ico",
      headerText: "Explore courses",
      cartText:
        "View the list of courses that need to be studied in within the semester",
      Link: "#",
    },
    {
      src: "/login.ico",
      headerText: "Complete an assignment",
      cartText: "Organize your semester by setting new tasks in the calendar",
      Link: "#",
    },
    {
      src: "/login.ico",
      headerText: "Set the semester plan",
      cartText: "Organize your semester by setting new tasks in the calendar",
      Link: "#",
    },
  ];


  // ===================add continue your semester work here======================
  const [tasks, setTasks] = useState([
    { title: "Submit Assignment", time: "9:00 A.M.", imageSrc: "/task.gif",link:"#" },
    { title: "Attend Workshop", time: "11:00 A.M.", imageSrc: "/task.gif",link:"#"  },
    { title: "Complete Project", time: "2:00 P.M.", imageSrc: "/task.gif",link:"#"  },
    { title: "Prepare Presentation", time: "4:00 P.M.", imageSrc: "/task.gif",link:"#"  },
    { title: "Weekly Review", time: "6:00 P.M.", imageSrc: "/task.gif",link:"#"  },
    { title: "Weekly Review", time: "6:00 P.M.", imageSrc: "/task.gif",link:"#"  },
  ]);

  return (
    <div>
      <div className={style.GreetingMessage}>
        <h1>
          Good Morning <span>{userName || "Guest"}</span>
        </h1>
      </div>
      <div className={style.NotificationsContainer}>
        {notifications.map((notification, index) => (
          <Link key={index} href={notification.link}>
            <div
              key={index} // Ensure the key is directly on the element being iterated
              className={`${style.Notification} ${
                notification.heading === "Assignment Deadline"
                  ? style.RedBackground
                  : style.GreenBackground
              }`}
            >
              <div className={style.NotificationHeading}>
                <h2
                  style={{
                    color:
                      notification.heading === "Assignment Deadline"
                        ? "rgb(124, 10, 10)"
                        : "rgb(12, 123,50)",
                  }}
                >
                  {notification.heading}
                </h2>
                <p>{notification.text}</p>
              </div>
              <div className={style.AssignmentLink}>
                {/* <Link key={index} href={notification.link}> */}
                <u>Go to activity</u>
                {/* </Link> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={style.ContiueLearningContainer}>
        <h1 className={style.ContiueLearningH1}>
          Continue your journey of learning
        </h1>
        <div className={style.subContainer}>
          <div className={style.CartContainer}>
            {cartData.map((cartItem, index) => (
              <div className={style.cart} key={index}>
                <Link href={cartItem.Link} className="link">
                  <Cart
                    src={cartItem.src}
                    header_Text={cartItem.headerText}
                    cartText={cartItem.cartText}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.contiuneSemesterWorkWrapper}>
        <div className={style.contiuneSemesterWorkHedding}>
          <Image
            className={style.cswImage}
            src="/Examination.ico"
            alt="Continue semester work logo"
            width={50}
            height={50}
          />
          <h1>Continue your semester work</h1>
        </div>
        <div className={style.contiuneSemesterWorkBody}>
          <p>
            Never miss a single task assigned in the semester. Check out these
            activities before they are getting missed
          </p>
        </div>
        <div className={style.contiuneSemesterWorkTask}>
        {tasks.map((task, index) => (
            <Task
              key={index}
              title={task.title}
              time={task.time}
              imageSrc={task.imageSrc}
              link={task.link}
            />
          ))}
          </div>
        </div>
      </div>
  );
}
