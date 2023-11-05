import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import donar from "../../assets/donar.svg";
import perro from "../../assets/perro_feliz.jpeg";
import gato from "../../assets/gato_feliz.jpg";
import { useState } from "react";

const Home = () => {
  const [display, setDisplay] = useState("hidden");

  const handleDisplay = () => {
    display === "hidden" ? setDisplay("block") : setDisplay("hidden");
  };

  return (
    <main className="bg-[#CCC4BB] h-screen">
      <div className="grid px-20 justify-items-center md:flex md:justify-between">
        <Link className="block text-teal-600 md:w-1/2" to="/">
          <img
            className="md:w-72 md:h-[5.6rem] lg:w-[26.7rem] lg:h-[5.6rem]"
            alt="logo"
            src={logo}
          />
        </Link>
        <div className="items-center gap-4 flex my-5 md:my-0 text-center md:w-1/2">
          <Link
            to="/login"
            className="flex justify-evenly text-center items-center rounded-md bg-[#E59D1C] px-5 py-2.5 text-xl font-bold text-white transition md:w-1/3 h-10 shadow-md"
          >
            Login
          </Link>
          <Link
            to="/donar"
            className="flex justify-evenly text-center items-center rounded-md bg-[#E59D1C] px-7 py-2.5 text-xl font-bold text-white transition md:w-1/3 h-10 shadow-md"
          >
            <img className="" width={20} height={20} alt="logo" src={donar} />
            Donar
          </Link>
          <div className="relative inline-block md:w-1/3 h-10 ">
            <button
              onClick={handleDisplay}
              className="relative z-10 flex items-center text-white text-xl font-bold px-5 py-2 bg-[#E59D1C] border border-transparent rounded-md shadow-md dark:text-white dark:bg-gray-800 focus:outline-none  "
            >
              <span className="mx-1">Registrarse</span>
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <div
              className={`${display} absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-gray-200 rounded-md shadow-xl dark:bg-gray-800`}
            >
              {/* <a
                href="#"
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <img
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                  alt="jane avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Jane Doe
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    janedoe@exampl.com
                  </p>
                </div>
              </a> */}
              <Link
                to={"/register-usuario"}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Usuario
              </Link>

              <hr className="border-gray-200 dark:border-gray-700 " />

              <Link
                to={"/register-refugio"}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Refugio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center text-gray-600">
            Bienvenido a PetTransity
          </h1>
          <p className="text-center text-xl text-gray-600 mb-8">
            una aplicación para los amantes de los animales
          </p>
          <div className="grid gap-6 px-5 md:px-28">
            <div className="flex gap-5 text-2xl">
              <img src={perro} className="w-64 md:w-1/3 rounded-xl" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat sunt debitis laborum. Aliquam molestiae corrupti quam
                minus qui cum quas harum dolor nesciunt, excepturi dicta, saepe
                quod mollitia nisi consectetur?
              </p>
            </div>
            <div className="flex gap-5 text-2xl">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat sunt debitis laborum. Aliquam molestiae corrupti quam
                minus qui cum quas harum dolor nesciunt, excepturi dicta, saepe
                quod mollitia nisi consectetur?
              </p>
              <img
                src={gato}
                className="w-64 md:w-1/3 rounded-xl"
                alt="gato_home"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
