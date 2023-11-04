import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import Form from "./components/Form";

const Perfil = () => {
  return (
    <main className="h-screen bg-[#CCC4BB] flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div className="">
          <TopBar />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center ">
          <div className=" ">
            {/* <Form /> */}
            <Form
              nombre={nombre}
              apellido={apellido}
              email={email}
              img={img}
              localidad={localidad}
              direccion={direccion}
              piso={piso}
              unidad={unidad}
              hogar={hogar}
              codigoPostal={codigoPostal}
              patio_jardin={patio_jardin}
              ambientes={ambientes}
              estado_domicilio={estado_domicilio}
            />
          </div>
          <div className=" w-2/3 h-full"></div>
        </div>
      </div>
      {/* <div
              className={`${spinnerVisibility}  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}>
              <img src={spinner} />
            </div> */}
    </main>
  );
};

export default Perfil;
