import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import Form from "./components/Form";
import FormRefugio from "./components/FormRefugio";

const Perfil = () => {
  const role = localStorage.getItem("role");
  return (
    <main className="h-screen bg-[#CCC4BB] flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div className="">
          <TopBar />
        </div>
        {role === "refugio" ? <FormRefugio /> : <Form />}
        <div className="flex justify-center "></div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center "></div>
      </div>
      {/* <div
              className={`${spinnerVisibility}  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}>
              <img src={spinner} />
            </div> */}
    </main>
  );
};

export default Perfil;
