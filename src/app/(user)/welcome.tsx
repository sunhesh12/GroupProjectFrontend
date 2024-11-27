import React from 'react';
import style  from './user.module.css';
import Image from 'next/image';

export default function page() {
  return (
    <>
    {/* make main container */}
    <div className={style.mainContainer}>
      <div className={style.subContainer1}>
        <div className={style.imageContainer}>
          <Image 
            src="/education.png"
            alt='Education'
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
            <p>Online learning is not the next big thing, it is the now big thing
              <span>~ Donna J. Abernathy</span></p></i>
          </div>
        </div>
      </div>
      <div className={style.subContainer2}>
        <div className={style.selectChoise}><h1>Select your choice</h1></div>
        <div className={style.container}>
          <div className={style.subContainer}>
            <div className={style.CartContainer}>
              <div className={style.cart}></div>
              <div className={style.cart}></div>
              <div className={style.cart}></div>
              <div className={style.cart}></div>
            </div>
          </div>
        </div>
        {/* <div><h1>Select your choice</h1></div> */}
      </div>
    </div>
    </>
  )
}
