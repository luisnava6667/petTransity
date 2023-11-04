// import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import useAuth from "../../hooks/useAuth";
import Form from "./components/Form";
import { useParams } from "react-router-dom";

const Perfil = () => {
  const { auth } = useAuth();
  const {
    nombre,
    apellido,
    email,
    img,
    localidad,
    direccion,
    piso,
    unidad,
    hogar,
    codigoPostal,
    patio_jardin,
    ambientes,
    estado_domicilio,
  } = auth;
  const { id } = useParams();
  console.log(id);

  return (
    /*  <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-[#CCC4BB]">
        <TopBar />
        <div className="gap-5  w-full xl:px-28 my-5">
          <h3 className="text-center text-2xl md:text-5xl p-5 font-bold text-[#503734]">
            {}
            {auth.nombre} {auth.apellido}
          </h3>
          <div className="bg-white rounded-lg p-5 mx-5 md:flex grid  justify-items-center md:justify-evenly">
            <img
              src={auth.img}
              alt={auth.nombre}
              className="rounded-lg h-44 mb-5 md:mb-0"
            />
            <div>
              <p>Email: {auth.email}</p>
              <p>{auth.telefono}</p>
              <p>
                Direccion: {auth.direccion}, CP: {auth.codigoPostal},{" "}
                {auth.localidad}, {auth.provincia.toUpperCase()}, Buenos Aires,
                Argentina
              </p>
              <p>Hogar: {auth.hogar}</p>
              {auth.mascotas ? (
                <div>
                  <p>Mascotas: Posee Animales</p>
                  <p>Decripcion de mascotas : {auth.desc_mascotas}</p>
                </div>
              ) : (
                <div>
                  <p>Mascotas: No Posees Animales</p>
                </div>
              )}
              <div className="flex gap-5 mt-5">
                <Link
                  to={`/editar/${auth._id}`}
                  className="w-1/2 bg-[#FFB800] rounded-lg mx-5 text-white font-bold text-xl p-2 text-center "
                >
                  Editar
                </Link>
                <Link
                  to={``}
                  className="w-1/2  bg-red-800 rounded-lg mx-5 text-white font-bold text-xl p-2 text-center cursor-not-allowed"
                >
                  Eliminar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
    <main className="h-full bg-[#CCC4BB] flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full bg-[#CCC4BB]">
        <div className="">
          <TopBar />
        </div>

        <div className="flex gap-6 justify-center ">
          <div className="w-4/5 grid ">
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
