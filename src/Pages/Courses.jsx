import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Coursescontent from "../Component/Coursescontent";
const Courses = () => {
  return (
    <>
      <div className="main-flex flex">
        <Nav activenav="courses"/>
        <div className="right-side flex-1">
          <Header/>
          <Coursescontent/>
        </div>
      </div>
    </>
  );
};
export default Courses
