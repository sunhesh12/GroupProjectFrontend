import React from "react";
import style from "./course.module.css";

interface SemesterSelectorProps {
  selectedSemester: string;
  setSelectedSemester: React.Dispatch<React.SetStateAction<string>>;
  semesters: string[];
}

const SemesterSelector: React.FC<SemesterSelectorProps> = ({
  selectedSemester,
  setSelectedSemester,
  semesters,
}) => {
  return (
    <div className={style.semesterSelector}>
      <select
        value={selectedSemester}
        onChange={(e) => setSelectedSemester(e.target.value)}
      >
        <option value="">Select Semester</option>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </select>
     </div>
  );
};

export default SemesterSelector;
