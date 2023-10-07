import { FaChartBar, FaGraduationCap } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { BsPerson, BsFillDiagram3Fill } from "react-icons/bs";
import { AiOutlineFile, AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const nav = ({activeweb}) => {
  
  useEffect(() => {
    const navlinks = document.querySelectorAll(".nav-link")
    navlinks.forEach((el) => {
      el.addEventListener("click",() => {
        navlinks.forEach((el) => {
          el.classList.remove("active-page")
        })
        el.classList.add("active-page")
      })
    })
    if (activeweb == "") {
      document.querySelector(".dashboard").classList.add("active-page")
    }else{
      document.querySelector(`.${activeweb}`).classList.add("active-page")
    }
  },[])
  
  return (
    <>
      <nav className="dark:bg-md dark:text-white">
        <Link
          to="/"
          className="logo before:dark:bg-white after:dark:bg-white after:dark:outline-md static mx-auto mb-6 mt-5 block w-fit font-bold text-xs md:relative md:mb-12 md:text-xl"
        >
          Mohamed
        </Link>
        <ul>
          <li>
            <Link
              to="/"
              className="dashboard nav-link page mx-5 mb-2 flex items-center gap-2 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaChartBar />
              <p className="hidden md:block">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="settings nav-link page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <IoSettings />
              <p className="hidden md:block">Settings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="profile nav-link page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsPerson />
              <p className="hidden md:block">Profile</p>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="projects nav-link page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <BsFillDiagram3Fill />
              <p className="hidden md:block">Projects</p>
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="courses nav-link page mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <FaGraduationCap />
              <p className="hidden md:block">Courses</p>
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className="friends page nav-link mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <GiThreeFriends />
              <p className="hidden md:block">Friends</p>
            </Link>
          </li>
          <li>
            <Link
              to="/files"
              className="files page nav-link mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineFile />
              <p className="hidden md:block">Files</p>
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className="plans page nav-link mx-5 mb-2 flex items-center gap-3 rounded-lg py-2 px-2 md:pl-5 md:pr-10"
            >
              <AiOutlineCreditCard />
              <p className="hidden md:block">Plans</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
