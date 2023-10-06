import Nav from "../Component/Nav";
import Header from "../Component/Header";
import Dashboardcontent from "../Component/Dashboardcontent";
const Dashboard = () => {
  return (
    <>
      <div className="main-flex flex">
        <Nav activenav="dashboard"/>
        <div className="right-side flex-1">
          <Header/>
          <Dashboardcontent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
