// components/CourseCart.tsx
import React from "react";
import Image from "next/image";
import style from "./courseCart.module.css";  // Adjust the path to match your project structure

interface CourseCartProps {
  id: number;
  imageUrl: string;
  completion: number;
  name: string;
  semester: string;
}

const CourseCart: React.FC<CourseCartProps> = ({ id, imageUrl, completion, name, semester}) => {
  return (
    <div key={id} className={style.courseCart}>
      <div className={style.CartImage}>
        <Image
          className={style.courseCartImage}
          src={imageUrl}
          alt="cartImage"
          width={100}
          height={100}
        />
        <div className={style.whitecorner}>
          <p>{completion}% completed</p>
        </div>
      </div>
      <div className={style.courseName}>
        <h1>{name}</h1>
      </div>
      <div className={style.courseSemester}>
        <p>{semester}</p>
      </div>
    </div>
  );
};

export default CourseCart;
