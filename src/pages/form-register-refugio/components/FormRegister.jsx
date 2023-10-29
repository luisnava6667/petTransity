'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import name from '@/assets/name.svg'
import mail from '@/assets/mail.svg'
import lock from '@/assets/lock.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const required = 'Este campo es requerido'
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      razon_social: '',
      cuit: '',
      email: '',
      password: '',
      password2: '',
      direccion: '',
      piso: '',
      unidad: '',
      codigoPostal: '',
      provincia: '',
      departamento: '',
      localidad: '',
      estado_refugio: '',
      web: '',
      whatsApp: '',
      facebook: '',
      youtube: '',
      instagram: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Formato de email invalido')
        .required('Email requerido'),
      password: Yup.string()
        .required(required)
        .test(
          'is-uppercase',
          'Tienes las mayusculas activas',
          function (value) {
            return /^[A-Z]+$/.test(value)
          }
        )
        .min(8, 'Ingresa 8 caracteres como mínimo')
        .matches(
          /[A-Z]/,
          'La contraseña debe contener al menos una letra mayúscula'
        )
        .matches(
          /[0-9]/,
          'La contraseña debe contener al menos un caracter numérico'
        ),
      password2: Yup.string()
        .oneOf(
          [Yup.ref('password'), undefined],
          'Las contraseñas deben coincidir'
        )
        .required(required),
      nombre: Yup.string().required(required),
      apellido: Yup.string().required(required),
      departamento: Yup.string().required(required),
      localidad: Yup.string().required(required),
      whatsApp: Yup.string().required(required),
      cuit: Yup.string().required(required),
      razon_social: Yup.string().required(required),
      estado_refugio: Yup.string().required(required),
      direccion: Yup.string().required(required)
    }),
    onSubmit: (values) => {
      console.log(values)

      axios
        .post(`${process.env.NEXT_PUBLIC_URL}/refugio`, values)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
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
      <p className='text-6xl font-bold text-[#6F4C48] mb-10'>Refugio</p>
      <form
        className='bg-[#C1A88D] px-20 pt-5 space-y-6 pb-10 rounded-3xl '
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}>
        <p className='pb-10 underline underline-offset-2 text-[#6F4C48] text-2xl font-medium'>
          {' '}
          Cree su cuenta de PetTransity
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
            <Image alt='icono de etiqueta apellido' src={name} />
            <label
              htmlFor='apellido'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Apellido <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='apellido'
              name='apellido'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Apellido'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.apellido && errors.apellido
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.apellido && errors.apellido && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.apellido}
              </div>
            )}
          </div>
        </div>

        <div className=''>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta razon social' src={name} />
            <label
              htmlFor='razon_social'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Razón Social <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='razon_social'
              name='razon_social'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Razón Social'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.razon_social && errors.razon_social
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.razon_social && errors.razon_social && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.razon_social}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta cuit' src={name} />
              <label
                htmlFor='cuit'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Cuit <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='cuit'
              name='cuit'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Cuit'
              className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.cuit && errors.cuit
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.cuit && errors.cuit && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.cuit}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta email' src={mail} />
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Correo <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              type='email'
              autoComplete='email'
              placeholder='Correo'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.email && errors.email
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.email && errors.email && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta ingrese contraseña' src={lock} />
              <label
                htmlFor='password'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Contraseña <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div>
            <p>Ingresa 8 caracteres como mínimo</p>
            <p>La contraseña debe contener al menos una letra mayúscula</p>
            <p>La contraseña debe contener al menos un caracter numérico</p>
          </div>
          <div className='mt-2 relative'>
            <input
              id='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? 'text' : 'password'}
              placeholder='**********'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.password && errors.password
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-12`} // Añadido pr-12 (padding-right) para dejar espacio para el botón
            />
            <button
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/4 transform -translate-y-2/4'>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
            {touched.password && errors.password && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.password}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta reingrese contraseña' src={lock} />
              <label
                htmlFor='password2'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Reingrese contraseña <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='password2'
              name='password2'
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              placeholder='**********'
              autoComplete='new-password'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.password2 && errors.password2
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.password2 && errors.password2 && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.password2}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta direccion del refugio' src={name} />
              <label
                htmlFor='direccion'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Dirección del Refugio <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='direccion'
              name='direccion'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Dirección del Refugio'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.direccion && errors.direccion
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.direccion && errors.direccion && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.direccion}
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-6'>
          <div>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta piso' src={name} />
              <label
                htmlFor='piso'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Piso <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='piso'
                name='piso'
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Piso'
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.piso && errors.piso
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.piso && errors.piso && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.piso}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta unidad' src={name} />
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
                placeholder='Unidad'
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
            <Image alt='icono de etiqueta provincia' src={name} />
            <label
              htmlFor='provincia'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Provincia <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              id='provincia'
              name='provincia'
              onChange={handleChange}
              onBlur={handleBlur}
              value='CABA'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.provincia && errors.provincia
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option value='CABA'>CABA</option>
              <option value='Otra Provincia'>Otra Provincia</option>
              {/* Agrega más opciones según tus necesidades */}
            </select>
            {touched.provincia && errors.provincia && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.provincia}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta comuna' src={name} />
            <label
              htmlFor='departamento'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Comuna <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              id='departamento'
              name='departamento'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Comuna'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.comuna && errors.comuna
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option value='' disabled>
                Selecciona una comuna
              </option>
              <option value='Comuna 1'>Comuna 1</option>
              <option value='Comuna 2'>Comuna 2</option>
              <option value='Comuna 3'>Comuna 3</option>
              <option value='Comuna 4'>Comuna 4</option>
              <option value='Comuna 5'>Comuna 5</option>
              <option value='Comuna 6'>Comuna 6</option>
              <option value='Comuna 7'>Comuna 7</option>
              <option value='Comuna 8'>Comuna 8</option>
              <option value='Comuna 9'>Comuna 9</option>
              <option value='Comuna 10'>Comuna 10</option>
              <option value='Comuna 11'>Comuna 11</option>
              <option value='Comuna 12'>Comuna 12</option>
              <option value='Comuna 13'>Comuna 13</option>
              <option value='Comuna 14'>Comuna 14</option>
              <option value='Comuna 15'>Comuna 15</option>
            </select>
            {touched.departamento && errors.departamento && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.departamento}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta barrio' src={name} />
            <label
              htmlFor='localidad'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Barrio <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              id='localidad'
              name='localidad'
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.barrio && errors.barrio
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option value='' disabled>
                Selecciona un barrio
              </option>
              <option value='Agronomía'>Agronomía</option>
              <option value='Almagro'>Almagro</option>
              <option value='Balvanera'>Balvanera</option>
              <option value='Barracas'>Barracas</option>
              <option value='Belgrano'>Belgrano</option>
              <option value='Boedo'>Boedo</option>
              <option value='Caballito'>Caballito</option>
              <option value='Chacarita'>Chacarita</option>
              <option value='Coghlan'>Coghlan</option>
              <option value='Colegiales'>Colegiales</option>
              <option value='Constitución'>Constitución</option>
              <option value='Flores'>Flores</option>
              <option value='Floresta'>Floresta</option>
              <option value='La Boca'>La Boca</option>
              <option value='La Paternal'>La Paternal</option>
              <option value='Liniers'>Liniers</option>
              <option value='Mataderos'>Mataderos</option>
              <option value='Montserrat'>Montserrat</option>
              <option value='Monte Castro'>Monte Castro</option>
              <option value='Nueva Pompeya'>Nueva Pompeya</option>
              <option value='Núñez'>Núñez</option>
              <option value='Palermo'>Palermo</option>
              <option value='Parque Avellaneda'>Parque Avellaneda</option>
              <option value='Parque Chacabuco'>Parque Chacabuco</option>
              <option value='Parque Chas'>Parque Chas</option>
              <option value='Parque Patricios'>Parque Patricios</option>
              <option value='Puerto Madero'>Puerto Madero</option>
              <option value='Recoleta'>Recoleta</option>
              <option value='Retiro'>Retiro</option>
              <option value='Saavedra'>Saavedra</option>
              <option value='San Cristóbal'>San Cristóbal</option>
              <option value='San Nicolás'>San Nicolás</option>
              <option value='San Telmo'>San Telmo</option>
              <option value='Vélez Sarsfield'>Vélez Sarsfield</option>
              <option value='Versalles'>Versalles</option>
              <option value='Villa Crespo'>Villa Crespo</option>
              <option value='Villa del Parque'>Villa del Parque</option>
              <option value='Villa Devoto'>Villa Devoto</option>
              <option value='Villa Gral. Mitre'>Villa Gral. Mitre</option>
              <option value='Villa Lugano'>Villa Lugano</option>
              <option value='Villa Luro'>Villa Luro</option>
              <option value='Villa Ortúzar'>Villa Ortúzar</option>
              <option value='Villa Pueyrredón'>Villa Pueyrredón</option>
              <option value='Villa Real'>Villa Real</option>
              <option value='Villa Riachuelo'>Villa Riachuelo</option>
              <option value='Villa Santa Rita'>Villa Santa Rita</option>
              <option value='Villa Soldati'>Villa Soldati</option>
              <option value='Villa Urquiza'>Villa Urquiza</option>
            </select>
            {touched.localidad && errors.localidad && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.localidad}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta codigo postal' src={name} />
            <label
              htmlFor='codigoPostal'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Código Postal <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='codigoPostal'
              name='codigoPostal'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Código Postal'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.codigoPostal && errors.codigoPostal
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.codigoPostal && errors.codigoPostal && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.codigoPostal}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta estado del refugio' src={name} />
            <label
              htmlFor='estado_refugio'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Estado del refugio <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='estado_refugio'
              name='estado_refugio'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Ejemplo: Bueno'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.estado_refugio && errors.estado_refugio
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.estado_refugio && errors.estado_refugio && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.estado_refugio}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta telefono' src={name} />
            <label
              htmlFor='whatsApp'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Télefono <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='whatsApp'
              name='whatsApp'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text' // Cambiado de "number" a "text"
              placeholder='Teléfono'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.whatsApp && errors.whatsApp
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none`}
            />
            {touched.whatsApp && errors.whatsApp && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.whatsApp}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta web' src={name} />
            <label
              htmlFor='web'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Web
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='web'
              name='web'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Web'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.web && errors.web
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.web && errors.web && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.web}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta facebook' src={name} />
            <label
              htmlFor='facebook'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Facebook
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='facebook'
              name='facebook'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Facebook'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.facebook && errors.facebook
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.facebook && errors.facebook && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.facebook}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta youtube' src={name} />
            <label
              htmlFor='youtube'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              YouTube
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='youtube'
              name='youtube'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='YouTube'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.youtube && errors.youtube
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.youtube && errors.youtube && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.youtube}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta instragram' src={name} />
            <label
              htmlFor='instagram'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Instagram
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='instagram'
              name='instagram'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Instagram'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.instagram && errors.instagram
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.instagram && errors.instagram && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.instagram}
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
