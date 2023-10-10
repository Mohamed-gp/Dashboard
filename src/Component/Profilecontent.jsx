import { useEffect, useState } from "react";
import "./scss/_Profilecontent.scss";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Profilecontent = () => {
  // toggle
  const toggle = (e) => {
    if (e.currentTarget.children[0].children[1].classList.contains("hidden")) {
      e.currentTarget.classList.add("bg-gray-500");
      e.currentTarget.children[0].children[0].classList.add("hidden");
      e.currentTarget.children[0].classList.add("toggle-animation-p");
      e.currentTarget.children[0].classList.remove("rv-toggle-animation-p");
      e.currentTarget.classList.remove("bg-mb");
      e.currentTarget.children[0].children[1].classList.remove("hidden");
    } else {
      e.currentTarget.classList.add("bg-mb");
      e.currentTarget.children[0].children[0].classList.remove("hidden");
      e.currentTarget.children[0].classList.add("rv-toggle-animation-p");
      e.currentTarget.children[0].classList.remove("toggle-animation-p");
      e.currentTarget.classList.remove("bg-gray-500");
      e.currentTarget.children[0].children[1].classList.add("hidden");
    }

}

  return (
    <>
      <div className="profile-content">
        <div className="content px-4 py-5 dark:bg-sd">
          <p className="title relative w-fit py-3 text-2xl font-bold text-black dark:text-white">
            Profile
          </p>
          <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
            <div className="main-card main-card-full relative flex w-full flex-col items-center justify-evenly rounded-lg  bg-white py-9 dark:bg-md dark:text-white md:flex-row">
              <div className="one">
                <div className="flex flex-col items-center gap-2  border-0 pr-1 md:border-r">
                  <div className="img m-10 w-40">
                    <img src="/assets/avatar.png" alt="avatar" />
                  </div>
                  <p className="font-bold">Outerbah Mohamed</p>
                  <p className="text-gray-500">Level 20</p>
                  <div className="relative h-3 w-32 rounded-lg bg-gray-400 ">
                    <div className="absolute left-0 h-full w-3/5 rounded-lg bg-mb"></div>
                  </div>
                  <div className="flex items-center">
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-gray-500">550 Rating</p>
                </div>
              </div>
              <div className="two flex w-full flex-1 flex-col text-center md:w-auto md:text-left">
                <div className="ml-0 flex flex-col gap-1 rounded-t-lg px-3 py-3 pl-1 duration-500 hover:bg-gray-100 dark:hover:bg-td md:pl-3">
                  <p className="text-gray-500">General Information</p>
                  <div className="flex flex-col flex-wrap justify-between md:flex-row">
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Full Name :</span>{" "}
                      Outerbah Mohamed
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Gender :</span> Male
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Country :</span> Algeria
                    </p>
                    <div className="profile-mini-cards flex justify-center md:block">
                      <div className="toggle-relative  relative h-6 w-20 cursor-pointer rounded-3xl bg-mb duration-1000" onClick={toggle}>
                        <div className="toggle-absolute  absolute right-1 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                          <FaCheck className="check text-base text-mb" />
                          <FaXmark className="x-mark hidden text-base text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-0 flex flex-col gap-1 border-y px-3 py-3 pl-1 duration-500 hover:bg-gray-100 dark:hover:bg-td md:pl-3">
                  <p className="text-gray-500">Personal Information</p>
                  <div className="flex flex-col flex-wrap justify-between md:flex-row">
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Email :</span>{" "}
                      mohamedterba6@gmail.com
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Phone :</span> +213
                      552312352
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Date Of Birth :</span>{" "}
                      2004/11/08
                    </p>
                    <div className="profile-mini-cards flex justify-center md:block">
                      <div className="toggle-relative  relative h-6 w-20 cursor-pointer rounded-3xl bg-mb duration-1000" onClick={toggle}>
                        <div className="toggle-absolute  absolute right-1 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                          <FaCheck className="check text-base text-mb" />
                          <FaXmark className="x-mark hidden text-base text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-0 flex flex-col gap-1 border-y px-3 py-3 pl-1 duration-500 hover:bg-gray-100 dark:hover:bg-td md:pl-3">
                  <p className="text-gray-500">Job Information</p>
                  <div className="flex flex-col flex-wrap justify-between md:flex-row">
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Title :</span> MERN Stack
                      Developer
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">
                        Programming Language :
                      </span>{" "}
                      JS
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">
                        Years Of Experience :
                      </span>{" "}
                      1+
                    </p>
                    <div className="profile-mini-cards flex justify-center md:block">
                      <div className="toggle-relative  relative h-6 w-20 cursor-pointer rounded-3xl bg-mb duration-1000" onClick={toggle}>
                        <div className="toggle-absolute  absolute right-1 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                          <FaCheck className="check text-base text-mb" />
                          <FaXmark className="x-mark hidden text-base text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-0 flex flex-col gap-1 rounded-b-lg px-3 py-3 pl-1 duration-500 hover:bg-gray-100 dark:hover:bg-td md:pl-3">
                  <p className="text-gray-500">Billing Information</p>
                  <div className="flex flex-col flex-wrap justify-between md:flex-row">
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Payment Method :</span>{" "}
                      Paypal
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Email :</span>{" "}
                      mohamedterba6@gmail.com
                    </p>
                    <p className="profile-mini-cards">
                      <span className="text-gray-500 ">Subscription :</span>{" "}
                      Yearly
                    </p>
                    <div className="profile-mini-cards flex justify-center md:block">
                      <div className="toggle-relative  relative h-6 w-20 cursor-pointer rounded-3xl bg-mb duration-1000" onClick={toggle}>
                        <div className="toggle-absolute  absolute right-1 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                          <FaCheck className="check text-base text-mb" />
                          <FaXmark className="x-mark hidden text-base text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-card main-card-full flex-nowrap very-large-wrap text-center md:text-left flex w-full gap-5 rounded-lg">
              <div className="one two-main-card w-1/3 rounded-lg bg-white dark:bg-md dark:text-white">
                <div className="p-6">
                  <p className="text-center text-3xl font-bold md:text-left">
                    My Skills
                  </p>
                  <p className="text-center text-lg text-gray-400 md:text-left">
                    Complete Skills List
                  </p>
                  <div className="flex flex-col py-5">
                    <div className="flex justify-center gap-2 py-6 md:block">
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        HTML
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 border-y py-6 md:block">
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        CSS
                      </span>{" "}
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        SASS
                      </span>{" "}
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        Tailwind
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 border-y py-6 md:block">
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        ReactJS
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 border-y py-6 md:block">
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        Redux
                      </span>
                    </div>
                    <div className="flex justify-center gap-2 py-6 md:block">
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        JavaScript
                      </span>{" "}
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        Python
                      </span>{" "}
                      <span className="rounded-lg bg-sw px-4 py-2 font-semibold dark:bg-white dark:text-md">
                        C
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="one two-main-card w-2/3 rounded-lg bg-white dark:bg-md dark:text-white">
                <div className="p-6">
                  <p className="text-center text-3xl font-bold md:text-left">
                    Latest Activities
                  </p>
                  <p className="text-center text-lg text-gray-400 md:text-left">
                    Latest Activities Done By The User
                  </p>
                  <div className="card-container flex flex-col">
                    <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                      <div className="w-20">
                        <img
                          src="/assets/activity-01.png"
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-lg font-bold ">
                          Created SASS Section
                        </p>
                        <p className="text-base text-gray-400">
                          New SASS Examples & Tutorials
                        </p>
                      </div>
                      <div className="text-center">
                        <p className=" font-medium dark:text-white">
                          18:11
                        </p>
                        <p className="text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    <div className="card flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
                      <div className="w-20">
                        <img
                          src="/assets/activity-02.png"
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
                      <div className="text-center">
                        <p className=" font-medium  dark:text-white">
                          12:11
                        </p>
                        <p className="text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                      <div className="w-20">
                        <img
                          src="/assets/activity-03.png"
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
                      <div className="text-center">
                        <p className=" font-medium dark:text-white">
                          11:11
                        </p>
                        <p className="text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    <div className="card flex flex-col items-center justify-between gap-4  py-4 md:flex-row">
                      <div className="w-20">
                        <img
                          src="/assets/activity-01.png"
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-lg font-bold ">
                          Added Payment Gateway
                        </p>
                        <p className="text-base text-gray-400">
                          Many New Payment Gateways Added
                        </p>
                      </div>
                      <div className="text-center">
                        <p className=" font-medium dark:text-white">
                          7:11
                        </p>
                        <p className="text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilecontent;
