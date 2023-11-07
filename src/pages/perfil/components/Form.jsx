/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import name from '../../../assets/name.svg'
import editarFoto from '../../../assets/editarFoto.svg'
import editar from '../../../assets/editar.svg'
import { useEffect, useRef, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useParams } from 'react-router-dom'
import InputForm from '../../../components/InputForm'
import { CloudinaryContext, Image } from 'cloudinary-react'
import Spinner from '../../../components/Spinner'

const Form = () => {
  const { auth } = useAuth()
  // const { id } = useParams()
  // const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [estadoInput, setEstadoInput] = useState(true)
  const [estadoBoton, setEstadoBoton] = useState('hidden')

  const editarFormulario = () => {
    estadoInput === true ? setEstadoInput(false) : setEstadoInput(true)
    estadoBoton === 'hidden'
      ? setEstadoBoton('visible')
      : setEstadoBoton('hidden')
  }

  const formRef = useRef(null)

  const handleReset = () => {
    formRef.current.reset()
    setEstadoInput(true)
    setEstadoBoton('hidden')
  }
  // agregar ambienter
  const formik = useFormik({
    initialValues: {
      nombre: auth.nombre,
      apellido: auth.apellido,
      avatar: auth.avatar,
      email: auth.email,
      localidad: auth.localidad,
      direccion: auth.direccion,
      piso: auth.piso,
      unidad: auth.unidad,
      hogar: auth.hogar,
      codigoPostal: auth.codigoPostal,
      barrio: auth.barrio,
      patio_jardin: auth.patio_jardin,
      ambientes: auth.ambientes,
      estado_domicilio: auth.estado_domicilio
    },
    validationSchema: Yup.object({
      // localidad: Yup.string(),
      // direccion: Yup.string(),
      // hogar: Yup.string(),
      // ambientes: Yup.number(),
      // patio_jardin: Yup.boolean(),
      // estado_domicilio: Yup.string()
    }),

    onSubmit: async (values) => {
      console.log(values)
      // try {
      //   const res = await clienteAxios.post('usuarios', values)
      //   console.log(res.data)
      // } catch (error) {
      //   setError(error.response.data.msg)
      //   setTimeout(() => {
      //     setError(null)
      //   }, 3000)
      // }
    }
  })
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  useEffect(() => {
    formik.setValues(auth)
    setCargando(false)
  }, [auth])

  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return (
    <div className='grid  rounded-xl mx-10 md:mx-20 lg:mx-28 xl:mx-36 2xl:mx-56 px-10 bg-[#E6E2DD] mb-2 overflow-y-auto'>
      <div className='grid'>
        <div className='flex justify-between w-full'>
          <h3 className='text-2xl font-bold text-black mt-10'>Perfil</h3>
          <div className='w-2/2 flex flex-col items-center mt-4'>
            <img
              className='rounded-[45px] w-40 h-40'
              src={auth.avatar}
              alt=''
            />
          </div>
          <button
            onClick={editarFormulario}
            to=''
            className='mt-10 w-24 h-8 flex gap-2 items-center justify-center rounded-lg  text-black bg-white font-bold text-base  text-center shadow-md'>
            Editar
            <img className='w-4 h-4' src={editar} alt='' />
          </button>
        </div>
        <form
          className='bg-[#E6E2DD] overflow-auto w-full flex flex-col items-center lg:mx-5 pt-5 space-y-6 pb-10 rounded-3xl  '
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          ref={formRef}>
          <CloudinaryContext cloudName='TU_CLOUD_NAME'></CloudinaryContext>
          <InputForm
            label='Nombre'
            name='nombre'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.nombre}
            placeholder='Nombre'
            touched={touched}
            errors={errors}
            nameSrc={name}
          />
          <InputForm
            label='Apellido'
            name='apellido'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.apellido}
            placeholder='Apellido'
            touched={touched}
            errors={errors}
            nameSrc={name}
          />
          <InputForm
            label='Email'
            name='email'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.email}
            placeholder='Email'
            touched={touched}
            errors={errors}
            nameSrc={name}
          />
          <InputForm
            label='Direccion'
            name='direccion'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.direccion}
            placeholder='Direccion'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Piso'
            name='piso'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.piso}
            placeholder='Piso'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Unidad'
            name='unidad'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.unidad}
            placeholder='Unidad'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Código Postal'
            name='codigoPostal'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.codigoPostal}
            placeholder='Código Postal'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Barrio'
            name='localidad'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.localidad}
            placeholder='Barrio'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Provincia'
            name='provincia'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.provincia}
            placeholder='Provincia'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Barrio'
            name='barrio'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.barrio}
            placeholder='Barrio'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Hogar'
            name='hogar'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.hogar}
            placeholder='Hogar'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <InputForm
            label='Estado Domicilio'
            name='estado_domicilio'
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={formik.values.estado_domicilio}
            placeholder='Estado Domicilio'
            touched={touched}
            errors={errors}
            nameSrc={name}
            disabled={estadoInput}
          />
          <div
            className={`${estadoBoton}  md:flex justify-end items-center pt-10`}>
            <button
              onClick={handleReset}
              type='submit'
              className='flex mt-4 w-56 h-14 text-center items-center  border-2  justify-center rounded-2xl  px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Cancelar
            </button>
            <button
              type='submit'
              className='flex mt-4 w-56 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
