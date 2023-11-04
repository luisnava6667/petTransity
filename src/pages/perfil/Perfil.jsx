import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'
import Form from './components/Form'

const Perfil = () => {
  return (
    <main className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='flex flex-col w-full h-full'>
        <div className=''>
          <TopBar />
        </div>

        <div className='flex flex-col lg:flex-row gap-6 justify-center '>
          <div className=' '>{/* <Form /> */}</div>
          <div className=' w-2/3 h-full'>
            <Form />
          </div>
        </div>
      </div>
      {/* <div
              className={`${spinnerVisibility}  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}>
              <img src={spinner} />
            </div> */}
    </main>
  )
}

export default Perfil
