// import Button from "@/components/button/view"
import style from "./course.module.css";
import Image from "next/image";
export default function CoursesPage() {
  return (
    <>
      {/* // 	<h1>All the courses</h1>
		// 	<Button isLink={true} href="/app/courses/create">Create a course</Button> */}

      {/* module management development from developer Heshan 2025-02-07 */}

      <div className={style.moduleManagement}>
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
      </div>
    </>
  );
}
