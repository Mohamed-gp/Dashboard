import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [light, setlight] = useState(true);
  const changetheme = () => {
    setlight(!light);
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("html").classList.remove("dark")
    }else{
      document.querySelector("html").classList.add("dark")
    }
  };
  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 dark:bg-md dark:text-white">
        <div className="profile flex items-center gap-4 font-bold">
          <div className="img ">
            <img src="/assets/avatar.png" alt="" className="w-12" />
          </div>
          <div className="name">
            <p className="first-name">Mohamed</p>
            <p className="last-name">Outerbah</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="theme-mode cursor-pointer text-2xl"
            onClick={changetheme}
          >
            {light ? <MdLightMode /> : <MdDarkMode />}
          </div>
          <Link to="/settings" className="setting-rotate hover:rotate-180 ">
            <IoSettings className="cursor-pointer text-2xl" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
