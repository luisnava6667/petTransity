import NavBarLogin from '../../components/NavBarLogin'
import donar from '../../assets/donar.svg'
import { useState } from 'react'
import { useFormik } from 'formik'
import clienteAxios from '../../config/clienteAxios'
import SwitchUsuarioRefugio from '../../components/SwitchUsuarioRefugio'
const OlvidePassword = () => {
  const [user, setUser] = useState('refugio')
  const [error, setError] = useState(null)
  const handleButtonClick = (button) => {
    setUser(button)
  }
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: async (values) => {
      try {
        const { data } = await clienteAxios.post(
          `${user}/olvide-password`,
          values
        )
        console.log(data)
        setError(data.msg)
        setTimeout(() => {
          setError(null)
        }, 4000)
      } catch (error) {
        console.log(error.response.data)
        setError(error.response.data)
        setTimeout(() => {
          setError(null)
        }, 4000)
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
    <main className='h-screen bg-[#CCC4BB] grid'>
      <NavBarLogin
        imgButton={donar}
        textButtonNav={'Donar'}
        ruta={'/donar'}
        styles={
          'flex rounded-md bg-[#E59D1C] px-5 py-2.5 text-3xl justify-around font-medium text-black transition w-44 h-14 shadow-md'
        }
      />
      <div className='flex flex-col items-center'>
        <SwitchUsuarioRefugio
          selectedButton={user}
          handleButtonClick={handleButtonClick}
        />
        {error && (
          <div className='grid w-full bg-white  mt-5 text-red-900 uppercase font-bold text-lg p-1 text-center'>
            {error}
          </div>
        )}
        <form
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onSubmit={handleSubmit}>
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
          <button
            type='submit'
            className='flex w-96 h-14 lg:text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-sm font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Ingresar
          </button>
        </form>
      </div>
    </main>
  )
}

export default OlvidePassword
