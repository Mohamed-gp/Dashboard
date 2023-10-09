// import { useEffect, useState } from "react";
// import Preloader from "./Component/Preloader";
// import Courses from "./Pages/Courses";
// import Dashboard from "./Pages/Dashboard";
// import { BrowserRouter , Route ,Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// const App = () => {
//   const [loading,setloading] = useState(true)
//   useEffect(() => {
//     setInterval(() => {
//       setloading(false)
//     }, 100);
//   },[])
//   return (
//     <>
//     {loading ? (
//         <Preloader />
//       ) : (
//         <BrowserRouter>
    
//         <Routes>
//             <Route path="/" element={<Dashboard/>}/>
//             <Route path="/courses" element={<Courses/>}/>
//             {/* <Route path="/settings" element={<Dashboard/>}></Route>
//             <Route path="/profile" element={<Dashboard/>}></Route>
//             <Route path="/projects" element={<Dashboard/>}></Route>
//             <Route path="/friends" element={<Dashboard/>}></Route>
//             <Route path="/files" element={<Dashboard/>}></Route>
//             <Route path="/plans" element={<Dashboard/>}></Route>
//             <Route path="*" element={<Dashboard/>}></Route> */}
//         </Routes>
//       </BrowserRouter>
//       )}
    
//     </>
//   );
// };

// export default App;


import { useEffect, useState } from "react";
import Preloader from "./Component/Preloader";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Dashboardcontent from "./Component/Dashboardcontent";
import Coursescontent from "./Component/Coursescontent";
import Settingscontent from "./Component/Settingscontent";
import Profilecontent from "./Component/Profilecontent";
import Projectscontent from "./Component/Projectscontent";
import Friendscontent from "./Component/Friendscontent"
import Filescontent from "./Component/Filescontent"
import Planscontent from "./Component/Planscontent";
const App = () => {
  const [loading,setloading] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setloading(false)
    }, 100);
  },[])
  return (
    <>

                <BrowserRouter>

                  <div className="main-flex flex">
                          <Nav activeweb={location.pathname.slice(1)}/>
                          <div className="right-side flex-1">
                              <Header/>
                              <Routes>
                                  <Route path="/" element={<Dashboardcontent/>}/>
                                  <Route path="/courses" element={<Coursescontent/>}/>
                                  <Route path="/settings" element={<Settingscontent/>}/>
                                  <Route path="/profile" element={<Profilecontent/>}/>
                                  <Route path="/projects" element={<Projectscontent/>}/>
                                  <Route path="/friends" element={<Friendscontent/>}/>
                                  <Route path="/files" element={<Filescontent/>}/>
                                  <Route path="/plans" element={<Planscontent/>}/>
                              </Routes>
                          </div>
                  </div>

                </BrowserRouter>
      
    
    </>
  );
};

export default App;
