import "./scss/_Coursescontent.scss";
import {BsFillPersonFill} from "react-icons/bs"
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";


const Coursescontent = () => {
  return (
    <>
        <div className="courses-content">
            <div className="content px-4 py-5 dark:bg-sd">
                <p className="title relative w-fit py-3 text-2xl font-bold text-black">
                    Courses
                </p>
                <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-01.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Mastering Web Design</p>
                            <p className="text-gray-500">Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>9500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-02.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Data Structure And Algorithms</p>
                            <p className="text-gray-500">Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>5000</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar/>
                                    <AiFillStar />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>50</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-02.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-03.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Responsive Web Design</p>
                            <p className="text-gray-500">Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>2500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-04.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Mastering Python</p>
                            <p className="text-gray-500">Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>9500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-04.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-05.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">PHP Examples</p>
                            <p className="text-gray-500">PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-01.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Mastering Web Design</p>
                            <p className="text-gray-500">Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>9500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-02.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Data Structure And Algorithms</p>
                            <p className="text-gray-500">Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>5000</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>50</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-02.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-03.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Responsive Web Design</p>
                            <p className="text-gray-500">Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints</p>
                            <div className="relative">
                                <p className="bg-blue-500 w-fit mx-auto px-4 py-1 rounded-lg text-white tracking-widest relative font-bold z-10">POPULAR</p>
                                <p className="absolute rounded-lg course-badge left-0 top-1/2 -translate-y-1/2 bg-blue-400 h-1.5  w-full"></p>
                            </div>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>2500</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-04.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">Mastering Python</p>
                            <p className="text-gray-500">Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life</p>

                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>100</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar className="text-yellow-400"/>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>250</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-04.png" className="" alt="team-one" />
                        </div>
                    </div>
                    <div className="main-card text-center md:text-left bg-white  pb-4 rounded-lg relative">
                        <div className="img relative ">
                            <img src="../../public/assets/course-05.jpg" alt="course1" className="w-full rounded-t-lg"/>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            
                            <p className="font-bold">PHP Examples</p>
                            <p className="text-gray-500">PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases</p>
                            <div className="flex justify-between text-gray-500 font-bold relative">
                                <div className="flex gap-1 items-center">
                                    <BsFillPersonFill/>
                                    <p>50</p>
                                </div>
                                <div className="flex gap-1 items-center top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2">
                                    <AiFillStar className="text-yellow-400"/>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className="flex gap-1 items-center">
                                    <MdOutlineAttachMoney className="text-xl"/>
                                    <p>105</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-absolute absolute top-5 left-5 w-20 overflow-hidden rounded-full border-2 border-white">
                            <img src="../../public/assets/team-01.png" className="" alt="team-one" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Coursescontent