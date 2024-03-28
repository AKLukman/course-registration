import PropTypes from "prop-types";

const Credits = ({
  selectCourses,
  totalCredits,
  reaminingCredits,
  totalPrice,
}) => {
  return (
    <div className="md:w-1/3 bg-gray-50 rounded-lg ml-6 py-6 text-center space-y-5">
      <h2 className="text-xl text-[#2F80ED] font-bold">
        Credit Hour Remaining {reaminingCredits} hr
      </h2>
      <div className="border-b-2 w-[264px] ml-[78px]"></div>
      <h3 className="text-xl font-bold  ">Course Name</h3>
      <ol type="1">
        {selectCourses.map((course, idx) => (
          <li key={course.id}>
            {idx + 1}. {course.course_title} {course.credit}
          </li>
        ))}
      </ol>

      <p className="font-medium">Total Credit Hour : {totalCredits}</p>
      <div className="border-b-2 w-[264px] ml-[78px]"></div>
      <p className="font-medium">Total Price : {totalPrice} USD</p>
    </div>
  );
};
Credits.propTypes = {
  selectCourses: PropTypes.array.isRequired,
  totalCredits: PropTypes.number.isRequired,
  reaminingCredits: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Credits;
