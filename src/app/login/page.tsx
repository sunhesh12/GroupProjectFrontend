import React from "react";
import style from "./sigin.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

export default function signin() {
  const LoginIcon = "/logo.jpg";
  const SignInPageImage = "/signInPageImage.jpg";
  const actionSubmitRouting = '../dashboard';

  return (
    <>
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
            <form className={style.formContainer} action={actionSubmitRouting}>
              <div className={style.inputFiledContainer}>
                <input placeholder="Enter Your Username"/>
              </div>
              <div className={style.inputFiledContainer}>
                <input placeholder="Enter Your Username"/>
              </div>
              <div className={style.inputFiledContainer}>
              <button className={style.LoginButton} >Log In</button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.subContainer2}>
          <Image src={SignInPageImage} alt="LMS Logo" width={100} height={100} />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </>
  );
}
