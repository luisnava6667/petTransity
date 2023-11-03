import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

const EditarAnimal = () => {
  const { id } = useParams()
  const [animal, setAnimal] = useState([])
  useEffect(() => {}, [])
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: async (values) => {
      console.log(values)
      try {
        // const { data } = await clienteAxios.post(
        //   values
        // )
        // setTimeout(() => {
        // }, 4000)
      } catch (error) {
        console.log(error.response.data)
        setTimeout(() => {}, 4000)
      }
    }
  })
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  const { handleSubmit, handleBlur, errors } = formik
  return (
    <main className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='flex flex-col w-full h-full'>
        <div className=''>
          <TopBar />
        </div>
        <h3 className='text-center text-2xl md:text-5xl p-5 font-bold text-[#503734]'>
          Editar Animal
        </h3>
        <div className='grid justify-items-center overflow-auto'>
          <form
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onSubmit={handleSubmit}></form>
        </div>
      </div>
    </main>
  )
}

export default EditarAnimal
