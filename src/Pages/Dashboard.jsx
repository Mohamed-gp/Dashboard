import Nav from "../Component/Nav";
import Header from "../Component/Header";
const Dashboard = () => {
  return (
    <>
      <div className="main-flex flex">
        <Nav />
        <div className="right-side flex-1">
          <Header/>
          <div className="content px-4 py-3">
            <p className="title text-2xl text-black font-bold py-3 relative w-fit">Dashboard</p>
            <div className="main-cards-container flex flex-wrap mt-6 gap-9 ">
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>
              <div className="main-card h-80 bg-white rounded-2xl"></div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
