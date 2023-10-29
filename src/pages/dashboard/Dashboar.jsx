import CardGrandeDashboard from '../../components/CardGrandeDashboard'
import CardUsuarioDashboard from '../../components/CardUsuarioDashboard'
import InformacionCasaDashboard from '../../components/InformacionCasaDashboard'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'

const Dashboard = () => {
  return (
    <div className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='grid w-full gap-4 '>
        <TopBar />
        <div className='overflow-auto'>
          <div className='flex gap-5 justify-center'>
            <CardUsuarioDashboard />
            <InformacionCasaDashboard />
          </div>
          <CardGrandeDashboard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
