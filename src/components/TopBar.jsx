import Image from 'next/image'
import donarUsuario from '../../assets/donarUsuario.svg'
import notificacion from '../../assets/notificacion.svg'
import mensaje from '../../assets/mensaje.svg'
import usuarioFake from '../../assets/usuarioFake.svg'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const TopBar = () => {
  const { data } = useSession()

  return (
    <div className='mx-auto w-full py-14 bg-[#6F4C48] flex h-20  items-center gap-8 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-1 items-center justify-end md:justify-between'>
        <p className='block text-white text-3xl font-medium' href='/'>
          Usuario
        </p>
        <div className='flex  items-center gap-4'>
          <div className='mx-12'>
            <div className='flex gap-4 px-auto'>
              <Link className='' href='/donar'>
                <Image
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
            <Link className='' href='/dashboard'>
              <Image
                className=''
                width={50}
                height={50}
                alt='usuarioFake'
                src={data?.img}
              />
            </Link>
            <div className='text-white'>
              <p>{data?.nombre}</p>
              <p>Estado</p>
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
