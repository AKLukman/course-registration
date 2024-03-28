import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleSelectCourses }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectCourses={handleSelectCourses}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleSelectCourses: PropTypes.func.isRequired,
};

export default Courses;
