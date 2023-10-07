import { useEffect } from "react";
import "./scss/_Profilecontent.scss"
import {AiFillStar} from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";


const Profilecontent = () => {
  // toggle 
  useEffect(() => {
    document.querySelectorAll(".toggle-relative").forEach((e) => {
      e.addEventListener("click", () => {
        if (e.children[0].children[1].classList.contains("hidden")) {
          e.classList.add("bg-gray-500");
          e.children[0].children[0].classList.add("hidden");
          e.children[0].classList.add("toggle-animation");
          e.children[0].classList.remove("rv-toggle-animation");
          e.classList.remove("bg-mb");
          e.children[0].children[1].classList.remove("hidden");
        } else {
          e.classList.add("bg-mb");
          e.children[0].children[0].classList.remove("hidden");
          e.children[0].classList.add("rv-toggle-animation");
          e.children[0].classList.remove("toggle-animation");
          e.classList.remove("bg-gray-500");
          e.children[0].children[1].classList.add("hidden");
        }
      });
    });
  },[])
  
  return (
    <>
    <div className="profile-content">
            <div className="content px-4 py-5 dark:bg-sd">
                <p className="title dark:text-white relative w-fit py-3 text-2xl font-bold text-black">
                Profile
                </p>
                <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                    <div className="main-card flex items-center justify-evenly main-card-full w-full dark:bg-md text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="one">
                          <div className="flex items-center flex-col gap-2">
                            <div className="img w-52" >
                              <img src="../../public/assets/avatar.png" alt="avatar" />
                            </div>
                            <p>Osama Elzero</p>
                            <p>Level 20</p>
                            <div className="relative w-32 h-3 bg-gray-400 rounded-lg ">
                              <div className="absolute left-0 bg-mb h-full rounded-lg w-3/5"></div>
                            </div>
                            <div className="flex items-center">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                            </div>
                            <p>550 Rating</p>
                          </div>
                        </div>
                        <div className="two flex-1 flex flex-col">
                          <div className="flex justify-between">
                            <div>
                              <p>General Information</p>
                              <p>Full Name : Outerbah Mohamed</p>
                              <div className="toggle-relative bg-mb relative h-6 w-20 cursor-pointer rounded-3xl duration-1000">
                                <div className="toggle-absolute absolute right-1 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                                  <FaCheck className="text-mb check text-base" />
                                  <FaXmark className="x-mark hidden text-base text-gray-400" />
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
  )
}

export default Profilecontent