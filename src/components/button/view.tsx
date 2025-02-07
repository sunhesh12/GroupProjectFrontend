import Link from "next/link";
import styles from "./style.module.css";
import { HTMLAttributes, ReactNode } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"]
});

type ButtonProps = {
  children?: ReactNode;
  isLink?: boolean;
  href?: string;
  width?: string;
  fontSize?: string;
  type?: "submit" | "reset" | "button";
};

export default function Button({
  children,
  isLink,
  href,
  width,
  fontSize,
  type
}: ButtonProps) {
  // Any additional props
  const props: HTMLAttributes<HTMLElement> = {
    "aria-label": "Button",
    role: "button",
  };

  if(isLink && type) throw new Error("You can't give a type for the links");

  if (!isLink) {
    return (
      <button
        type={type}
        className={styles.button + " " + workSans.className}
        style={{ fontSize: fontSize, width: width }}
        {...props}
      >
        {children}
      </button>
    );
  } else {
    if (href === undefined || href === null) {
      throw new Error("href is required for link type button");
    }
    return (
      <Link
        className={styles.button + " " + workSans.className}
        style={{ fontSize: fontSize, width: width }}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
