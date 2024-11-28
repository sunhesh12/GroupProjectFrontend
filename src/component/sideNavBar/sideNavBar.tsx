"use client";

import React, { useState, useRef } from "react";
import style from "./sidenNavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "./navItems"; // Import navigation items from a separate file

export default function SideNavBar({
  systemName = "",
  facultyName = "",
}: {
  systemName: string;
  facultyName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const size = 30;

  function toggleSideNav() {
    setIsOpen(!isOpen);
  }

  function handleOpenSidebar() {
    if (!isOpen) {
      setIsOpen(true);
    }
    // Focus the input field
    inputRef.current?.focus();
  }

  return (
    <>
      {/* Side Navigation Bar */}
      <div
        className={`${style.sideNavBarContainer} ${
          isOpen ? style.open : style.closed
        }`}
      >
        <div
          className={`${style.logoContainer} ${
            isOpen ? style.openlogoContainer : style.closedlogoContainer
          }`}
        >
          <div className={style.logo}>
            <Image
              style={{ borderRadius: "50px" }}
              src="/logo.jpg"
              alt="Home Icon"
              width={isOpen ? 50 : size}
              height={isOpen ? 50 : size}
            />
          </div>
          <div className={style.logoText}>
            <div className={style.logoTextHeading}>
              <p>{isOpen ? systemName : ""}</p>
            </div>
            <div className={style.logoTextBody}>
              <p>{isOpen ? facultyName : ""}</p>
            </div>
          </div>
          <div className={style.toggleButtonContainer}>
            <button onClick={toggleSideNav} className={style.toggleButton}>
              {
                <Image
                  style={{ borderRadius: "50px" }}
                  src={isOpen ? "/close.png" : "/open.png"}
                  alt="Toggle Icon"
                  width={size}
                  height={size}
                />
              }
            </button>
          </div>
        </div>
        <div className={style.searchBarContainer}>
          <div className={style.searchbarwrapper}>
            <div className={style.searchIcon} onClick={handleOpenSidebar}>
              <Image
                style={{ borderRadius: "50px" }}
                src="/search.png"
                alt="Search Icon"
                width={size}
                height={size}
              />
            </div>
            <div className={style.inputContainer}>
              {/*========= search bar need to connect json ==========*/}
              <input ref={inputRef} placeholder="Search anything" />
              {/*========= search bar need to connect json ==========*/}
            </div>
          </div>
        </div>
        {/* Render all navigation items */}
        <div className={style.bodyContainer}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <NavComponent
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
              />
            </Link>
          ))}
        </div>

        <div className={style.endDiv}>
          <div className={style.settingDiv}>
          <Link href={"#"}>
              <NavComponent
                icon={(
                  <Image
                    src="/Settings.ico"
                    alt="Settings Icon"
                    width={size}
                    height={size}
                  />
                )}
                label={"Settings"}
                isOpen={isOpen}
              />
            </Link>
          </div>
          <div className={style.profile}>
            {/* user showing futer development */}
          </div>
        </div>
      </div>
    </>
  );
}

/* Reusable Navigation Component */
function NavComponent({
  icon,
  label,
  isOpen,
}: {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
}) {
  return (
    <div className={style.navItem}>
      <span className={style.icon}>{icon}</span>
      {isOpen && <span className={style.label}>{label}</span>}
    </div>
  );
}
