import "./scss/_Coursescontent.scss";
import {BsFillPersonFill} from "react-icons/bs"


const Coursescontent = () => {
  return (
    <>
      <div className="content px-4 py-5">
            <p className="title relative w-fit py-3 text-2xl font-bold text-black">
                Courses
            </p>
            <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                <div className="main-card">
                    <div className="img relative">
                        <img src="../../public/assets/course-01.jpg" alt="course1" />
                    </div>
                    <div className="pl-2">
                        <p className="font-bold">Mastering Web Design</p>
                        <p>Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                        <button>Popular</button>
                        <div className="flex justify-between">
                            <div className="flex  items-center">
                                <BsFillPersonFill/>
                                <p>950</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                <div className="main-card">
                    <div className="img relative">
                        <img src="../../public/assets/course-01.jpg" alt="course1" />
                    </div>
                    <div className="pl-2">
                        <p className="font-bold">Mastering Web Design</p>
                        <p>Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                        <button>Popular</button>
                        <div className="flex justify-between">
                            <div className="flex  items-center">
                                <BsFillPersonFill/>
                                <p>950</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                <div className="main-card">
                    <div className="img relative">
                        <img src="../../public/assets/course-01.jpg" alt="course1" />
                    </div>
                    <div className="pl-2">
                        <p className="font-bold">Mastering Web Design</p>
                        <p>Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                        <button>Popular</button>
                        <div className="flex justify-between">
                            <div className="flex  items-center">
                                <BsFillPersonFill/>
                                <p>950</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
                <div className="main-card">
                    <div className="img relative">
                        <img src="../../public/assets/course-01.jpg" alt="course1" />
                    </div>
                    <div className="pl-2">
                        <p className="font-bold">Mastering Web Design</p>
                        <p>Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture</p>
                        <button>Popular</button>
                        <div className="flex justify-between">
                            <div className="flex  items-center">
                                <BsFillPersonFill/>
                                <p>950</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <table>
        <thead>
            <tr>
                <th>hello</th>
                <th>hello</th>
                <th>hello</th>
                <th>hello</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>he</td>
                <td>he</td>
                <td>he</td>
                <td>he</td>
                <td>he</td>
                <td>he</td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Coursescontent