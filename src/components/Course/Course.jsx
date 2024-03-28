import PropTypes from "prop-types";
const Course = ({ course, handleSelectCourses }) => {
  const { course_title, course_details, cover, price, credit } = course;
  return (
    <div className="max-w-[312px] p-4 bg-gray-100 rounded-xl space-y-5">
      <img
        className="w-[280px] h-[144px] rounded-lg"
        src={cover}
        alt={`course cover photo ${course_title}`}
      />
      <h3 className="text-xl font-semibold">{course_title}</h3>
      <p>{course_details}</p>
      <div className="flex justify-between">
        <div>
          <span>Price: {price}$</span>
        </div>
        <div>
          <span>Credits: {credit}hr</span>
        </div>
      </div>
      <button
        onClick={() => handleSelectCourses(course)}
        className="bg-[#2F80ED] w-full rounded-lg py-2 text-white"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourses: PropTypes.func.isRequired,
};

export default Course;
