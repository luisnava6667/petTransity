// import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import name from "../../../assets/name.svg";
import mail from "../../../assets/mail.svg";
import editarFoto from "../../../assets/editarFoto.svg";
import editar from "../../../assets/editar.svg";
import { useRef, useState } from "react";
import clienteAxios from "../../../config/clienteAxios";

const Form = ({
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
}) => {
  const [error, setError] = useState(null);
  const [estadoInput, setEstadoInput] = useState(true);
  const [estadoBoton, setEstadoBoton] = useState("hidden");

  const editarFormulario = () => {
    estadoInput === true ? setEstadoInput(false) : setEstadoInput(true);
    estadoBoton === "hidden"
      ? setEstadoBoton("visible")
      : setEstadoBoton("hidden");
  };

  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    setEstadoInput(true);
    setEstadoBoton("hidden");
  };
  const formik = useFormik({
    initialValues: {
      direccion: "",
      piso: "",
      unidad: "",
      codigoPostal: "",
      localidad: "",
      hogar: "",
      ambientes: "",
      patio_jardin: "",
      estado_domicilio: "",
    },
    validationSchema: Yup.object({
      localidad: Yup.string(),
      direccion: Yup.string(),
      hogar: Yup.string(),
      ambientes: Yup.number(),
      patio_jardin: Yup.boolean(),
      estado_domicilio: Yup.string(),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await clienteAxios.post("usuarios", values);
        console.log(res.data);
      } catch (error) {
        setError(error.response.data.msg);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    },
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik;

  return (
    <div className="flex flex-col items-center   overflow-y-auto  bg-[#E6E2DD] pb-5">
      <div className="flex justify-between items-center w-full -mb-14 mt-16 px-3">
        <h3 className="text-2xl font-bold text-black ">Perfil</h3>
        <button
          onClick={editarFormulario}
          to=""
          className="w-24 h-8 flex gap-2 items-center justify-center rounded-lg  text-black bg-white font-bold text-base  text-center shadow-md"
        >
          Editar
          <img className="w-4 h-4" src={editar} alt="" />
        </button>
      </div>
      <div className="w-2/2 flex flex-col items-center mb-4">
        {" "}
        <img className="rounded-[45px] w-40 h-40" src={img} alt="" />
        <img className="-mt-6" src={editarFoto} alt="" />
      </div>
      {error && (
        <div className="flex flex-row-reverse w-full bg-white sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
          {error}
        </div>
      )}
      <form
        className="bg-[#E6E2DD] w-full flex flex-col items-center lg:mx-5 pt-5 space-y-6 pb-10 rounded-3xl "
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="">
          <div className="flex gap-1 my-1">
            <img alt="icono de etiqueta nombre" src={name} />
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre <span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              id="nombre"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              type="name"
              disabled
              placeholder={nombre}
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black   sm:text-sm sm:leading-6 bg-white`}
            />
          </div>
        </div>
        <div className="">
          <div className="flex gap-1 my-1">
            <img alt="icono de etiqueta apellido" src={name} />
            <label
              htmlFor="apellido"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellido <span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              id="apellido"
              name="apellido"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              disabled
              placeholder={apellido}
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 bg-white`}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta email" src={mail} />
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Correo <span className="text-red-600">*</span>
              </label>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder={email}
              disabled
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white`}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta direccion del refugio" src={name} />
              <label
                htmlFor="direccion"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Dirección <span className="text-red-600">*</span>
              </label>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="direccion"
              name="direccion"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={direccion}
              required
              disabled={estadoInput}
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white${
                touched.direccion && errors.direccion
                  ? "ring-red-500  focus:ring-red-500"
                  : "ring-gray-300 placeholder:text-black focus:ring-indigo-600"
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.direccion && errors.direccion && (
              <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                {errors.direccion}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta piso" src={name} />
              <label
                htmlFor="piso"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Piso <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="piso"
                name="piso"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                placeholder={piso}
                disabled={estadoInput}
                className={`block w-36 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white${
                  touched.piso && errors.piso
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder:text-black focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.piso && errors.piso && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.piso}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta unidad" src={name} />
              <label
                htmlFor="unidad"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Unidad <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="unidad"
                name="unidad"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                disabled={estadoInput}
                placeholder={unidad}
                className={`block w-36 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white${
                  touched.unidad && errors.unidad
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.unidad && errors.unidad && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.unidad}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta codigo postal" src={name} />
              <label
                htmlFor="codigoPostal"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Código Postal <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="codigoPostal"
                name="codigoPostal"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                placeholder={codigoPostal}
                disabled={estadoInput}
                className={`block w-36 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white ${
                  touched.codigoPostal && errors.codigoPostal
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.codigoPostal && errors.codigoPostal && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.codigoPostal}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta barrio" src={name} />
              <label
                htmlFor="localidad"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Barrio <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="localidad"
                name="localidad"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                placeholder={localidad}
                disabled={estadoInput}
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-black shadow-sm ring-1 ring-inset bg-white ${
                  touched.localidad && errors.localidad
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder:text-black focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.localidad && errors.localidad && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.localidad}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta provincia" src={name} />
              <label
                htmlFor="provincia"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Provincia <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <select
                id="provincia"
                name="provincia"
                onChange={handleChange}
                onBlur={handleBlur}
                value="CABA"
                disabled
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.provincia && errors.provincia
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              >
                <option value="CABA">CABA</option>
                <option value="Otra Provincia">Otra Provincia</option>
                {/* Agrega más opciones según tus necesidades */}
              </select>
              {touched.provincia && errors.provincia && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm justify-end">
                  {errors.provincia}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta codigo postal" src={name} />
              <label
                htmlFor="hogar"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Tipo de hogar <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="hogar"
                name="hogar"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                placeholder={hogar ? hogar : "Casa, departamento"}
                disabled={estadoInput}
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white${
                  touched.hogar && errors.hogar
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.hogar && errors.hogar && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.hogar}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-1  my-3">
              <img alt="icono de etiqueta codigo postal" src={name} />
              <label
                htmlFor="ambientes"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Cantidad de ambientes <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="ambientes"
                name="ambientes"
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                required
                placeholder={ambientes ? ambientes : "Cantidad de ambientes"}
                disabled={estadoInput}
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white ${
                  touched.ambientes && errors.ambientes
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder:text-black focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.ambientes && errors.ambientes && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.ambientes}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <div className="flex gap-1  my-3">
              <img alt="" src={name} />
              <label
                htmlFor="estado_domicilio"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Estado del domicilio <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="estado_domicilio"
                name="estado_domicilio"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
                placeholder={
                  estado_domicilio ? estado_domicilio : "Ejemplo: Bueno"
                }
                disabled={estadoInput}
                className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white ${
                  touched.estado_domicilio && errors.estado_domicilio
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder:text-black focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.estado_domicilio && errors.estado_domicilio && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.estado_domicilio}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-1  my-3">
              <img alt="" src={name} />
              <label
                htmlFor="patio_jardin"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                ¿Posee patio/jardín? <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <select
                name="patio_jardin"
                id="patio_jardin"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                disabled={estadoInput}
                className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white ${
                  touched.patio_jardin && errors.patio_jardin
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              >
                <option selected>{patio_jardin}</option>
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
              {touched.patio_jardin && errors.patio_jardin && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.patio_jardin}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${estadoBoton} w-[31.5rem] flex justify-end items-center pt-10`}
        >
          <button
            onClick={handleReset}
            type="submit"
            className="flex mt-4 w-56 h-14 text-center items-center  border-2  justify-center rounded-2xl  px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex mt-4 w-56 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
