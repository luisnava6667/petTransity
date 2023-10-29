import NavBarLogin from '../components/NavBarLogin'
import ComponentImage from '../components/ComponentImage'
import canUsuario from '@/assets/canUsuario.svg'
import canRefugio from '@/assets/canRefugio.svg'
import flecha from '@/assets/flechaNav.svg'
import Link from 'next/link'
import SwitchUsuarioRefugio from '../components/SwitchUsuarioRefugio'
import { useState } from 'react'

const Page = () => {
  const [selectedButton, setSelectedButton] = useState('refugio')

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }
  return (
    <>
      <NavBarLogin
        imgButton={flecha}
        textButtonNav={'Volver'}
        styles={
          'flex rounded-md bg-[#E59D1C] px-5 py-2.5 text-3xl justify-around font-medium text-black transition w-44 h-14 shadow-md'
        }
        ruta={'/login'}
      />
      <div className='flex flex-col bg-[#ccc4bb] items-center'>
        <p className='text-5xl font-bold text-[#6F4C48] mt-12'>
          REGISTRARME COMO:
        </p>
        <SwitchUsuarioRefugio
          selectedButton={selectedButton}
          handleButtonClick={handleButtonClick}
        />
        <div className='flex min-h-screen justify-around mt-12 rounded-full '>
          <div className='flex flex-col items-center '>
            <Link
              className='text-3xl font-bold text-[#6F4C48] underline'
              href={'/form-register-user'}>
              Usuario
            </Link>
            <Link href={'/form-register-user'}>
              <ComponentImage image={canUsuario} stylesImg={'rounded-full'} />
            </Link>
          </div>
          <div className='flex flex-col items-center'>
            <Link
              className='text-3xl font-bold text-[#6F4C48] underline'
              href={'/form-register-user'}>
              Refugio
            </Link>
            <Link href={'/form-register-refugio'}>
              <ComponentImage image={canRefugio} stylesImg={'rounded-full'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
