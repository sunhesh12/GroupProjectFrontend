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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [enrollmentKey, setEnrollmentKey] = useState<string>("");
  const [error, setError] = useState<string>("");

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
  const semesters = Array.from(
    new Set(courses1.map((course) => course.semester))
  );

  // Function to handle course click (open enrollment key modal)
  const handleCourseClick = (course: any) => {
    if (course.isEnrolled) {
      window.location.href = course.link; // If already enrolled, navigate directly
    } else {
      setSelectedCourse(course);
      setIsModalOpen(true);
    }
  };

  // Handle enrollment key submission
  const handleEnrollmentKeySubmit = () => {
    if (enrollmentKey === selectedCourse?.enrollmentKey) {
      // Mark the course as enrolled
      selectedCourse.isEnrolled = true;
      setIsModalOpen(false);
      alert("Successfully enrolled in the course!");
    } else {
      setError("Invalid enrollment key. Please try again.");
    }
  };

  return (
    <div>
      <div className={style.mainWrapper}>
        <div className={style.courseHeader}>
          <h1 className={style.heading}>Modules</h1>
          <p className={style.subHeading}>
            List of all the courses available throughout the degree programme.
          </p>

          <div className={style.filterCourse}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

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
              <div key={course.id} className={style.cartWrapper}>
                {course.isEnrolled ? (
                  <Link
                    href={`${course.link}/${course.name}`}
                    className={style.cartLink}
                  >
                    <CourseCart
                      id={course.id}
                      imageUrl={course.imageUrl}
                      completion={course.completion}
                      name={course.name}
                      semester={course.semester}
                    />
                  </Link>
                ) : (
                  <div
                    className={style.cartLink}
                    onClick={() => handleCourseClick(course)}
                  >
                    <CourseCart
                      id={course.id}
                      imageUrl={course.imageUrl}
                      completion={course.completion}
                      name={course.name}
                      semester={course.semester}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>

      {/* Modal for Enrollment Key */}
      {isModalOpen && selectedCourse && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            {/* Close icon (X) in the top-right corner */}
            <span
              className={style.closeIcon}
              onClick={() => setIsModalOpen(false)}
            >
              X
            </span>
            <h2>{selectedCourse.name}</h2> {/* Display course name */}
            <br />
            <h3>Enter Enrollment Key:</h3> {/* Prompt for key input */}
            <input
              type="text"
              placeholder="Enrollment Key"
              value={enrollmentKey}
              onChange={(e) => setEnrollmentKey(e.target.value)}
            />
            <button onClick={handleEnrollmentKeySubmit}>Enroll me</button>
            {error && <p className={style.error}>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
