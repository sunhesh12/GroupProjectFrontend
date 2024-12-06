import Image from "next/image";
import style from "./sigin.module.css";

export default function SignIn() { 
  const LoginIcon = "/logo.jpg";
  const SignInPageImage = "/signInPageImage.jpg";

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
          <form className={style.formContainer}>
            <div className={style.inputFiledContainer}>
              <input
                type="text"
                placeholder="Enter Your Username"
                value={"Kalhara"}
                required
              />
            </div>
            <div className={style.inputFiledContainer}>
              <input
                type="password"
                placeholder="Enter Your Password"
                //value={password}
                required
              />
            </div>
            {/*error && <p className={style.errorText}>{error}</p>*/}
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
