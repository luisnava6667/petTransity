
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import name from '@/assets/name.svg'
import mail from '@/assets/mail.svg'
import lock from '@/assets/lock.svg'
import Image from 'next/image'

const Form = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      password2: '',
      direccion: '',
      piso: '',
      unidad: '',
      codigoPostal: '',
      localidad: '',
      hogar: '',
      ambientes: '',
      patio_jardin: '',
      mascotas: '',
      desc_mascotas: '',
      estado_domicilio: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Formato de email invalido')
        .required('email requerido'),
      password: Yup.string()
        .required('contraseña requerida')
        .min(8, 'ingresa 8 caracteres como mínimo')
        .matches(
          /[A-Z]/,
          'La contraseña debe contener al menos una letra mayúscula'
        )
        .matches(
          /[0-9]/,
          'La contraseña debe contener al menos un caracter numérico'
        ),
      password2: Yup.string()
        .oneOf(
          [Yup.ref('password'), undefined],
          'Las contraseñas deben coincidir'
        )
        .required('contraseña requerida'),
      nombre: Yup.string().required('nombre requerido'),
      apellido: Yup.string().required('apellido requerido'),
      localidad: Yup.string().required('Campo requerido'),
      direccion: Yup.string().required('direccion requerida'),
      hogar: Yup.string().required('unidad requerida'),
      ambientes: Yup.number().required('unidad requerida'),
      patio_jardin: Yup.boolean().required('unidad requerida'),
      mascotas: Yup.boolean().required('unidad requerida'),
      desc_mascotas: Yup.string().required('unidad requerida'),
      estado_domicilio: Yup.string().required('unidad requerida')
    }),
    onSubmit: async (values) => {
      console.log(values)
try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/usuarios`, values)
  console.log(res.data)
} catch (error) {
  console.log(error);
}
    //   axios
    //     .post(`${process.env.NEXT_PUBLIC_URL}/usuarios`, values)
    //     .then((res) => {
    //       console.log(res.data)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    }
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return (
    <div className='flex flex-col items-center max-h-screen  overflow-y-auto bg-[#CCC4BB] pb-5'>
      <p className='text-6xl font-bold text-[#6F4C48] mb-10'>Usuario</p>

      <form
        className='bg-[#C1A88D] px-20 pt-5 space-y-6 pb-10 rounded-3xl '
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}>
        <p className='pb-10 underline underline-offset-2 text-[#6F4C48] text-2xl font-medium'>
          {' '}
          Cree su cuenta de PetTransity
        </p>
        <div className=''>
          <div className='flex gap-1 my-1'>
            <Image alt='icono de etiqueta nombre' src={name} />
            <label
              htmlFor='nombre'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Nombre <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='nombre'
              name='nombre'
              onChange={handleChange}
              onBlur={handleBlur}
              type='name'
              required
              placeholder='Nombre'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.nombre && errors.nombre
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.nombre && errors.nombre && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.nombre}
              </div>
            )}
          </div>
        </div>
        <div className=''>
          <div className='flex gap-1 my-1'>
            <Image alt='icono de etiqueta apellido' src={name} />
            <label
              htmlFor='apellido'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Apellido <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2 w-full'>
            <input
              id='apellido'
              name='apellido'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Apellido'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.apellido && errors.apellido
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.apellido && errors.apellido && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.apellido}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta email' src={mail} />
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Correo <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              type='email'
              placeholder='Correo'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.email && errors.email
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.email && errors.email && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta ingrese contraseña' src={lock} />
              <label
                htmlFor='password'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Contraseña <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              placeholder='**********'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.password && errors.password
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.password && errors.password && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.password}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta reingrese contraseña' src={lock} />
              <label
                htmlFor='password2'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Reingrese contraseña <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='password2'
              name='password2'
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              placeholder='**********'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.password2 && errors.password2
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.password2 && errors.password2 && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.password2}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta direccion del refugio' src={name} />
              <label
                htmlFor='direccion'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Dirección <span className='text-red-600'>*</span>
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='direccion'
              name='direccion'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Dirección'
              required
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.direccion && errors.direccion
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.direccion && errors.direccion && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.direccion}
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-6'>
          <div>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta piso' src={name} />
              <label
                htmlFor='piso'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Piso <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='piso'
                name='piso'
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                required
                placeholder='Piso'
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.piso && errors.piso
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.piso && errors.piso && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.piso}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className='flex gap-1  my-3'>
              <Image alt='icono de etiqueta unidad' src={name} />
              <label
                htmlFor='unidad'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Unidad <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='unidad'
                name='unidad'
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                required
                placeholder='Unidad'
                className={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.unidad && errors.unidad
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.unidad && errors.unidad && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                  {errors.unidad}
                </div>
              )}
            </div>
          </div>
        </div>
        {/*  <div>
          <div className="flex gap-1  my-3">
            <Image alt="icono de etiqueta provincia" src={name} />
            <label
              htmlFor="provincia"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Provincia <span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2">
            <input
              id="provincia"
              name="provincia"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              required
              value="CABA"
              placeholder="CABA"
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.provincia && errors.provincia
                  ? "ring-red-500  focus:ring-red-500"
                  : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.provincia && errors.provincia && (
              <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                {errors.provincia}
              </div>
            )}
          </div>
        </div> */}
        {/*   <div>
          <div className="flex gap-1  my-3">
            <Image alt="icono de etiqueta comuna" src={name} />
            <label
              htmlFor="departamento"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Comuna <span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2">
            <input
              id="departamento"
              name="departamento"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              required
              placeholder="Comuna"
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.departamento && errors.departamento
                  ? "ring-red-500  focus:ring-red-500"
                  : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.departamento && errors.departamento && (
              <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                {errors.departamento}
              </div>
            )}
          </div>
        </div> */}
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta barrio' src={name} />
            <label
              htmlFor='localidad'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Barrio <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='localidad'
              name='localidad'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Barrio'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.localidad && errors.localidad
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.localidad && errors.localidad && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.localidad}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta codigo postal' src={name} />
            <label
              htmlFor='codigoPostal'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Código Postal <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='codigoPostal'
              name='codigoPostal'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Código Postal'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.codigoPostal && errors.codigoPostal
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.codigoPostal && errors.codigoPostal && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.codigoPostal}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta codigo postal' src={name} />
            <label
              htmlFor='hogar'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Tipo de hogar <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='hogar'
              name='hogar'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Código Postal'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.hogar && errors.hogar
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.hogar && errors.hogar && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.hogar}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='icono de etiqueta codigo postal' src={name} />
            <label
              htmlFor='ambientes'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Cantidad de ambientes <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='ambientes'
              name='ambientes'
              onChange={handleChange}
              onBlur={handleBlur}
              type='number'
              required
              placeholder='Cantidad de ambientes'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.ambientes && errors.ambientes
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.ambientes && errors.ambientes && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.ambientes}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='' src={name} />
            <label
              htmlFor='patio_jardin'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              ¿Posee patio/jardín? <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              name='patio_jardin'
              id='patio_jardin'
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.patio_jardin && errors.patio_jardin
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option></option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
            {touched.patio_jardin && errors.patio_jardin && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.patio_jardin}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='' src={name} />
            <label
              htmlFor='mascotas'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              ¿Posee mascotas? <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <select
              name='mascotas'
              id='mascotas'
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.mascotas && errors.mascotas
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
              <option></option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
            {touched.mascotas && errors.mascotas && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.mascotas}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='' src={name} />
            <label
              htmlFor='desc_mascotas'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Descripción de su mascota
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='desc_mascotas'
              name='desc_mascotas'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Ejemplo: su personalidad'
              className={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.desc_mascotas && errors.desc_mascotas
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.desc_mascotas && errors.desc_mascotas && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.desc_mascotas}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className='flex gap-1  my-3'>
            <Image alt='' src={name} />
            <label
              htmlFor='estado_domicilio'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Estado del domicilio <span className='text-red-600'>*</span>
            </label>
          </div>
          <div className='mt-2'>
            <input
              id='estado_domicilio'
              name='estado_domicilio'
              onChange={handleChange}
              onBlur={handleBlur}
              type='text'
              required
              placeholder='Ejemplo: Bueno'
              className={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                touched.estado_domicilio && errors.estado_domicilio
                  ? 'ring-red-500  focus:ring-red-500'
                  : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
              } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {touched.estado_domicilio && errors.estado_domicilio && (
              <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm'>
                {errors.estado_domicilio}
              </div>
            )}
          </div>
        </div>

        <div className='w-[31.5rem] flex justify-end items-center pt-10'>
          <button
            type='submit'
            className='flex mt-4 w-56 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
