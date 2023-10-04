import Dashboard from "./Pages/Dashboard";
import { BrowserRouter , Route ,Routes } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/settings" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Dashboard/>}></Route>
          <Route path="/projects" element={<Dashboard/>}></Route>
          <Route path="/cources" element={<Dashboard/>}></Route>
          <Route path="/friends" element={<Dashboard/>}></Route>
          <Route path="/files" element={<Dashboard/>}></Route>
          <Route path="/plans" element={<Dashboard/>}></Route>
          <Route path="*" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
