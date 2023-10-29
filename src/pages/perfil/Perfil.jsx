import { useEffect, useState } from 'react'

import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
const Perfil = () => {
  const [user, setUser] = useState([])

  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#CCC4BB]'>
        <TopBar />
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='flex w-[65.4rem] gap-4 '>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
