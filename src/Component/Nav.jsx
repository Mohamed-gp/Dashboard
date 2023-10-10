import { FaChartBar, FaGraduationCap } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { BsPerson, BsFillDiagram3Fill } from "react-icons/bs";
import { AiOutlineFile, AiOutlineCreditCard } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const nav = () => {
  
  
  return (
    <>
      <nav className="dark:bg-md dark:text-white">
        <NavLink
          to="/"
          className="logo before:dark:bg-white home-link after:dark:bg-white after:dark:outline-md static mx-auto mb-6 mt-5 block w-fit font-bold text-xs md:relative md:mb-12 md:text-xl"
        >
          Mohamed
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className="dashboard nav-NavLink page mx-5 mb-2 flex items-center gap-2 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaChartBar />
              <p className="hidden md:block">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="settings nav-NavLink page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <IoSettings />
              <p className="hidden md:block">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="profile nav-NavLink page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsPerson />
              <p className="hidden md:block">Profile</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="projects nav-NavLink page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsFillDiagram3Fill />
              <p className="hidden md:block">Projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="courses nav-NavLink page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaGraduationCap />
              <p className="hidden md:block">Courses</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className="friends page nav-NavLink mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <GiThreeFriends />
              <p className="hidden md:block">Friends</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/files"
              className="files page nav-NavLink mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineFile />
              <p className="hidden md:block">Files</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className="plans page nav-NavLink mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineCreditCard />
              <p className="hidden md:block">Plans</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
