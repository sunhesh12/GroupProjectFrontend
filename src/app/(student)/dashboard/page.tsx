"use client"
import React, { useEffect, useState } from "react";
import GreetingMessage from "./GreetingMessage";
import Notifications from "./Notifications";
import ContinueLearning from "./ContinueLearning";
import SemesterWork from "./SemesterWork";
import FrequentlyAccessedCourses from "./FrequentlyAccessedCourses";
import { studentDasboarddb } from "@/utils/studentDasboarddb";

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<
    { heading: string; text: string; link: string }[]
  >([]);
  const [cartData, setCartData] = useState<
    { src: string; headerText: string; cartText: string; Link: string }[]
  >([]);
  const [tasks, setTasks] = useState<
    { title: string; time: string; imageSrc: string; link: string }[]
  >([]);

  useEffect(() => {
    const data = studentDasboarddb(); // Fetch data from db()
    setUserName(data.userName);
    setNotifications(data.notifications);
    setCartData(data.cartData);
    setTasks(data.tasks);
  }, []);

  return (
    <div>
      <GreetingMessage userName={userName} />
      <Notifications notifications={notifications} />
      <ContinueLearning cartData={cartData} />
      <SemesterWork tasks={tasks} />
      <FrequentlyAccessedCourses />
    </div>
  );
}
