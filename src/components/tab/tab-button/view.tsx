"use client";
import Link from "next/link";
import styles from "./style.module.css";
import useIsCurrentPath from "@/hooks/use-is-currentpath";
import { CSSProperties } from "react";

interface TabProps {
  href: string;
  label: string;
}

export default function TabButton({ href, label }: TabProps) {
  const { isCurrent } = useIsCurrentPath(href);
  const style: CSSProperties = {
    backgroundColor: isCurrent ? "#e3e3e348" : undefined,
  };
  return (
    <Link href={href} className={styles.tabButton} style={style}>
      {label}
    </Link>
  );
}
