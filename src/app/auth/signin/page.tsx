import Image from "next/image";
import style from "./sigin.module.css";
import Button from "@/components/button/view";

export default function SignIn() { 
  const LoginIcon = "/logo.jpg";

  return (
    <div className={style.mainContainer}>
        <article className={style.loginContainer}>
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
                defaultValue={"Kalhara"}
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
              <Button>
                Log In
              </Button>
            </div>
          </form>
        </article>
    </div>
  );
}
