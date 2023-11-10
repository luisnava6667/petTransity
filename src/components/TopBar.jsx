import { Link } from "react-router-dom";
import donarB from "../assets/donarB.svg";
import huellaLogo from "../assets/huellaLogo.svg";
import useAuth from "../hooks/useAuth";
const TopBar = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div className="mx-auto w-full py-14 bg-[#503734] flex h-20  items-center  px-4 lg:px-8">
      <img className="md:hidden" src={huellaLogo} alt="" />
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <div className="flex gap-4  md:gap-2 lg:gap-4 px-auto">
          <Link className="" to="/dashboard">
            <img
              className=""
              width={50}
              height={50}
              alt="usuarioFake"
              src={auth?.avatar}
            />
          </Link>
          <div className="text-white ">
            <p className="h-full flex">
              {auth?.nombre} <br /> {auth?.apellido}
            </p>
          </div>
        </div>
        <div className="hidden md:grid text-center text-white">
          <h1 className="md:text-xl lg:text-2xl text-[#FFA402]">
            Bienvenido a Pet Transity
          </h1>
          <p className=" md:text-xs lg:text-sm">
            Una aplicación para los amantes de los animales
          </p>
        </div>
        <div className="flex  items-center gap-4">
          {auth.role === "usuarios" && (
            <div className="sm:flex ">
              <Link
                className="flex rounded-md bg-[#FFA402] lg:m-2  justify-around items-center font-medium text-black transition md:w-[7rem] lg:w-36 h-11 shadow-md"
                to="/donar"
              >
                <img
                  className=""
                  width={22}
                  height={20}
                  alt="logo"
                  src={donarB}
                />
                Donar
              </Link>
            </div>
          )}

          {/*    <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
