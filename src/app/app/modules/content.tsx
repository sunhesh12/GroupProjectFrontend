"use client";
import style from "./page.module.css";
import SearchBar from "./search-bar";
import SemesterSelector from "./semester-selector";
import CourseList from "./course-list";
import { useRouter } from "next/router";
import { useState } from "react";
import { courses1 } from "@/utils/studentcourse";
import EnrollmentModal from "./enrollment-modal";

export default function Content() {
  const router = useRouter();
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
    router.push(`/app/modules/${course.id}`);
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
    <>
      <div className={style.mainWrapper}>
        <header className={style.courseHeader}>
          <h1 className={style.heading}>Modules</h1>
          <p className={style.subHeading}>
            List of all the courses available throughout the degree programme.
          </p>

          <div className={style.filterCourse}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className={style.semesterSelectors}>
              <SemesterSelector
                selectedSemester={selectedSemester}
                setSelectedSemester={setSelectedSemester}
                semesters={semesters}
              />
            </div>
          </div>
        </header>
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
    </>
  );
}
