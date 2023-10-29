'use client'
import NavBarLogin from '../components/NavBarLogin'
import FormRegister from './components/FormRegister'
import flecha from '@/assets/flechaNav.svg'

const FormRegisterRefugio = () => {
  return (
    <>
      <NavBarLogin
        imgButton={flecha}
        textButtonNav={'Volver'}
        styles={
          'flex rounded-md bg-[#E59D1C] px-5 py-2.5 text-3xl justify-around font-medium text-black transition  w-44 h-14 shadow-md'
        }
        ruta={'/login'}
      />
      <FormRegister />
    </>
  )
}

export default FormRegisterRefugio
