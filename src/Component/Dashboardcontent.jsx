import styles from "./_Dashboardcontent.scss";
import { RiVipCrownFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { PiSigmaThin } from "react-icons/pi";
import { BiCheckDouble } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";


const Dashboardcontent = () => {
  useEffect(() => {
    const todos = document.querySelectorAll(".to-do");
    todos.forEach((el) => {
      el.addEventListener("click", () => {
        if (el.classList.contains("opacity-50", "line-through")) {
          el.classList.remove("opacity-50", "line-through");
          el.classList.add("opacity-100", "no-underline");
        } else {
          el.classList.add("opacity-50", "line-through");
          el.classList.remove("opacity-100", "no-underline");
        }
      });
    });
  }, );

  return (
    <>
      <div className="content px-4 py-5">
        <p className="title relative w-fit py-3 text-2xl font-bold text-black">
          Dashboard
        </p>
        <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
          <div className="main-card card-one relative rounded-2xl bg-white px-6 py-6">
            <div className="one absolute left-0 top-0 h-2/5 w-full rounded-t-2xl bg-red-300 px-6 py-6">
              <p className="text-center text-3xl font-bold md:text-left">
                Welcome
              </p>
              <p className="text-center  text-lg text-gray-400 md:text-left">
                Mohamed
              </p>
            </div>
            <div className="profile-absolute two absolute left-1/2 w-12 -translate-x-1/2 rounded-full outline outline-4 outline-white md:left-8 md:translate-x-0 ">
              <img src="../../public/assets/avatar.png" alt="" />
            </div>
            <div className="three top-2/5 absolute left-0 flex h-3/5 w-full items-center rounded-b-2xl   text-center text-sm ">
              <div className="flex  h-3/5 w-full flex-col items-center justify-evenly border-y-2  py-3 md:flex-row">
                <div className="w-1/3">
                  <p className="text-base font-semibold">Mohamed</p>
                  <p className="text-gray-400">Full Stack</p>
                </div>
                <div className="w-1/3">
                  <p className="text-base font-semibold">20</p>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div className="w-1/3">
                  <p className="text-base font-semibold">150$</p>
                  <p className="text-gray-400">Earned</p>
                </div>
              </div>
            </div>
            <div className="four absolute bottom-6 left-6 flex justify-between">
              <a
                href="/Plans"
                className="vip-hover  flex h-8 w-16 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black text-white text-yellow-400"
              >
                <RiVipCrownFill />
                <p>Pro</p>
              </a>
            </div>
          </div>
          <div className="main-card card-two rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Yearly Targets
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Targets Of The Year
            </p>
            <div className="card-container flex flex-col gap-2 py-2">
              <div className="card flex items-center gap-6 py-2">
                <div className="flex h-20 w-28 items-center justify-center rounded-lg bg-blue-200 text-blue-500">
                  <MdOutlineAttachMoney className="w-fit  text-3xl" />
                </div>
                <div className="flex w-9/12 flex-col justify-center gap-1">
                  <p className="text-lg  text-gray-400">Money</p>
                  <p className="text-lg font-bold">$20.000</p>
                  <p className="range relative h-1 bg-blue-200">
                    <p className="absolute left-0 h-full w-4/5 bg-blue-500"></p>
                  </p>
                </div>
              </div>
              <div className="card flex items-center gap-6 py-2">
                <div className="flex h-20 w-28 items-center justify-center rounded-lg bg-orange-200 text-orange-500">
                  <BsCodeSlash className="w-fit  text-3xl" />
                </div>
                <div className="flex w-9/12 flex-col justify-center gap-1">
                  <p className="text-lg  text-gray-400">Projects</p>
                  <p className="text-lg font-bold">40</p>
                  <p className="range relative h-1 bg-orange-200">
                    <p className="absolute left-0 h-full w-1/2 bg-orange-500"></p>
                  </p>
                </div>
              </div>
              <div className="card flex items-center gap-6 py-2">
                <div className="flex h-20 w-28 items-center justify-center rounded-lg bg-green-200 text-green-500">
                  <BsPerson className="w-fit  text-3xl" />
                </div>
                <div className="flex w-9/12 flex-col justify-center gap-1">
                  <p className="text-lg  text-gray-400">Money</p>
                  <p className="text-lg font-bold">$20.000</p>
                  <p className="range relative h-1 bg-green-200">
                    <p className="absolute left-0 h-full w-2/5 bg-green-500"></p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-card card-three rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Tickets Statistics
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Everything About Support Tickets
            </p>
            <div className="flex flex-wrap justify-between gap-y-4 py-4">
              <div className="statistic-card flex h-32 flex-col items-center justify-center rounded-lg border ">
                <div>
                  <PiSigmaThin className="pb-1 text-5xl text-orange-500" />
                </div>
                <p className="text-xl font-bold">2500</p>
                <p className="text-base  text-gray-400">Total</p>
              </div>
              <div className="statistic-card flex h-32 flex-col items-center justify-center rounded-lg  border">
                <div>
                  <FaSpinner className="pb-2 text-5xl text-blue-500" />
                </div>
                <p className="text-xl font-bold">2500</p>
                <p className="text-base  text-gray-400">Pending</p>
              </div>
              <div className="statistic-card flex h-32 flex-col items-center justify-center rounded-lg border">
                <div>
                  <BiCheckDouble className="pb-3 text-5xl text-green-500" />
                </div>
                <p className="text-xl font-bold">2500</p>
                <p className="text-base  text-gray-400">Closed</p>
              </div>
              <div className="statistic-card flex h-32 flex-col items-center justify-center rounded-lg border">
                <div>
                  <FaXmark className="pb-3 text-5xl text-red-500" />
                </div>
                <p className="text-xl font-bold">2500</p>
                <p className="text-base  text-gray-400">Removed</p>
              </div>
            </div>
          </div>
          <div className="main-card card-four rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Latest News
            </p>
            <p className="text-center text-lg text-gray-400 md:text-left">
              View What Happend
            </p>
            <div className="card-container flex flex-col">
              <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                <div className="w-28">
                  <img
                    src="../../public/assets/news-01.png"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">Created SASS Section</p>
                  <p className="text-base text-gray-400">
                    New SASS Examples & Tutorials
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  3 Days Ago
                </p>
              </div>
              <div className="card flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
                <div className="w-28">
                  <img
                    src="../../public/assets/news-02.png"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">Changed The Design</p>
                  <p className="text-base text-gray-400">
                  A Brand New Website Design
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  5 Days Ago
                </p>
              </div>
              <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                <div className="w-28">
                  <img
                    src="../../public/assets/news-03.png"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">Team Increased</p>
                  <p className="text-base text-gray-400">
                  3 Developers Joined The Team
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  7 Days Ago
                </p>
              </div>
              <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                <div className="w-28">
                  <img
                    src="../../public/assets/news-04.png"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">Added Payment Gateway</p>
                  <p className="text-base text-gray-400">
                  Many New Payment Gateways Added
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  9 Days Ago
                </p>
              </div>
            </div>
          </div>
          <div className="main-card card-five rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Latest Tasks
            </p>
            <div className="flex flex-col gap-y-4 py-4">
              <div className="to-do flex cursor-pointer items-center justify-between border-b pb-4 no-underline">
                <div>
                  <p className="text-lg font-bold">Finish One Framwork</p>
                  <p className="text-base text-gray-400">
                    Learn React 
                  </p>
                </div>
                <div>
                  <BiCheckDouble className="text-3xl text-green-500 " />
                </div>
              </div>
              <div className="to-do flex cursor-pointer items-center justify-between border-b pb-4 no-underline">
                <div>
                  <p className="text-lg font-bold">Finish The Record</p>
                  <p className="text-base text-gray-400">
                    Record SQL Create Exe Project
                  </p>
                </div>
                <div>
                  <BiCheckDouble className="text-3xl text-green-500 " />
                </div>
              </div>
              <div className="to-do flex cursor-pointer items-center justify-between border-b pb-4 no-underline">
                <div>
                  <p className="text-lg font-bold">Finish Projects</p>
                  <p className="text-base text-gray-400">
                    Finish Portfolio
                  </p>
                </div>
                <div>
                  <BiCheckDouble className="text-3xl text-green-500" />
                </div>
              </div>
              <div className="to-do flex cursor-pointer items-center justify-between border-b pb-4 line-through opacity-50">
                <div>
                  <p className="text-lg font-bold">Learn MERN</p>
                  <p className="text-base text-gray-400">
                    To Build Stining Portfolio
                  </p>
                </div>
                <div>
                  <BiCheckDouble className="text-3xl text-green-500 " />
                </div>
              </div>
              <div className="to-do flex cursor-pointer items-center justify-between pb-4 no-underline">
                <div>
                  <p className="text-lg font-bold">Do Stream</p>
                  <p className="text-base text-gray-400">
                    Start with My First Stream In Youtube                    
                  </p>
                </div>
                <div>
                  <BiCheckDouble className="text-3xl text-green-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Top Search Items
            </p>
            <div className="flex flex-col gap-y-6 py-4 text-lg">
              <div className="flex items-center justify-between">
                <p className="text-base text-gray-400">Keyword</p>
                <p className="text-base text-gray-400">Search Count</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Programming</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  200
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">JavaScript</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  1000
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">PHP</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  -210
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Code</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  100
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Design</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  10
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Logic</p>
                <p className="flex h-6 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-sm font-medium ">
                  10
                </p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Latest Uploads
            </p>
            <div className="card-container flex flex-col">
              <div className="card flex items-center justify-between gap-4  py-4 border-b">
                <div className="w-10">
                  <img
                    src="../../public/assets/pdf.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">my-file.pdf</p>
                  <p className="text-base text-gray-400">
                  Elzero
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                2.9mb
                </p>
              </div>
              <div className="card flex  items-center justify-between gap-4 py-4 border-b">
                <div className="w-10">
                  <img
                    src="../../public/assets/avi.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Video-File.avi</p>
                  <p className="text-base text-gray-400">
                  Admin
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                4.9mb
                </p>
              </div>
              <div className="card flex items-center justify-between gap-4  py-4 border-b">
                <div className="w-10">
                  <img
                    src="../../public/assets/psd.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Psd-File.pdf</p>
                  <p className="text-base text-gray-400">
                    Mohamed
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                4.5mb
                </p>
              </div>
              <div className="card flex  items-center justify-between gap-4  py-4 border-b">
                <div className="w-10">
                  <img
                    src="../../public/assets/zip.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Zip-File.pdf</p>
                  <p className="text-base text-gray-400">
                    NPC
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  120byte
                </p>
              </div>
              <div className="card flex items-center justify-between gap-4  py-4 border-b">
                <div className="w-10">
                  <img
                    src="../../public/assets/dll.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-DLL-File.pdf</p>
                  <p className="text-base text-gray-400">
                    Younes
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  120gb
                </p>
              </div>
              <div className="card flex items-center justify-between gap-4  py-4 ">
                <div className="w-10">
                  <img
                    src="../../public/assets/eps.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">Amine</p>
                  <p className="text-base text-gray-400">
                    V-admin
                  </p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  120tera
                </p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6 relative">
            <p className="text-center text-3xl font-bold md:text-left">
            Last Project Progress
            </p>
            <ul className="progress-list flex flex-col gap-7 my-4 text-lg ml-14">
              <li className="relative">Got The Project</li>
              <li className="relative">Discuss The salary</li>
              <li className="relative">Started The Project</li>
              <li className="relative">The Project About To Finish</li>
              <li className="relative">Test The Project</li>
              <li className="relative">Finish The Project</li>
              <li className="relative">Give Project To Client</li>
              <li className="relative">Get Money</li>
            </ul>
            <div className="img absolute w-44 opacity-50 bottom-10 right-10">
              <img src="../../public/assets/project.png" alt="project" />
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6 relative">
            <p className="text-center text-3xl font-bold md:text-left">
            Reminders
            </p>
            <div className="flex flex-col my-6 gap-5">
              <div className="relative reminder ml-14 pl-3">
                <p className="font-bold text-lg">Check My Tasks List</p>
                <p className="text-gray-400 text-base">28/09/2022 - 12:00am</p>
              </div>
              <div className="relative reminder ml-14 pl-3 after:bg-green-500 before:bg-green-500">
                <p className="font-bold text-lg">Check My Tasks List</p>
                <p className="text-gray-400 text-base">28/09/2022 - 12:00am</p>
              </div>
              <div className="relative reminder ml-14 pl-3 after:bg-orange-500 before:bg-orange-500">
                <p className="font-bold text-lg">Check My Tasks List</p>
                <p className="text-gray-400 text-base">28/09/2022 - 12:00am</p>
              </div>
              <div className="relative reminder ml-14 pl-3 before:bg-red-500 after:bg-red-500">
                <p className="font-bold text-lg">Check My Tasks List</p>
                <p className="text-gray-400 text-base">28/09/2022 - 12:00am</p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
            Social Media Stats
            </p>
            <div className="flex flex-col my-6 gap-6">
              <div className="facebook bg-blue-50">
                <div className="logo-icon text-blue-600 ">
                  <FaSquareFacebook className="text-4xl"/>
                </div>
                <p className="followers"></p>
                <p className="follow"></p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6"></div>
          <div className="main-card rounded-2xl bg-white px-6 py-6"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboardcontent;
