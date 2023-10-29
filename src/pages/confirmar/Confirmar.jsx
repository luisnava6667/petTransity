
import clienteAxios from '@/app/config/clienteAxios'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export default function Page({ params }) {
  const { token } = params
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/confirm/${token}`
        await clienteAxios(url)
        setCuentaConfirmada(true)
      } catch (error) {
        setCuentaConfirmada(false)
      }
    }
    confirmarCuenta()
  }, [])

  return (
    <main className='bg-[#CCC4BB] h-screen p-10'>
      <div className='grid justify-center  justify-items-center gap-24'>
        <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {cuentaConfirmada && (
            <div className='text-center'>
              <h2>
                Confirma tu cuenta y comienza a administrar tu{' '}
                <span>Negocio</span>
              </h2>
              <p className='text-2xl font-bold'>Cuenta confirmada</p>
              <p className='text-xl'>Ahora puedes iniciar sesión</p>
              <button
                className='bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-5'
                onClick={() => push('/login')}>
                Iniciar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
