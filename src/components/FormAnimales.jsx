/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clienteAxios from '../config/clienteAxios'
import { useEffect, useState } from 'react'
import { config } from '../helpers/constantes'
import name from '../assets/name.svg'
import useRefugio from '../hooks/useRefugio'
import Spinner from './Spinner'
import InputForm from './InputForm'

const FormAnimales = () => {
  const [id, setId] = useState(null)
  const { submitAnimal } = useRefugio()
  const token = localStorage.getItem('token')
  const [cargando, setCargando] = useState(true)
  const [animalValues, setAnimalValues] = useState({
    especie: '',
    raza: '',
    nombre: '',
    edad: '',
    peso: '',
    tamaño: '',
    estado: '',
    image: '',
    personalidad: '',
    observaciones: '',
    salud: '',
    fecha_ingreso: ''
  })
  const params = useParams()
  const required = 'Este campo es requerido'

  const formik = useFormik({
    initialValues: animalValues,
    validationSchema: Yup.object({
      edad: Yup.number().required(required),
      tamaño: Yup.string().required(required),
      nombre: Yup.string().required(required),
      especie: Yup.string().required(required),
      peso: Yup.number().required(required),
      raza: Yup.string().required(required),
      personalidad: Yup.string().required(required),
      salud: Yup.string()
        .max(100, 'El campo no debe tener más de 100 caracteres')
        .required(required),
      image: Yup.string().required(required),
      fecha_ingreso: Yup.date().required(required),
      estado: Yup.boolean().required(required),
      observaciones: Yup.string().max(
        100,
        'El campo no debe tener más de 100 caracteres'
      )
    }),
    onSubmit: async (values) => {
      submitAnimal(values)
    }
  })
  useEffect(() => {
    const getAnimal = async () => {
      try {
        const { data } = await clienteAxios.get(
          `/animales/myPet/${params.id}`,
          config(token)
        )
        setId(params.id)
        formik.setValues(data)
        setCargando(false)
      } catch (error) {
        console.log(error)
      }
    }
    getAnimal()
  }, [params, token])
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik

  return cargando && params.id ? (
    <Spinner />
  ) : (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className='bg-[#C1A88D] mt-4 md:mt-0 px-8 mb-4 md:px-8 lg:px-20 md:pt-3 lg:pt-5 space-y-6 md:pb-8 md:mb-8 lg:pb-10 lg:mb-10 rounded-3xl '>
        <InputForm
          label='Nombre'
          name='nombre'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.nombre}
          placeholder='Nombre'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Especie'
          name='especie'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.especie}
          placeholder='Especie'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Raza'
          name='raza'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.raza}
          placeholder='Raza'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Peso'
          name='peso'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.peso}
          type='number'
          placeholder='Peso'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Edad'
          name='edad'
          type='number'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.edad}
          placeholder='Edad'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Tamaño'
          name='tamaño'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.tamaño}
          placeholder='Tamaño'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Personalidad'
          name='personalidad'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.personalidad}
          placeholder='Personalidad'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Personalidad'
          name='personalidad'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.personalidad}
          placeholder='Personalidad'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Fecha de ingreso'
          name='fecha_ingreso'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.fecha_ingreso}
          placeholder='Fecha de ingreso'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Estado de salud'
          name='salud'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.salud}
          placeholder='Estado de salud'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Observaciones'
          name='observaciones'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.observaciones}
          placeholder='Observaciones'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />
        <InputForm
          label='Imagen'
          name='image'
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={formik.values.image}
          placeholder='Imagen'
          touched={touched}
          errors={errors}
          nameSrc={name}
        />

        <div className=''>
          <div>
            <div className='flex gap-1  my-3'>
              <img alt='' src={name} />
              <label
                htmlFor='estado'
                className='block text-sm font-semibold leading-6 text-gray-900'>
                Estado <span className='text-red-600'>*</span>
              </label>
            </div>
            <div className='mt-2'>
              <select
                name='estado'
                id='estado'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formik.values.estado}
                required
                className={` rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.estado && errors.estado
                    ? 'ring-red-500  focus:ring-red-500'
                    : 'ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600'
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
                <option></option>
                <option value={true}>Disponible</option>
                <option value={false}>No disponible</option>
              </select>
              {touched.estado && errors.estado && (
                <div className='flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm justify-end'>
                  {errors.estado}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='md:w-[28rem]  lg:w-[31.5rem]  flex justify-end items-center lg:pt-10'>
          <button
            type='submit'
            className='flex mb-4 mt-4 md:w-48 font-bold lg:w-56 md:h-12 lg:h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl  leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
            {id ? 'Editar' : 'Registrar'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormAnimales
