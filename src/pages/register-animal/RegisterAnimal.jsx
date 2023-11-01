// import NavBarLogin from "../../components/NavBarLogin";
import FormRegister from "./components/FormRegister";
// import flecha from "../../assets/flechaNav.svg";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const RegisterAnimal = () => {
  const role = localStorage.getItem("role");
  useEffect(() => {
    if (role === "usuario") {
      window.location.href = "/dashboard";
    }
  }, []);
  return (
    <main className="h-screen bg-[#CCC4BB] flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div className="">
          <TopBar />
        </div>
        <FormRegister />
      </div>
    </main>
  );
};

export default RegisterAnimal;
