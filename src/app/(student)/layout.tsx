"use client";

import React, { useState } from "react";
import Image from "next/image"; // Ensure you import Image from next/image
import style from "./student.module.css";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideNav() {
    setIsOpen(!isOpen);
  }

  // const lms_Logo =
  // Define your navigation items here
  const navItems = [
    {
      icon: (
        <Image
          src="/home-icon.png" // Replace with your image path
          alt="Home Icon"
          width={24}
          height={24}
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Image
          src="/docs-icon.png" // Replace with your image path
          alt="Documents Icon"
          width={24}
          height={24}
        />
      ),
      label: "Documents",
    },
    {
      icon: (
        <Image
          src="/settings-icon.png" // Replace with your image path
          alt="Settings Icon"
          width={24}
          height={24}
        />
      ),
      label: "Settings",
    },
    {
      icon: (
        <Image
          src="/messages-icon.png" // Replace with your image path
          alt="Messages Icon"
          width={24}
          height={24}
        />
      ),
      label: "Messages",
    },
    {
      icon: (
        <Image
          src="/profile-icon.png" // Replace with your image path
          alt="Profile Icon"
          width={24}
          height={24}
        />
      ),
      label: "Profile",
    },
  ];

  return (
    <>
      <div className={style.mainContainer}>
        {/* Side Navigation Bar */}
        <div
          className={`${style.sideNavBarContainer} ${
            isOpen ? style.open : style.closed
          }`}
        >
          <div className={`${style.logoContainer} ${
            isOpen ? style.openlogoContainer : style.closedlogoContainer
          }`}>
            <div className={style.logo}>
              <Image
                style={{ borderRadius: "50px" }}
                src="/logo.jpg" // Replace with your image path
                alt="Home Icon"
                width={50}
                height={50}
              />
            </div>
            <div className={style.logoText}>
              <div className={style.logoTextHeading}>
                <p>{isOpen ? "Learning management System" : ""}</p>
              </div>
              <div className={style.logoTextBody}>
                <p>{isOpen ? "Faculty of computing" : ""}</p>
              </div>
            </div>
            <div className={style.toggleButtonContainer}>
              <button onClick={toggleSideNav} className={style.toggleButton}>
                {isOpen ? (
                  <Image
                    style={{ borderRadius: "50px" }}
                    src="/close.png" // Replace with your image path
                    alt="Home Icon"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image
                    style={{ borderRadius: "50px" }}
                    src="/open.png" // Replace with your image path
                    alt="Home Icon"
                    width={40}
                    height={40}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Render all navigation items */}
          {navItems.map((item, index) => (
            <NavComponent
              key={index}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className={style.container}>{children}</div>
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
  icon: React.ReactNode; // Accepts React nodes, including images
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
