"use client"; // Required for client-side state and event handling

import React, { useState } from "react";
import style from "./sigin.module.css";
import Image from "next/image";
import { loginDB } from "@/utils/loggingdb"; // Import the credentials
import { useRouter } from "next/navigation"; // For programmatic navigation

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const LoginIcon = "/logo.jpg";
  const SignInPageImage = "/signInPageImage.jpg";

  function handleLogin(event: React.FormEvent) {
    event.preventDefault(); // Prevent form submission

    // Validate credentials
    const user = loginDB.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Redirect to the dashboard if login is successful
      router.push("/dashboard");
    } else {
      // Show error message if validation fails
      setError("Invalid username or password. Please try again.");
    }
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer1}>
        <div className={style.loginContainer}>
          <div className={style.loginIcon}>
            <div className={style.logoContainer}>
              <Image src={LoginIcon} alt="LMS Logo" width={80} height={80} />
            </div>
          </div>
          <div className={style.LoginText}>
            <h1>Log In</h1>
          </div>
          <form className={style.formContainer} onSubmit={handleLogin}>
            <div className={style.inputFiledContainer}>
              <input
                type="text"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={style.inputFiledContainer}>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={style.errorText}>{error}</p>}
            <div className={style.inputFiledContainer}>
              <button className={style.LoginButton} type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={style.subContainer2}>
        <Image src={SignInPageImage} alt="LMS Logo" width={100} height={100} />
        <h1>Welcome to the Learning Management System</h1>
        <p>Access your courses, tasks, and academic progress here.</p>
      </div>
    </div>
  );
}
