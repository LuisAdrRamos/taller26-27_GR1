import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Formulario} from '../componets/Formulario'
import Mensaje from '../componets/Alertas/Mensaje'

const Actualizar = () => {
    const { id } = useParams()
    const [paciente, setPaciente] = useState({})
    const [mensaje, setMensaje] = useState({})

    useEffect(() => {
        const consultarPaciente = async () => {
            try {
                const token = localStorage.getItem('token')
                const url = `http://localhost:3000/api/paciente/${id}`
                const options = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
                const respuesta = await axios.get(url, options)
                setPaciente(respuesta.data.paciente)
            } catch (error) {
                setMensaje({ respuesta: error.response.data.msg, tipo: false })
            }
        }
        consultarPaciente()
    }, [])
    

    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Actualizar...</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite actualizar un nuevo .....</p>
            {
                Object.keys(paciente).length != 0 ?
                    (
                        <Formulario paciente={paciente}/>
                    )
                    :
                    (
                        Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
                    )
            }
            
        </div>
    )
}

export default Actualizar