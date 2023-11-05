import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import Spinner from "./Spinner";
import useRefugio from "../hooks/useRefugio";
import cancelar from "../assets/cancelar.svg";

const CardInfoAnimales = () => {
  const { refugios } = useRefugio();
  console.log(refugios);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [cargando, setCargando] = useState(false);
  const [pet, setPet] = useState([]);
  useEffect(() => {
    if (role === "usuario") {
      setCargando(true);

      const getPet = async () => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await clienteAxios.get("/animales", config);
          setPet(data);
          setCargando(false);
        } catch (error) {
          console.log(error);
        }
      };
      getPet();
    }
  }, [role, token]);

  const eliminarAnimal = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const eliminar = await clienteAxios.post(
        `/eliminar-animal/${pet._id}`,
        config
      );
      const { data } = await clienteAxios.get("/animales", config);
      setPet(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full  sm:w-[46rem] h-80 mt-7  bg-[#E6E2DD] rounded-2xl items-center justify-center">
      {cargando ? (
        <Spinner />
      ) : role === "refugio" ? (
        <div className="w-52">
          <h2 className="text-center font-bold">Tránsito</h2>
          <p>Estado: Transitando</p>
          <p>Tipo de vivienda: Casa</p>
          <p>Patio: Sí</p>
          <p className="font-bold">Mascotas:</p>
          <p>
            2 perros tranquilos, se llevan bien con otros animales y son muy
            sociables
          </p>
          <div className="sm:flex sm:gap-4 items-center justify-center px-auto w-44 h-8 bg-red-600 rounded-lg text-white font-bold p-2 mt-7">
            <Link className="flex gap-2" href="#">
              <img
                className=""
                width={18}
                height={18}
                alt="logo"
                src={cancelar}
              />
              Finalizar tránsito
            </Link>
          </div>
        </div>
      ) : (
        <div className=" w-full overflow-auto">
          <div className="mb-10">
            <div className="flex justify-between">
              <h2 className="font-extrabold text-2xl pt-8 pl-7 mb-2 ">
                Mis mascotas
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 mx-10 sm:mx-5 mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pr-8 pl-4">
            {pet?.map((pet) => (
              <div
                key={pet._id}
                className="bg-white rounded-lg flex items-center justify-evenly"
              >
                <div>
                  <img src={pet.image} width={100} height={100} />
                </div>
                <div className="grid justify-items-center my-3">
                  <div className="grid">
                    <h3 className="text-center text-xl mb-3 font-bold capitalize">
                      {pet.nombre}
                    </h3>
                  </div>
                  <div className="flex gap-5">
                    <Link
                      to={`/editar-animales/${pet._id}`}
                      className="border-black border-2 px-4 rounded-lg font-bold"
                    >
                      Editar
                    </Link>
                    <Link
                      to=""
                      onClick={eliminarAnimal}
                      className="border-black border-2 px-4 rounded-lg font-bold"
                    >
                      Eliminar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardInfoAnimales;
