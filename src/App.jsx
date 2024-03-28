import Courses from "./components/Courses/Courses";
import Credits from "./components/Credits/Credits";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Courses></Courses>
        <Credits></Credits>
      </div>
    </>
  );
}

export default App;
