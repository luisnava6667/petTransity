import Image from "next/image";
import coco from "@/assets/coco.svg";

const CardInfoAnimalEnTransito = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-[#6F4C48] w-[28rem] h-64 rounded-tl-lg rounded-tr-lg flex">
        <div className="mt-2 ml-2 flex flex-col items-center w-40">
          <Image alt="1" src={coco} width={161} height={91} />
          <div className="bg-[#B89C7C] w-36 h-6 rounded text-center font-bold -mt-3">
            COCO
          </div>
          <div className="w-44 h-28 flex flex-wrap gap-2 ml-6 mt-2">
            <div className="text-[10px] text-white">
              Especie:
              <br />{" "}
              <span className="text-white font-bold text-base">
                Canino
              </span>{" "}
            </div>
            <div className="text-[10px] text-white">
              Edad:
              <br />{" "}
              <span className="text-white font-bold text-base">1 año</span>{" "}
            </div>
            <div className="text-[10px] text-white">
              Peso:
              <br />{" "}
              <span className="text-white font-bold text-base">7 kg</span>{" "}
            </div>
            <div className="text-[10px] text-white">
              Tamaño:
              <br />{" "}
              <span className="text-white font-bold text-base">
                Pequeño
              </span>{" "}
            </div>{" "}
            <div className="text-[10px] text-white">
              Ingreso:
              <br />{" "}
              <span className="text-white font-bold text-base">
                22/01/2023
              </span>{" "}
            </div>
            <div className="text-[10px] text-white">
              Egreso:
              <br />{" "}
              <span className="text-white font-bold text-base">
                17/02/2023
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="w-64 ml-6 my-auto p-2">
          <div className="text-[10px] text-white">
            Personalidad:
            <br />{" "}
            <span className="text-white font-bold text-base">
              Tranquila - cariñosa
            </span>{" "}
          </div>
          <div className="text-[10px] text-white">
            Salud:
            <br />{" "}
            <span className="text-white font-bold text-base">
              Desparasitado, Vacunas al día Desnutrición leve.
            </span>{" "}
          </div>
          <div className="text-[10px] text-white">
            Observaciones:
            <br />{" "}
            <span className="text-white font-bold text-base">
              Fue encontrado merodeando por la calle, padecía de desnutrición,
              fue vacunado, desparasitado y despulgado. Buen comportamiento.{" "}
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="bg-[#28744B] w-[28rem] h-11 text-white text-center font-bold rounded-bl-lg rounded-br-lg flex justify-center items-center">
        TRÁNSITO ACTIVO
      </div>
    </div>
  );
};

export default CardInfoAnimalEnTransito;
