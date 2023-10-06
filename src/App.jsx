import { useEffect, useState } from "react";
import Preloader from "./Component/Preloader";
import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const App = () => {
  const [loading,setloading] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setloading(false)
    }, 100);
  },[])
  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/courses" element={<Courses/>}/>
            {/* <Route path="/settings" element={<Dashboard/>}></Route>
            <Route path="/profile" element={<Dashboard/>}></Route>
            <Route path="/projects" element={<Dashboard/>}></Route>
            <Route path="/friends" element={<Dashboard/>}></Route>
            <Route path="/files" element={<Dashboard/>}></Route>
            <Route path="/plans" element={<Dashboard/>}></Route>
            <Route path="*" element={<Dashboard/>}></Route> */}
        </Routes>
      </BrowserRouter>
      )}
    
    </>
  );
};

export default App;


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
      
    
//     </>
//   );
// };

// export default App;
