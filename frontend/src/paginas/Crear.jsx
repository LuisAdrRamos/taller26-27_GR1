import React, { useContext } from 'react'
import { Formulario } from '../componets/Formulario'
import AuthContext from '../context/AuthProvider'

const Crear = () => {
    const {auth} = useContext(AuthContext)
    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Agregar...</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite registrar un nuevo .....</p>
            {
                auth.rol === "veterinario" && 
                (
                    <>
                        <Formulario />
                    </>
                )
            }
        </div>
    )
}

export default Crear