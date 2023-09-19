import { FaChartBar, FaGraduationCap } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { BsPerson, BsFillDiagram3Fill } from "react-icons/bs";
import { AiOutlineFile, AiOutlineCreditCard } from "react-icons/ai";

const nav = () => {
  return (
    <>
      <nav>
        <a
          href=""
          className="logo static mx-auto mb-6 mt-5 block w-fit font-bold text-xs md:relative md:mb-12 md:text-xl"
        >
          Mohamed
        </a>
        <ul>
          <li>
            <a
              href=""
              className="active-page page mx-5 mb-2 flex items-center gap-2 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaChartBar />
              <p className="hidden md:block">Dashboard</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <IoSettings />
              <p className="hidden md:block">Settings</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsPerson />
              <p className="hidden md:block">Profile</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsFillDiagram3Fill />
              <p className="hidden md:block">Projects</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaGraduationCap />
              <p className="hidden md:block">Courses</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <GiThreeFriends />
              <p className="hidden md:block">Friends</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineFile />
              <p className="hidden md:block">Files</p>
            </a>
          </li>
          <li>
            <a
              href=""
              className="page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineCreditCard />
              <p className="hidden md:block">Plans</p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
