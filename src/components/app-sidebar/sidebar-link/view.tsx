"use client";

import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";

type SidebarLinkProps = {
  icon: string;
  alt: string;
  href: string;
  dimensions?: {
    width: number;
    height: number;
  };
  rounded?: boolean;
  children?: ReactNode;
};

export default function SidebarLink({
  icon,
  children,
  alt,
  href,
  dimensions,
  rounded,
}: SidebarLinkProps) {
  const pathname = usePathname();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (pathname === href) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname, href]);
  return (
    <Link
      className={styles.link}
      style={isActive ? { backgroundColor: "#302B2B" } : undefined}
      href={href}
    >
      <div>
        <Image
          alt={alt}
          className={styles.linkIcon}
          src={icon}
          width={dimensions?.width ?? 15}
          height={dimensions?.height ?? 15}
          style={{
            borderRadius: rounded ? "100%" : undefined,
          }}
        />
      </div>
      <div className={styles.linkText}>
        {children}
      </div>
    </Link>
  );
}
