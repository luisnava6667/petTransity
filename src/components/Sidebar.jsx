"use client";
import Image from "next/image";
import logoYellow from "../../assets/logoYellow.svg";
import home from "@/assets/home.svg";
import mapa from "@/assets/mapa.svg";
import mapaOrange from "@/assets/gpsOrange.svg";
import homeOrange from "@/assets/homeOrange.svg";
import huellaOrange from "@/assets/huellaOrange.svg";
import perfilOrange from "@/assets/perfilOrange.svg";
import huella from "@/assets/huella.svg";
import perfil from "@/assets/perfil.svg";
import homeText from "@/assets/homeTextoNav.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const handleCerrarSesion = () => {
    cerrarSesionAuth();
  };
  return (
    <header className="w-80 min-h-screen bg-[#6F4C48]">
      <div className="mx-auto  bg-[#6F4C48] h-full flex items-center gap-8 px-4 sm:px-6 lg:px-8 rounded-r-lg rounded-br-lg  shadow-[4px_0_6px_0] shadow-[#483938]">
        <div className="flex flex-1 flex-col items-center  md:justify-between ">
          <Link className="block text-teal-600" href="/dashboard">
            <Image
              className=""
              width={215}
              height={46}
              alt="logo"
              src={logoYellow}
            />
          </Link>
          <div className="h-[41rem] w-full flex flex-col justify-evenly mb-28">
            <div
              className={`${
                pathname === "/dashboard" && "bg-[#5E413D]  rounded-xl"
              } sm:flex sm:gap-4 pl-3 px-auto sm:h-[5.38rem]`}
            >
              <Link
                className={`flex items-center gap-6 ${
                  pathname === "/dashboard"
                    ? " text-[#E59D1C]  text-3xl font-semibold"
                    : "text-white text-3xl font-semibold"
                }`}
                href="/dashboard"
              >
                <Image
                  className=""
                  width={26}
                  height={22}
                  alt="icono home"
                  src={pathname === "/dashboard" ? homeOrange : homeText}
                />
                Home
              </Link>
            </div>
            <div
              className={`${
                pathname === "/mapa" && "bg-[#5E413D] rounded-xl"
              } sm:flex sm:gap-4 pl-3 px-auto sm:h-[5.38rem]`}
            >
              <Link
                className={`flex items-center gap-6 ${
                  pathname === "/mapa"
                    ? " text-[#E59D1C]  text-3xl font-semibold"
                    : "text-white text-3xl font-semibold"
                }`}
                href="/mapa"
              >
                <Image
                  className=" "
                  width={26}
                  height={22}
                  alt="icono mapa"
                  src={pathname === "/dashboard/mapa" ? mapaOrange : mapa}
                />
                Mapa
              </Link>
            </div>
            <div
              className={`${
                pathname === "/animales" && "bg-[#5E413D] rounded-xl"
              } sm:flex sm:gap-4 pl-3 px-auto sm:h-[5.38rem]`}
            >
              <Link
                className={`flex items-center gap-6 ${
                  pathname === "/dashboard/animales"
                    ? " text-[#E59D1C]  text-3xl font-semibold"
                    : "text-white text-3xl font-semibold"
                }`}
                href="/animales"
              >
                <Image
                  className=" "
                  width={26}
                  height={24}
                  alt="icono de animales"
                  src={pathname === "/animales" ? huellaOrange : huella}
                />
                Animales
              </Link>
            </div>
            <div
              className={`${
                pathname === "/perfil" && "bg-[#5E413D] rounded-xl"
              } sm:flex sm:gap-4 pl-3 px-auto sm:h-[5.38rem]`}
            >
              <Link
                className={`flex items-center gap-6 ${
                  pathname === "/perfil"
                    ? " text-[#E59D1C]  text-3xl font-semibold"
                    : "text-white text-3xl font-semibold"
                }`}
                href="/perfil"
              >
                <Image
                  className=" "
                  width={26}
                  height={22}
                  alt="icono perfil"
                  src={pathname === "/dashboard/perfil" ? perfilOrange : perfil}
                />
                Perfil
              </Link>
            </div>
          </div>

          <div className="sm:flex sm:gap-4 px-auto">
            <button
              onClick={() => signOut()}
              className="flex items-center rounded-md bg-[#E59D1C] px-5 py-2.5 text-xl justify-around font-semibold text-black transition w-64  h-16 shadow-md"
            >
              Cerrar sesión
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
