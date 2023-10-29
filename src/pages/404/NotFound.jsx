import { Link } from 'react-router-dom'
import can from '../../assets/perroTriste.png'
const NotFound = () => {
  return (
    <main className='bg-[#CCC4BB] h-screen p-10'>
      <div className='grid justify-center  justify-items-center gap-24'>
        <h2 className='text-white text-4xl uppercase'>Pagina no Encontrada</h2>
        <img src={can} alt="" />
        <Link
          to='/'
          className='flex w-96 h-14 text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-white font-semibold leading-6 shadow-sm '>
          Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
