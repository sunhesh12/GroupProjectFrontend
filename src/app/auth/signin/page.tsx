"use client";

import Image from "next/image";
import styles from "./sigin.module.css";
import Button from "@/components/buttons/view";
import InputField from "@/components/input/view";
import signInAction from "@/actions/signin";
import { useActionState } from "react";
import type { SignInState } from "@/actions/types";

const initialState: SignInState = {
  status: "pending",
  internalErrors: null,
  email: {
    value: "",
    errors: null
  },
  password: {
    value: "",
    errors: null
  },
}

export default function SignIn() {
  const [state, formAction, isPending] = useActionState(signInAction, initialState);

  const LoginIcon = "/logo.jpg";

  return (
    <div className={styles.page}>
      <form className={styles.signInForm} action={formAction}>
        <header className={styles.formHeader}>
          <Image src={LoginIcon} alt="LMS Logo" width={80} height={80} />
          <h1>Sign in</h1>
        </header>
        
        <InputField
          type="text"
          name="email"
          label="Email"
          placeholder="someone@something.com"
        />
        <InputField type="password" name="password" label="Password" />
        <Button type="submit" className={styles.button} loading={isPending}>
          Sign in
        </Button>
      </form>
    </div>
  );
}
