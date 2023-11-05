import CardGrandeDashboard from "../../components/CardGrandeDashboard";
import CardInfoAnimales from "../../components/CardInfoAnimales";
import CardUsuarioDashboard from "../../components/CardUsuarioDashboard";
import InformacionCasaDashboard from "../../components/InformacionCasaDashboard";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const Dashboard = () => {
  return (
    <div className="h-screen bg-[#CCC4BB] flex">
      <Sidebar />
      <div className="grid w-full gap-4 ">
        <TopBar />
        <div className="overflow-auto mx-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:gap-5 justify-center ">
            <CardUsuarioDashboard />
            {/* <InformacionCasaDashboard /> */}
            <CardInfoAnimales />
          </div>
          <CardGrandeDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
