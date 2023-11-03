import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'
import Form from '../form-register-usuario/components/Form'

export const UserId = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#CCC4BB]'>
        <TopBar />
        <div className='grid justify-items-center '>
          <h3 className='text-2xl md:text-5xl p-5 font-bold text-[#503734] '>
            Edita tus datos
          </h3>
          {<Form />}
        </div>
      </div>
    </div>
  )
}
