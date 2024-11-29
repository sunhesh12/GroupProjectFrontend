"use client";
import React, { useState } from "react";
import style from "./course.module.css";
import CourseCart from "@/component/CourseCart/CourseCart";
import { courses1 } from "@/utils/studentcourse";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SemesterSelector from "./SemesterSelector";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  // Filter courses based on search query and selected semester
  const filteredCourses = courses1.filter((course) => {
    const matchesSearchQuery = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSemester = selectedSemester
      ? course.semester === selectedSemester
      : true;
    return matchesSearchQuery && matchesSemester;
  });

  // Get unique semesters from courses
  const semesters = Array.from(new Set(courses1.map((course) => course.semester)));

  return (
    <div>
      <div className={style.mainWrapper}>
        <div className={style.courseHeader}>
          <h1 className={style.heading}>User Settings</h1>
          <p className={style.subHeading}>
            List of all the courses available throughout the degree programme.
          </p>
          
          <div className={style.filterCourse}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            
            {/* Semester Selectors */}
            <div className={style.semesterSelectors}>
              <SemesterSelector
                selectedSemester={selectedSemester}
                setSelectedSemester={setSelectedSemester}
                semesters={semesters}
              />
            </div>
          </div>
        </div>

        <div className={style.courseBody}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Link key={course.id} href={course.link} className={style.cartLink}>
                <CourseCart
                  id={course.id}
                  imageUrl={course.imageUrl}
                  completion={course.completion}
                  name={course.name}
                  semester={course.semester}
                  link={course.link}
                />
              </Link>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
