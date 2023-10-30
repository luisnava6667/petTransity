import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import donar from '../../assets/donar.svg'
import perro from '../../assets/perro_feliz.jpeg'
import gato from '../../assets/gato_feliz.jpg'

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
            Bienvenido a PetTransity
          </h1>
          <p className='text-center text-xl text-gray-600 mb-8'>
            una aplicación para los amantes de los animales
          </p>
          <div className='grid gap-6 px-5 md:px-28'>
            <div className='flex gap-5 text-2xl'>
              <img src={perro} className='w-64 md:w-1/3 rounded-xl' alt='' />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat sunt debitis laborum. Aliquam molestiae corrupti quam
                minus qui cum quas harum dolor nesciunt, excepturi dicta, saepe
                quod mollitia nisi consectetur?
              </p>
            </div>
            <div className='flex gap-5 text-2xl'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat sunt debitis laborum. Aliquam molestiae corrupti quam
                minus qui cum quas harum dolor nesciunt, excepturi dicta, saepe
                quod mollitia nisi consectetur?
              </p>
              <img
                src={gato}
                className='w-64 md:w-1/3 rounded-xl'
                alt='gato_home'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
