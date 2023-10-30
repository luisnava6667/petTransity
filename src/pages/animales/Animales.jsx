// import TopBar from '../components/TopBar'
// import Sidebar from '../components/Sidebar'
import axios from 'axios'
// import Link from 'next/link'
import getPets from '../utils/get-pet'

export default async function Animales() {
  console.log(Cookies.get())
  const pet = await getPets()
  // console.log(pet)

  // const [pet, setPet] = useState([])
  // useEffect(() => {
  //   const getPets = async () => {
  //     try {
  //       const url = `${process.env.NEXT_PUBLIC_URL}/animales`

  //       const response = await axios.get(url, {
  //         headers: {
  //           'Authorization': `Bearer ${data?.user.token}`,
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       return setPet(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getPets()
  // }, [data])
  // console.log(pet)
  return <div>adsasd</div>
  // return (
  //   <main className='flex h-full'>
  //     <Sidebar />
  //     <div className='flex h-screen flex-col w-full bg-[#CCC4BB]'>
  //       <TopBar />
  //       <div className='flex w-full'>
  //         {/* {pet.map(pet=>{
  //           return(
  //             <>
  //               <p>{pet}</p>
  //             </>
  //           )
  //         })} */}
  //         {/* <div className=' w-1/3 bg-[#E6E2DD]'>
  //           <div className='mb-24'>
  //             <h2 className='font-extrabold text-2xl pt-8 pl-7 mb-2 '>
  //               Animales refugiados
  //             </h2>
  //             <p className='px-14 text-xl'>
  //               Encuentra un refugio cerca de tu zona, puedes solicitar hacer
  //               transito, adoptar un animal o colaborar con un donativo{' '}
  //             </p>
  //           </div>
  //           <div className='grid gap-5 pr-8 pl-4'>
  //             {pet?.map((pet) => (
  //               <div key={pet._id} className='bg-white rounded-lg flex'>
  //                 <div>
  //                   <img src={pet.img} width={200} height={200} />
  //                 </div>
  //                 <div className='grid justify-items-center my-3'>
  //                   <div className='grid'>
  //                     <h3 className='text-center text-xl mb-3 font-bold capitalize'>
  //                       {pet.nombre}
  //                     </h3>
  //                     <p className='mb-7'>
  //                       Refugio de animales dirigido por veterinarios.
  //                     </p>
  //                     <div className='mb-5'>
  //                       <p>Direccion: {`${pet.direccion}, ${pet.provincia}`}</p>
  //                       <p>Telefono: {pet.whatsApp}</p>
  //                     </div>
  //                   </div>
  //                   <div className='flex gap-5'>
  //                     <Link
  //                       href={`animales/${pet._id}`}
  //                       className='border-black border-2 px-4 rounded-lg font-bold'>
  //                       Ver ubicación
  //                     </Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}
  //         {/* </div> */}
  //         <div className=' w-2/3'>
  //           <div className={`  bg-[#CCC4BB] w-full flex justify-center `}>
  //             {/* <Image src={spinner} /> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // )
}
