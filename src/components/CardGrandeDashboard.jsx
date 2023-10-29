import CardAnimales from "./CardAnimales";

const CardGrandeDashboard = () => {
  return (
    <div className="flex flex-col w-[65.4rem] h-[39rem] mt-2 mx-auto mb-7 bg-[#E6E2DD] rounded-2xl items-center justify-center">
      <div className="h-full w-full">
        <h1 className="text-black font-bold text-2xl w-full mt-4 ml-4">
          Historial de Tránsito
        </h1>
        <div className="w-full">
          <CardAnimales />
        </div>
      </div>
    </div>
  );
};

export default CardGrandeDashboard;
