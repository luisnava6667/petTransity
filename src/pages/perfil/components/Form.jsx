/* eslint-disable react/prop-types */
// import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import name from '../../../assets/name.svg'
import mail from '../../../assets/mail.svg'
import editarFoto from '../../../assets/editarFoto.svg'
import editar from '../../../assets/editar.svg'
import { useEffect, useRef, useState } from 'react'
import clienteAxios from '../../../config/clienteAxios'
import useAuth from '../../../hooks/useAuth'
import { useParams } from 'react-router-dom'
import InputForm from '../../../components/InputForm'

const Form = () => {
  const { auth } = useAuth()

  console.log(auth.nombre)
  // const { id } = useParams()
  // const [error, setError] = useState(null)
  const [estadoInput, setEstadoInput] = useState(true)
  const [estadoBoton, setEstadoBoton] = useState('hidden')

  const editarFormulario = () => {
    estadoInput === true ? setEstadoInput(false) : setEstadoInput(true)
    estadoBoton === 'hidden'
      ? setEstadoBoton('visible')
      : setEstadoBoton('hidden')
  }

  // const formRef = useRef(null)

  // const handleReset = () => {
  //   formRef.current.reset()
  //   setEstadoInput(true)
  //   setEstadoBoton('hidden')
  // }
  const formik = useFormik({
    initialValues: {
      nombre: auth.nombre
      // apellido: apellido,
      // email: email,
      // localidad: localidad,
      // direccion: direccion,
      // piso: piso,
      // unidad: unidad,
      // hogar: hogar,
      // codigoPostal: codigoPostal,
      // patio_jardin: patio_jardin,
      // ambientes: ambientes,
      // estado_domicilio: estado_domicilio
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
  }, [auth])
  console.log(formik)
  console.log(formik.values)
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return (
    <div className='grid justify-items-center  overflow-auto  bg-[#E6E2DD] pb-5 w-2/3'>
      <div className='flex justify-between w-full  px-3'>
        <h3 className='text-2xl font-bold text-black mt-10'>Perfil</h3>
        <div className='w-2/2 flex flex-col items-center mt-4'>
          {/* <img className='rounded-[45px] w-40 h-40' src={img} alt='' /> */}
          <img className='-mt-6' src={editarFoto} alt='' />
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
        className='bg-[#E6E2DD] mx-5 pt-5 space-y-6 pb-10 rounded-3xl '
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}>
        <InputForm
          label='Nombre'
          name='nombre'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.apellido}
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
        />
        {/* 
            <div>
              <div className='flex gap-1  my-3'>
                <img alt='icono de etiqueta unidad' src={name} />
                <label
                  htmlFor='unidad'
                  className='block text-sm font-semibold leading-6 text-gray-900'>
                  Unidad <span className='text-red-600'>*</span>
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='unidad'
                  name='unidad'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type='text'
                  required
                  disabled={estadoInput}
                  placeholder={unidad}
                  className={`block w-36 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white${
                    touched.unidad && errors.unidad
                      ? 'ring-red-500  focus:ring-red-500'
                      : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                  } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {touched.unidad && errors.unidad && (
                  <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                    {errors.unidad}
                  </div>
                )}
              </div>
            </div>
          </div>
      
        
                 <div>
            <div className='flex gap-1  my-3'>
              <img alt='' src={name} />
              <label
                htmlFor='patio_jardin'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                ¿Posee patio/jardín? <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <select
                name='patio_jardin'
                id='patio_jardin'
                onChange={handleChange}
                onBlur={handleBlur}
                required
                disabled={estadoInput}
                className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-white ${
                  touched.patio_jardin && errors.patio_jardin
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
                <option selected>{patio_jardin}</option>
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
              {touched.patio_jardin && errors.patio_jardin && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.patio_jardin}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${estadoBoton} w-[31.5rem] flex justify-end items-center pt-10`}>
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
        </div> */}
      </form>
    </div>
  )
}

export default Form
