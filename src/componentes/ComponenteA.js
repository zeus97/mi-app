import React, { useState } from 'react'
import { Contacto } from '../models/Contacto.class'
import ComponenteB from './ComponenteB'
import '../stylesheets/ComponenteA.css'

function ComponenteA() {

    const [conectado, setConectado] = useState(false);

    const cambiarSesion = () => {
        setConectado(!conectado);
    }

    const nuevoContacto = new Contacto('Juan', 'Lopez', 'juanl89@gmail.com', conectado);

  return (
    <div className='lista-usuarios'>
        <ComponenteB
        contacto = {nuevoContacto} 
        sesion ={conectado}
        cambiarSesion= {cambiarSesion}
        />
    </div>
  )
}



export default ComponenteA
