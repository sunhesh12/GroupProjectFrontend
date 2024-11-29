"use client";
import React, { useEffect, useState } from "react";
import GreetingMessage from "@/component/dashboard/GreetingMessage";
import Notifications from "@/component/dashboard/Notifications";
import ContinueLearning from "@/component/dashboard/ContinueLearning";
import SemesterWork from "@/component/dashboard/SemesterWork";
import FrequentlyAccessedCourses from "@/component/dashboard/FrequentlyAccessedCourses";
import { studentDasboarddb } from "@/utils/studentDasboarddb";
import AcademicPerfomance from "@/component/dashboard/academicPerfomance";

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

  const [Academic_Perfonce, setAcademic_Perfonce] = useState<{
    GPA: string;
    improveGpaLink: string;
    examResultLink: string;
  } | null>(null);

  useEffect(() => {
    const data = studentDasboarddb(); // Fetch data from db
    setUserName(data.userName);
    setNotifications(data.notifications);
    setCartData(data.cartData);
    setTasks(data.tasks);
    setAcademic_Perfonce(data.Academic_Perfonce[0] || null); // Use only the first record
  }, []);

  return (
    <div>
      <GreetingMessage userName={userName} />
      <Notifications notifications={notifications} />
      <ContinueLearning cartData={cartData} />
      <SemesterWork tasks={tasks} />
      <FrequentlyAccessedCourses />
      {Academic_Perfonce && (
        <AcademicPerfomance
          GPA={Academic_Perfonce.GPA} // Use uppercase here
          improveGpaLink={Academic_Perfonce.improveGpaLink}
          examResultLink={Academic_Perfonce.examResultLink}
        />
      )}
    </div>
  );
}
