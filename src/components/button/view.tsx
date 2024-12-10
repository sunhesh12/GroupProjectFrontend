import Link from "next/link";
import styles from "./style.module.css";
import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  isLink?: boolean;
  href?: string;
  width?: string;
  fontSize?: string;
};

export default function Button({
  children,
  isLink,
  href,
  width,
  fontSize,
}: ButtonProps) {
  // Any additional props
  const props: HTMLAttributes<HTMLElement> = {
    "aria-label": "Button",
    role: "button",
  };
  if (!isLink) {
    return (
      <button
        className={styles.button}
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
        className={styles.button}
        style={{ fontSize: fontSize, width: width }}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
