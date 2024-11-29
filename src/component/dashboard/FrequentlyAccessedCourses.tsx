import React from "react";
import style from "./dashboard.module.css";
import Image from "next/image";
import { courses } from "@/utils/studentDasboarddb"; // Import the courses data
import Link from "next/link";

const FrequentlyAccessedCourses: React.FC = () => {
  return (
    <div className={style.facourses}>
      <div className={style.facoursesHeading}>
        <h1>Frequently Accessed Courses</h1>
      </div>
      <div className={style.contiuneSemesterWorkTask}>
        {courses.map((course) => (
          <Link key={course.id} href={course.link} className={style.cartLink}>
            <div  className={style.courseCart}>
              <div className={style.CartImage}>
                <Image
                  className={style.courseCartImage}
                  src={course.imageUrl}
                  alt="cartImage"
                  width={100}
                  height={100}
                />
                <div className={style.whitecorner}>
                  <p>{course.completion}% completed</p>
                </div>
              </div>
              <div className={style.courseName}>
                <h1>{course.name}</h1>
              </div>
              <div className={style.courseSemester}>
                <p>{course.semester}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAccessedCourses;
