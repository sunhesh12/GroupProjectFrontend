import Link from "next/link";
import styles from "./style.module.css";
import { HTMLAttributes, ReactNode } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
});

type ButtonProps = {
  children?: ReactNode;
  isLink?: boolean;
  className?: string;
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
  type,
  className,
}: ButtonProps) {
  // Any additional props
  const props: HTMLAttributes<HTMLElement> = {
    "aria-label": "Button",
    role: "button",
    style: { fontSize: fontSize, width: width },
    className: styles.button + " " + workSans.className + " " + className,
  };

  if (isLink && type) throw new Error("You can't give a type for the links");

  if (!isLink) {
    return (
      <button type={type} {...props}>
        {children}
      </button>
    );
  } else {
    if (href === undefined || href === null) {
      throw new Error("href is required for link type button");
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
}
