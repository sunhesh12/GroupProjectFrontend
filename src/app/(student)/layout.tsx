"use client";

import React from "react";
import style from "./student.module.css";
import SideNavBar from "../../component/sideNavBar/sideNavBar";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={style.Mainwrapper}>
      <div className={style.mainContainer}>
          <SideNavBar
            systemName={"Learning Management System"}
            facultyName={"Faculty Of Computing"}
          />
          {/* Main Content */}
          <div className={style.container}>{children}</div>
        </div>

        {/* <div className={style.footer}></div> */}
      </div>
    </>
  );
}
