import styles from "./_Dashboardcontent.scss";
import { RiVipCrownFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { PiSigmaThin } from "react-icons/pi";
import { BiCheckDouble } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";
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
    const savepost = document.querySelector(".save-post")
    savepost.addEventListener("click",function(){
      if () {
        
      }
    })
  });

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
                  <p className="text-base text-gray-400">Learn React</p>
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
                  <p className="text-base text-gray-400">Finish Portfolio</p>
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
              <div className="card flex items-center justify-between gap-4  border-b py-4">
                <div className="w-10">
                  <img
                    src="../../public/assets/pdf.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">my-file.pdf</p>
                  <p className="text-base text-gray-400">Elzero</p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  2.9mb
                </p>
              </div>
              <div className="card flex  items-center justify-between gap-4 border-b py-4">
                <div className="w-10">
                  <img
                    src="../../public/assets/avi.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Video-File.avi</p>
                  <p className="text-base text-gray-400">Admin</p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  4.9mb
                </p>
              </div>
              <div className="card flex items-center justify-between gap-4  border-b py-4">
                <div className="w-10">
                  <img
                    src="../../public/assets/psd.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Psd-File.pdf</p>
                  <p className="text-base text-gray-400">Mohamed</p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  4.5mb
                </p>
              </div>
              <div className="card flex  items-center justify-between gap-4  border-b py-4">
                <div className="w-10">
                  <img
                    src="../../public/assets/zip.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-Zip-File.pdf</p>
                  <p className="text-base text-gray-400">NPC</p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  120byte
                </p>
              </div>
              <div className="card flex items-center justify-between gap-4  border-b py-4">
                <div className="w-10">
                  <img
                    src="../../public/assets/dll.svg"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold ">My-DLL-File.pdf</p>
                  <p className="text-base text-gray-400">Younes</p>
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
                  <p className="text-base text-gray-400">V-admin</p>
                </div>
                <p className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold">
                  120tera
                </p>
              </div>
            </div>
          </div>
          <div className="main-card relative rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Last Project Progress
            </p>
            <ul className="progress-list my-4 ml-14 flex flex-col gap-7 text-lg">
              <li className="relative">Got The Project</li>
              <li className="relative">Discuss The salary</li>
              <li className="relative">Started The Project</li>
              <li className="relative">The Project About To Finish</li>
              <li className="relative">Test The Project</li>
              <li className="relative">Finish The Project</li>
              <li className="relative">Give Project To Client</li>
              <li className="relative">Get Money</li>
            </ul>
            <div className="img absolute bottom-10 right-10 w-44 opacity-50">
              <img src="../../public/assets/project.png" alt="project" />
            </div>
          </div>
          <div className="main-card relative rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Reminders
            </p>
            <div className="my-6 flex flex-col gap-5">
              <div className="reminder relative ml-14 pl-3">
                <p className="text-lg font-bold">Check My Tasks List</p>
                <p className="text-base text-gray-400">28/09/2022 - 12:00am</p>
              </div>
              <div className="reminder relative ml-14 pl-3 before:bg-green-500 after:bg-green-500">
                <p className="text-lg font-bold">Check My Tasks List</p>
                <p className="text-base text-gray-400">28/09/2022 - 12:00am</p>
              </div>
              <div className="reminder relative ml-14 pl-3 before:bg-orange-500 after:bg-orange-500">
                <p className="text-lg font-bold">Check My Tasks List</p>
                <p className="text-base text-gray-400">28/09/2022 - 12:00am</p>
              </div>
              <div className="reminder relative ml-14 pl-3 before:bg-red-500 after:bg-red-500">
                <p className="text-lg font-bold">Check My Tasks List</p>
                <p className="text-base text-gray-400">28/09/2022 - 12:00am</p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Social Media Stats
            </p>
            <div className="my-6 flex flex-col gap-6">
              <div className="linkedin flex h-14 items-center justify-between bg-blue-50">
                <div
                  className="logo-icon flex h-full w-12  items-center justify-center text-blue-600"
                  style={{ backgroundColor: "#0077B5", color: "white" }}
                >
                  <FaLinkedinIn className="text-4xl" />
                </div>
                <p
                  className="followers ml-4 flex-1 text-left text-lg"
                  style={{ color: "#0077B5" }}
                >
                  2M Connects
                </p>
                <p className="follow mr-4">
                  <a
                    href="https://www.linkedin.com/in/mohamed-outerbah-b97469257/"
                    target="_blank"
                    className="rounded-lg px-3 py-2 text-lg text-white"
                    style={{ backgroundColor: "#0077B5" }}
                  >
                    Connect
                  </a>
                </p>
              </div>
              <div className="facebook flex h-14 items-center justify-between bg-blue-50">
                <div
                  className="logo-icon flex h-full w-12  items-center justify-center text-blue-600"
                  style={{ backgroundColor: "#1877F2", color: "white" }}
                >
                  <FaFacebookF className="text-4xl" />
                </div>
                <p
                  className="followers ml-4 flex-1 text-left text-lg"
                  style={{ color: "#1877F2" }}
                >
                  5000 Friends
                </p>
                <p className="follow mr-4">
                  <a
                    href="https://www.linkedin.com/in/mohamed-outerbah-b97469257/"
                    target="_blank"
                    className="rounded-lg px-3 py-2 text-lg text-white"
                    style={{ backgroundColor: "#1877F2" }}
                  >
                    Add Friend
                  </a>
                </p>
              </div>
              <div className="linkedin flex h-14 items-center justify-between bg-blue-50">
                <div
                  className="logo-icon flex h-full w-12  items-center justify-center text-blue-600"
                  style={{ backgroundColor: "#0077B5", color: "white" }}
                >
                  <FaLinkedinIn className="text-4xl" />
                </div>
                <p
                  className="followers ml-4 flex-1 text-left text-lg"
                  style={{ color: "#0077B5" }}
                >
                  2M Connects
                </p>
                <p className="follow mr-4">
                  <a
                    href="https://www.linkedin.com/in/mohamed-outerbah-b97469257/"
                    target="_blank"
                    className="rounded-lg px-3 py-2 text-lg text-white"
                    style={{ backgroundColor: "#0077B5" }}
                  >
                    Connect
                  </a>
                </p>
              </div>
              <div className="facebook flex h-14 items-center justify-between bg-blue-50">
                <div
                  className="logo-icon flex h-full w-12  items-center justify-center text-blue-600"
                  style={{ backgroundColor: "#1877F2", color: "white" }}
                >
                  <FaFacebookF className="text-4xl" />
                </div>
                <p
                  className="followers ml-4 flex-1 text-left text-lg"
                  style={{ color: "#1877F2" }}
                >
                  5000 Friends
                </p>
                <p className="follow mr-4">
                  <a
                    href="https://web.facebook.com/profile.php?id=100009748452803"
                    className="rounded-lg px-3 py-2 text-lg text-white"
                    target="_blank"
                    style={{ backgroundColor: "#1877F2" }}
                  >
                    Add Friend
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Latest Post
            </p>
            <div className="flex flex-col gap-6 py-6 ">
              <div className="flex items-center gap-4">
                <div className="img w-12">
                  <img src="../../public/assets/avatar.png" alt="profile" />
                </div>
                <div>
                  <p className="text-lg font-bold ">Outerbah Mohamed</p>
                  <p className="text-base text-gray-500">About 3 Hours Ago</p>
                </div>
              </div>
              <p className="quote-title text-center text-2xl font-semibold">
                Limitations of Deception
              </p>
              <p className="border-y py-10 text-lg quote-description">
                You Can Fool All Of The People Some Of The Time, And Some Of The
                People All Of The Time, But You Can't Fool All Of The People All
                Of The Time.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <p className="font-medium">2M</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaShare className="" />
                  <p className="mr-2 font-medium">20</p>
                  <FaComment className="" />
                  <p className="font-medium">124</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-center text-3xl font-bold md:text-left">
              Edit Post
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              change your last Post if you want
            </p>
            <div className="flex flex-col py-6 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-title" className="text-lg">Title :</label>
                <input type="text" name="" id="quote-title" className="bg-gray-400 rounded-lg py-2 focus:outline-none pl-4" placeholder="Short title better than long try from 6 words to 25" style={{backgroundColor : "#EEEEEE"}}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quote-description" className="text-lg">Description :</label>
                <textarea type="text" name="" id="quote-description" className="bg-gray-400 rounded-lg py-2 focus:outline-none pl-4 h-28 resize-none" placeholder="The description should be less than 96 letters and more than 50 letters" style={{backgroundColor : "#EEEEEE"}}/>
              </div>
              <div className="flex justify-between">
                <p className="warning"></p>
                <p className="text-lg text-white  px-4 rounded 3 cursor-pointer save-post" style={{backgroundColor: "#0D69D5"}}>Save</p>
    
              </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboardcontent;
