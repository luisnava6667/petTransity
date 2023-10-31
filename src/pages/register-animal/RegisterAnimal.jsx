import NavBarLogin from '../../components/NavBarLogin'
import FormRegister from './components/FormRegister'
import flecha from '../../assets/flechaNav.svg'
import { useEffect } from 'react'

const RegisterAnimal = () => {
  const role = localStorage.getItem('role')
  useEffect(() => {
    if(role === 'usuario'){
      window.location.href = '/dashboard'
    }
  },[])
  return (
    <main className='h-full bg-[#CCC4BB]'>
      <NavBarLogin
        imgButton={flecha}
        textButtonNav={'Volver'}
        styles={
          'flex rounded-md bg-[#E59D1C] px-5 py-2.5 text-3xl justify-around font-medium text-black transition  w-44 h-14 shadow-md'
        }
        ruta={'/dashboard'}
      />
      <FormRegister />
    </main>
  )
}

export default RegisterAnimal
