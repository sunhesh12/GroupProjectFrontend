import React from "react";
import style from "./dashboard.module.css";

export default function page() {
  let User_Name = "Anura";

  if (User_Name != null || User_Name == "") {
    User_Name = User_Name;
  } else {
    User_Name = "Error Login";
  }
  return (
    <>
      <div className={style.GreetingMessage}>
        <h1>
          Good Moring<span>{" " + User_Name}</span>
        </h1>
      </div>
    </>
  );
}
