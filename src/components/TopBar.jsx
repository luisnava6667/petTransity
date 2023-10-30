import { Link } from 'react-router-dom'
import donarUsuario from '../assets/donarUsuario.svg'
import useAuth from '../hooks/useAuth'
const TopBar = () => {
  const { auth } = useAuth()
  return (
    <div className='mx-auto w-full py-14 bg-[#6F4C48] flex h-20  items-center gap-8 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-1 items-center justify-end md:justify-between'>
        <p className='block text-white text-3xl font-medium' to='/'>
          Usuario
        </p>
        <div className='flex  items-center gap-4'>
          <div className='mx-12'>
            <div className='flex gap-4 px-auto'>
              <Link className='' to='/donar'>
                <img
                  className=''
                  width={26}
                  height={24}
                  alt='donar usuario'
                  src={donarUsuario}
                />
              </Link>
            </div>
          </div>
          <div className='flex gap-4 px-auto'>
            <Link className='' to='/dashboard'>
              <img
                className=''
                width={50}
                height={50}
                alt='usuarioFake'
                src={auth?.img}
              />
            </Link>
            <div className='text-white'>
              <p>{auth?.nombre}</p>
            </div>
          </div>

          {/*    <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
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
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default TopBar
