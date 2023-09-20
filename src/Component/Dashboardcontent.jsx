import styles from "./_Dashboardcontent.scss";
import { RiVipCrownFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPerson , BsCodeSlash } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { PiSigmaThin } from "react-icons/pi";
import { BiCheckDouble } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";


const Dashboardcontent = () => {
    let checked = function(e){
        if(e.target.classList.contains("opacity-50","line-through")){
            e.target.classList.remove("opacity-50","line-through")
            e.target.classList.add("opacity-100","no-underline")
        }
        else{
            e.target.classList.add("opacity-50","line-through")
            e.target.classList.remove("opacity-100","no-underline")

        }
    }
  return (
    <>
      <div className="content px-4 py-5">
        <p className="title relative w-fit py-3 text-2xl font-bold text-black">
          Dashboard
        </p>
        <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
          <div className="main-card card-one relative rounded-2xl bg-white px-6 py-6">
            <div className="one absolute left-0 top-0 h-2/5 w-full rounded-t-2xl bg-red-300 px-6 py-6">
              <p className="text-3xl font-bold md:text-left text-center">Welcome</p>
              <p className="text-lg  text-gray-400 text-center md:text-left">Mohamed</p>
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
            <p className="text-3xl font-bold text-center md:text-left">Yearly Targets</p>
            <p className="text-lg  text-gray-400 text-center md:text-left">Targets Of The Year</p>
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
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-3xl font-bold text-center md:text-left">Tickets Statistics</p>
            <p className="text-lg  text-gray-400 md:text-left text-center">Everything About Support Tickets</p>
            <div className="flex justify-between py-4 flex-wrap gap-y-4">
                <div className="h-32 statistic-card rounded-lg flex flex-col justify-center items-center border ">
                    <div>
                        <PiSigmaThin className="text-5xl pb-1 text-orange-500"/>
                    </div>
                    <p className="text-xl font-bold">2500</p>
                    <p className="text-base  text-gray-400">Total</p>
                </div>
                <div className="h-32 statistic-card flex rounded-lg flex-col justify-center items-center  border">
                    <div>
                        <FaSpinner className="text-5xl pb-2 text-blue-500"/>
                    </div>
                    <p className="text-xl font-bold">2500</p>
                    <p className="text-base  text-gray-400">Pending</p>
                </div>
                <div className="h-32 statistic-card rounded-lg flex flex-col justify-center items-center border">
                    <div>
                        <BiCheckDouble className="text-5xl pb-3 text-green-500"/>
                    </div>
                    <p className="text-xl font-bold">2500</p>
                    <p className="text-base  text-gray-400">Closed</p>
                </div>
                <div className="h-32 statistic-card rounded-lg flex flex-col justify-center items-center border">
                    <div>
                        <FaXmark className="text-5xl pb-3 text-red-500"/>
                    </div>
                    <p className="text-xl font-bold">2500</p>
                    <p className="text-base  text-gray-400">Removed</p>
                </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-3xl font-bold text-center md:text-left">Latest News</p>
            <p className="text-lg text-gray-400 text-center md:text-left">View What Happend</p>
            <div className="card-container flex flex-col">
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-01.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center md:flex-row flex-col py-4 gap-4">
                    <div className="w-28">
                        <img src="../../public/assets/news-02.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-03.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-04.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-3xl font-bold text-center md:text-left">Latest Tasks</p>
            <div className="flex flex-col gap-y-4 py-4">
                <div className="flex items-center cursor-pointer justify-between border-b pb-4 no-underline" onClick={checked}>
                    <div>
                        <p className="text-lg font-bold">Record One New Video</p>
                        <p className="text-base text-gray-400">Record Python Create Exe Project</p>
                    </div>
                    <div>
                        <BiCheckDouble className="text-3xl text-green-500 "/>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer justify-between border-b pb-4 no-underline" onClick={checked}>
                    <div>
                        <p className="text-lg font-bold">Record One New Video</p>
                        <p className="text-base text-gray-400">Record Python Create Exe Project</p>
                    </div>
                    <div>
                        <BiCheckDouble className="text-3xl text-green-500 " />
                    </div>
                </div>
                <div className="flex items-center cursor-pointer justify-between border-b pb-4 no-underline" onClick={checked}>
                    <div>
                        <p className="text-lg font-bold">Record One New Video</p>
                        <p className="text-base text-gray-400">Record Python Create Exe Project</p>
                    </div>
                    <div>
                        <BiCheckDouble className="text-3xl text-green-500" />
                    </div>
                </div>
                <div className="flex items-center justify-between border-b cursor-pointer pb-4 opacity-50 line-through" onClick={checked} >
                    <div>
                        <p className="text-lg font-bold">Record One New Video</p>
                        <p className="text-base text-gray-400">Record Python Create Exe Project</p>
                    </div>
                    <div>
                        <BiCheckDouble className="text-3xl text-green-500 "  />
                    </div>
                </div>
                <div className="flex items-center justify-between pb-4 no-underline cursor-pointer" onClick={checked}>
                    <div>
                        <p className="text-lg font-bold">Record One New Video</p>
                        <p className="text-base text-gray-400">Record Python Create Exe Project</p>
                    </div>
                    <div>
                        <BiCheckDouble className="text-3xl text-green-500"/>
                    </div>
                </div>




            </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
                <p className="text-3xl font-bold text-center md:text-left">Top Search Items</p>
                <div className="flex py-4 flex-col gap-y-6 text-lg">
                    <div className="flex justify-between items-center">
                        <p className="text-base text-gray-400">Keyword</p>
                        <p className="text-base text-gray-400">Search Count</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Programming</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">200</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">JavaScript</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">1000</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">PHP</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">-210</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Code</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">100</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Design</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">10</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Logic</p>
                        <p className="w-14 text-center text-sm rounded-lg flex items-center justify-center font-medium h-6 bg-gray-200 ">10</p>
                    </div>
 
                </div>
          </div>
          <div className="main-card rounded-2xl bg-white px-6 py-6">
            <p className="text-3xl font-bold text-center md:text-left">Latest Uploads</p>
            <div className="card-container flex flex-col">
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-01.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center md:flex-row flex-col py-4 gap-4">
                    <div className="w-28">
                        <img src="../../public/assets/news-02.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-03.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
                </div>
                <div className="card flex justify-between items-center py-4 gap-4  md:flex-row flex-col">
                    <div className="w-28">
                        <img src="../../public/assets/news-04.png" alt="" className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="font-bold text-lg ">Created SASS Section</p>
                        <p className="text-base text-gray-400">New SASS Examples & Tutorials</p>
                    </div>
                    <p className="px-3 py-1 bg-gray-200 text-sm font-bold rounded-lg">
                        3 Days Ago
                    </p>
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
