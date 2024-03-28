import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Credits from "./components/Credits/Credits";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [reaminingCredits, setRemainingCredits] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSelectCourses = (course) => {
    if (!selectCourses.includes(course)) {
      const newCourses = [...selectCourses, course];

      // const remaining credits
      const newNeaminingCredits = reaminingCredits - course.credit;
      if (newNeaminingCredits >= 0) {
        setRemainingCredits(newNeaminingCredits);
        // set the course
        setSelectCourses(newCourses);
        setTotalCredits(totalCredits + course.credit);
        setTotalPrice(totalPrice + course.price);
      } else {
        setRemainingCredits(reaminingCredits);
      }
    } else {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <Header></Header>
      <ToastContainer />
      <div className="flex max-w-7xl mx-auto">
        <Courses handleSelectCourses={handleSelectCourses}></Courses>
        <Credits
          selectCourses={selectCourses}
          totalCredits={totalCredits}
          reaminingCredits={reaminingCredits}
          totalPrice={totalPrice}
        ></Credits>
      </div>
    </>
  );
}

export default App;
