"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useTime from "@/hooks/use-time";

export default function DashboardPage() {
  const {data: session, status} = useSession();
  const router = useRouter();
  const {isMorning} = useTime();

  if(status === "unauthenticated") {
    router.push("/auth/signin");
  }

  if(status === "loading") {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div>
      <header>
        <h1>
          {isMorning ? "Good morning" : "Good evening"}
          {" "}
          {session?.user.name}
        </h1>
        <article id="important">
           
        </article>
        <div id="quick-access">
          
        </div>
      </header>
      <article id="menu">
        <header>Continue your journey of learning</header>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
      <article>
        <header>Your activities</header>
      </article>
      <article>
        <header>Announcements</header>
      </article>
      <article>
        <header>Courses</header>
      </article>
    </div>
  );
}
