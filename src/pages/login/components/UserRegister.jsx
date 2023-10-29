import can from '../../../assets/perro-usuario.svg'
import UserFormLogin from './UserFormLogin'
import ComponentImage from '../../../components/ComponentImage'

const UserRegister = () => {
  return (
    <div className='bg-[#ccc4bb] flex justify-around'>
      <ComponentImage image={can} styles={'flex items-end pt-[18.3rem] ml-8'} />
      <UserFormLogin />
    </div>
  )
}

export default UserRegister
