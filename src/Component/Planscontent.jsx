import "./scss/_Filescontent.scss";
import { GiThreeFriends } from "react-icons/gi";
import { MdArticle } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

const Planscontent = () => {
  return (
    <>
      <div className="plans-content">
        <div className="content px-4 py-5 dark:bg-sd dark:text-white">
          <p className="title relative w-fit py-3 text-2xl font-bold text-black dark:text-white">
            Files
          </p>
          <div className="main-cards-container project-card relative mt-6 flex flex-wrap justify-start gap-x-4 gap-y-4 dark:text-white">
              <div className="main-card  files-card card-one relative rounded-2xl bg-white p-6 dark:bg-md">
                <div className="flex py-7 outline border-white bg-green-500 border-4 outline-4 outline-green-500 text-center flex-col">
                  <p className="font-bold text-3xl text-white mb-3">Free</p>
                  <p className="text-3xl text-white"><span className="text-4xl relative bottom-1 mr-1">$</span>0.00</p>
                </div>            
                <div className="flex flex-col  px-1 mt-5 mb-2">

                  <p className="flex items-center gap-1 py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Text Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Videos Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Appear On Leaderboard</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Browse Content Without Ads</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Assignments</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Get Daily Prizes</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Earn Certificate</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>1 GB Space For Hosting Files</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Access Badge System</p>
                </div>
              </div>
              <div className="main-card  files-card card-one relative rounded-2xl bg-white p-6 dark:bg-md">
                <div className="flex py-7 outline border-white bg-blue-500 border-4 outline-4 outline-blue-500 text-center flex-col">
                  <p className="font-bold text-3xl text-white mb-3">Basic</p>
                  <p className="text-3xl text-white"><span className="text-4xl relative bottom-1 mr-1">$</span>7.99</p>
                </div>            
                <div className="flex flex-col  px-1 mt-5 mb-2">

                  <p className="flex items-center gap-1 py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Text Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Videos Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Appear On Leaderboard</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Browse Content Without Ads</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Assignments</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Get Daily Prizes</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Earn Certificate</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>1 GB Space For Hosting Files</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Access Badge System</p>
                </div>
              </div>
              <div className="main-card  files-card card-one relative rounded-2xl bg-white p-6 dark:bg-md">
                <div className="flex py-7 outline border-white bg-orange-400 border-4 outline-4 outline-orange-400 text-center flex-col">
                  <p className="font-bold text-3xl text-white mb-3">Free</p>
                  <p className="text-3xl text-white"><span className="text-4xl relative bottom-1 mr-1">$</span>0.00</p>
                </div>            
                <div className="flex flex-col  px-1 mt-5 mb-2">

                  <p className="flex items-center gap-1 py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Text Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Videos Lessons</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Appear On Leaderboard</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Browse Content Without Ads</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Access All Assignments</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><BiCheckDouble className="text-green-500 text-2xl"/>Get Daily Prizes</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Earn Certificate</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>1 GB Space For Hosting Files</p>
                  <p className="flex items-center gap-1 border-t py-4 font-medium"><FaXmark className="text-red-500 text-2xl"/>Access Badge System</p>
                  <p className="text-center font-semibold text-gray-500 py-4">This Is Your Current Plan</p>
                </div>
              </div>


              
            </div>

          </div>
        </div>
    </>
  );
};

export default Planscontent;
