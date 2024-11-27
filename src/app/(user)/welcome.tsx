import React from "react";
import style from "./user.module.css";
import Image from "next/image";
import Cart from "@/component/cart/cart";
import Link from "next/link";

export default function Page() {
  // Array of cart data
  const cartData = [
    {
      src: "/login.ico",
      headerText: "User login",
      cartText: "Login and access the learning content",
      Link:"../login"
    },
    {
      src: "/login.ico",
      headerText: "About the LMS",
      cartText: "Learn how to use the learning management system",
      Link:""
    },
    {
      src: "/login.ico",
      headerText: "Explore courses",
      cartText:
        "View the list of courses that need to be studied in within the semester",
        Link:""
    },
    {
      src: "/login.ico",
      headerText: "Explore courses",
      cartText:
        "View the list of courses that need to be studied in within the semester",
        Link:""
    },
  ];

  return (
    <div className={style.mainContainer}>
      {/* Main container section */}
      <div className={style.subContainer1}>
        <div className={style.imageContainer}>
          <Image
            src="/education.png"
            alt="Education"
            width={300}
            height={300}
          />
        </div>
        <div className={style.textContaainer}>
          <div className={style.intoHeading}>
            <h1>Welcome to Learning Management System</h1>
          </div>
          <div className={style.introText}>
            <i>
              <p>
                Online learning is not the next big thing, it is the now big
                thing
                <span>~ Donna J. Abernathy</span>
              </p>
            </i>
          </div>
        </div>
      </div>

      {/* Cart section */}
      <div className={style.subContainer2}>
        <div className={style.selectChoise}>
          <h1>Select your choice</h1>
        </div>
        <div className={style.container}>
          <div className={style.subContainer}>
            <div className={style.CartContainer}>
              {/* Loop through the cartData array and render Cart component for each item */}
              {cartData.map((cartItem, index) => (
                  <div className={style.cart} key={index}>
                    <Link href={cartItem.Link} className="link">
                    <Cart
                      src={cartItem.src}
                      header_Text={cartItem.headerText}
                      cartText={cartItem.cartText}
                    />
                    </Link>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.manage}>
          <h1><Link href={''}>Manage the LMS?</Link></h1>
        </div>
      </div>
      <div className={style.footer}>

      </div>
    </div>
  );
}
