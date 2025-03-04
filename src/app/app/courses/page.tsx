<<<<<<< HEAD
// import Button from "@/components/button/view"
import style from "./course.module.css";
import Image from "next/image";
export default function CoursesPage() {
  return (
    <>
      {/* // 	<h1>All the courses</h1>
		// 	<Button isLink={true} href="/app/courses/create">Create a course</Button> */}

      {/* module management development from developer Heshan 2025-02-07 */}

      <h1>Modules</h1>
      <p>List of all the course available throughout the degree programme.</p>
      <div className={style.filterDiv}>
        <div className={style.searchDiv}>
          <p>Search</p>
          <div className={style.searchBox}>
            <Image
              src="/search.png"
              alt="search"
              width={30}
              height={30}
              className={style.searchIcon}
            />
            <input type="text" placeholder="Search for modules" />
          </div>
        </div>
        <div className={style.DegreeDiv}>
          <p>Degree</p>
          <select title="Degree" className={style.DegreeSelect}>
            <option value="bachelor">-Select Degree-</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
          </select>
        </div>
        <div className={style.DegreeDiv}>
          <p>Semester</p>
          <select title="Degree" className={style.DegreeSelect}>
            <option value="bachelor">-Select Semester-</option>
            <option value="bachelor">1st</option>
            <option value="master">2nd</option>
          </select>
        </div>
      </div>
      <div className={style.moduleContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={style.moduleCard}>
            {/* Wrapper to position the progress bar inside the image */}
            <div className={style.imageWrapper}>
              <Image
                src="/signInPageImage.jpg"
                alt="module image"
                width={100}
                height={50}
                className={style.ModuleImage}
              />
              {/* Progress Container at Top Left */}
              <div className={style.progressContainer}>20% completed</div>
            </div>

            <div className={style.moduleDetails}>
              <p className={style.moduleTitle}>
                CSE1011 - Introduction to Software Engineering
              </p>
              <p className={style.moduleSemester}>Semester 03</p>
            </div>
          </div>
        ))}
      </div>
    </>
=======
"use client";
import React, { useState } from "react";
import style from "./course.module.css";
import { courses1 } from "@/utils/studentcourse";
import SearchBar from "./SearchBar";
import SemesterSelector from "./SemesterSelector";
import CourseList from "./CourseList";
import EnrollmentModal from "./EnrollmentModal";

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

  const handleCourseClick = (course: any) => {
    if (course.isEnrolled) {
      window.location.href = course.link; // If already enrolled, navigate directly
    } else {
      setSelectedCourse(course);
      setIsModalOpen(true);
    }
  };

  const handleEnrollmentKeySubmit = () => {
    if (enrollmentKey === selectedCourse?.enrollmentKey) {
      selectedCourse.isEnrolled = true; // Mark the course as enrolled
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
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className={style.semesterSelectors}>
              <SemesterSelector
                selectedSemester={selectedSemester}
                setSelectedSemester={setSelectedSemester}
                semesters={semesters}
              />
            </div>
          </div>
        </div>

        <CourseList
          filteredCourses={filteredCourses}
          handleCourseClick={handleCourseClick}
        />
      </div>

      {isModalOpen && selectedCourse && (
        <EnrollmentModal
          selectedCourse={selectedCourse}
          enrollmentKey={enrollmentKey}
          setEnrollmentKey={setEnrollmentKey}
          handleEnrollmentKeySubmit={handleEnrollmentKeySubmit}
          error={error}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
>>>>>>> parent of 758a039 (Merge pull request #3 from sunhesh12/kal)
  );
}
