'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import name from '@/assets/name.svg'
import mail from '@/assets/mail.svg'
import lock from '@/assets/lock.svg'
import Image from 'next/image'
import { SessionProvider, useSession } from 'next-auth/react'

const FormRegister = () => {
  const { data } = useSession()

  const formik = useFormik({
    initialValues: {
      especie: '',
      raza: '',
      nombre: '',
      edad: '',
      peso: '',
      tamaño: '',
      estado: '',
      image: '',
      personalidad: '',
      observaciones: '',
      salud: '',
      fecha_ingreso: ''
    },
    validationSchema: Yup.object({
      edad: Yup.number().required('edad requerida'),
      tamaño: Yup.string().required('tamaño es requerido'),
      nombre: Yup.string().required('nombre requerido'),
      especie: Yup.string().required('especie requerida'),
      peso: Yup.number().required('peso requerido'),
      raza: Yup.string().required('raza requerida'),
      personalidad: Yup.string().required('personalidad requerida'),
      salud: Yup.string()
        .max(100, 'El campo no debe tener más de 100 caracteres')
        .required('salud requerida'),
      image: Yup.string().required('imagen es requerida'),
      fecha_ingreso: Yup.date().required('fecha_ingreso requerido'),
      estado: Yup.boolean().required('disponibilidad requerida'),
      observaciones: Yup.string().max(
        100,
        'El campo no debe tener más de 100 caracteres'
      )
    }),
    onSubmit: async (values) => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data?.user.token}` // Asegúrate de tener el token en la variable "data"
        }
      }
      try {
        const url = `${process.env.NEXT_PUBLIC_URL}/animales`
        const resp = await axios.post(url, values, config)
      } catch (error) {
        console.log(error.response.data)
      }
    }
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return (
    <div className='flex flex-col items-center  max-h-screen  overflow-y-auto bg-[#CCC4BB]'>
      <p className='text-6xl font-bold text-[#6F4C48] mb-10 '>Animal</p>
      <form
        className='bg-[#C1A88D] px-20 pt-5 space-y-6 pb-10 mb-10 rounded-3xl '
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}>
        <p className='pb-10 underline underline-offset-2 text-[#6F4C48] text-2xl font-medium'>
          {' '}
          Información del animal
        </p>

        <div className=''>
          <div className='flex gap-1 my-1'>
            <Image alt='icono de etiqueta nombre' src={name} />
            <label
              htmlFor='nombre'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Nombre <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='nombre'
              name='nombre'
              onChange={handleChange}
              onBlur={handleBlur}
              type='name'
              required
              placeholder='Nombre'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.nombre && errors.nombre
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.nombre && errors.nombre && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.nombre}
              </div>
            )}
          </div>
        </div>
        <div className=''>
          <div className='flex gap-1 my-1'>
            <Image alt='icono de etiqueta especie' src={name} />
            <label
              htmlFor='especie'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Especie <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='especie'
              name='especie'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Perro'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.especie && errors.especie
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.especie && errors.especie && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.especie}
              </div>
            )}
          </div>
        </div>

        <div className=''>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta razon social' src={name} />
            <label
              htmlFor='raza'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Raza <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='raza'
              name='raza'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Mestizo'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.raza && errors.raza
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.raza && errors.raza && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.raza}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta peso' src={name} />
              <label
                htmlFor='peso'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Peso <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='peso'
              name='peso'
              onChange={handleChange}
              onBlur={handleBlur}
              type='number'
              placeholder='Peso'
              required
              className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.peso && errors.peso
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.peso && errors.peso && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.peso}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta edad' src={mail} />
              <label
                htmlFor='edad'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Edad <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='edad'
              name='edad'
              onChange={handleChange}
              onBlur={handleBlur}
              type='edad'
              placeholder='Edad'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.edad && errors.edad
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.edad && errors.edad && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.edad}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta ingrese contraseña' src={lock} />
              <label
                htmlFor='tamaño'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Tamaño <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            {/* colocar un select */}
            <input
              id='tamaño'
              name='tamaño'
              onChange={handleChange}
              onBlur={handleBlur}
              type='tamaño'
              placeholder='Grande'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.tamaño && errors.tamaño
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.tamaño && errors.tamaño && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.tamaño}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta personalidad' src={name} />
              <label
                htmlFor='personalidad'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Personalidad <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='personalidad'
              name='personalidad'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Personalidad'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.personalidad && errors.personalidad
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.personalidad && errors.personalidad && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.personalidad}
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-6'>
          <div>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta fecha_ingreso' src={name} />
              <label
                htmlFor='fecha_ingreso'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                fecha_ingreso <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='fecha_ingreso'
                name='fecha_ingreso'
                onChange={handleChange}
                onBlur={handleBlur}
                type='date'
                required
                placeholder='Fecha de fecha_ingreso'
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.fecha_ingreso && errors.fecha_ingreso
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.fecha_ingreso && errors.fecha_ingreso && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.fecha_ingreso}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta egreso' src={name} />
            <label
              htmlFor='salud'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Estado de salud <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='salud'
              name='salud'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Estado de salud'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.salud && errors.salud
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.salud && errors.salud && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.salud}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta barrio' src={name} />
            <label
              htmlFor='observaciones'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Observaciones <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='observaciones'
              name='observaciones'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Estado del animal'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.observaciones && errors.observaciones
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.observaciones && errors.observaciones && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.observaciones}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta codigo postal' src={name} />
            <label
              htmlFor='image'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Imagen <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='image'
              name='image'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='URL de la imagen'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.image && errors.image
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.image && errors.image && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.image}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='' src={name} />
            <label
              htmlFor='estado'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Estado <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              name='estado'
              id='estado'
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.estado && errors.estado
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option></option>
              <option value={true}>Disponible</option>
              <option value={false}>No disponible</option>
            </select>
            {touched.estado && errors.estado && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm justify-end'>
                {errors.estado}
              </div>
            )}
          </div>
        </div>
        <div className='w-[31.5rem] flex justify-end items-center pt-10'>
          <button
            type='submit'
            className='flex mt-4 w-56 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister
