import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import donar from '../../assets/donar.svg'

const Home = () => {
  return (
    <main className='bg-[#CCC4BB] h-screen'>
      <div className='grid px-20 justify-items-center md:flex md:justify-between'>
        <Link className='block text-teal-600 md:w-1/2' to='/'>
          <img className='' width={427} height={90} alt='logo' src={logo} />
        </Link>
        <div className='items-center gap-4 flex my-5 md:my-0 text-center md:w-1/2'>
          <Link
            to='/login'
            className='flex justify-evenly text-center items-center rounded-md bg-[#E59D1C] px-5 py-2.5 text-xl font-bold text-white transition md:w-1/3 h-10 shadow-md'>
            Login
          </Link>
          <Link
            to='/register'
            className='flex justify-evenly text-center items-center rounded-md bg-[#E59D1C] px-5 py-2.5 text-xl font-bold text-white transition md:w-1/3 h-10 shadow-md'>
            Registrarse
          </Link>
          <Link
            to='/donar'
            className='flex justify-evenly text-center items-center rounded-md bg-[#E59D1C] px-7 py-2.5 text-xl font-bold text-white transition md:w-1/3 h-10 shadow-md'>
            <img className='' width={20} height={20} alt='logo' src={donar} />
            Donar
          </Link>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl font-bold text-center text-gray-600'>
            Welcome to PetTransity
          </h1>
          <p className='text-center text-gray-600'>
            A pet transition app for pet owners
          </p>
          <div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
