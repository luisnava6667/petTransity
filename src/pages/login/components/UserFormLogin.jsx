import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import SwitchUsuarioRefugio from '../../../components/SwitchUsuarioRefugio'

const UserFormLogin = () => {
  const [selectedButton, setSelectedButton] = useState('refugio')
  const [error, setError] = useState(null)
  // const route = useRouter()
  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo electrónico es inválido')
        .required('El correo electrónico es requerido'),
      password: Yup.string()
        .required('La contraseña es requerida')
        .min(3, 'La contraseña debe tener al menos 3 caracteres')
    }),
    onSubmit: async (values) => {
      try {
        // const responseNextAuth = await signIn('credentials', {
        //   email: values.email,
        //   password: values.password,
        //   redirect: false,
        //   refOrUser: selectedButton
        // })
        // if (responseNextAuth.error) {
        //   setError(responseNextAuth.error)
        //   setTimeout(() => {
        //     setError(null)
        //   }, 5000)
        //   return
        // }
        // route.push('/dashboard')
      } catch (error) {
        console.log(error)
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
    <div className='flex flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='flex flex-col items-center'>
        <h2 className=' text-center text-6xl font-bold leading-9 tracking-tight text-[#6F4C48]'>
          INICIAR SESIÓN
        </h2>
        <SwitchUsuarioRefugio
          selectedButton={selectedButton}
          handleButtonClick={handleButtonClick}
        />
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        {error && (
          <div className='flex flex-row-reverse w-full bg-white sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
            {error}
          </div>
        )}
        <form
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Correo
            </label>
            <div className='mt-2'>
              <input
                id='correo'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
                required
                placeholder='Correo electrónico'
                className={`block w-[25rem] h-12 p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Contraseña
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                type='password'
                placeholder='**********'
                required
                className={`block w-[25rem] h-12 p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.password && errors.password
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.password && errors.password && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.email}
                </div>
              )}
              <div className='text-sm mt-2 flex justify-end'>
                <a
                  href='#'
                  className='font-semibold underline text-[#6F4C48] hover:text-indigo-500'>
                  Olvidaste su contraseña?
                </a>
              </div>
            </div>
          </div>

          <div className='w-[25rem] flex flex-col items-center '>
            <button
              type='submit'
              className='flex w-96 h-14 lg:text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-sm font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Ingresar
            </button>
            <button
              type='submit'
              className='flex mt-4 w-96 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-md bg-[#ccc4bb] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserFormLogin
