import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/Contacto.class'
import '../stylesheets/ComponenteB.css'

function ComponenteB({contacto, cambiarSesion}) {

  return (
    <div className='contaco-usuario'>  
        <h3>Nombre: {contacto.nombre}</h3>
        <h3>Apellido: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
        <h3>Contacto: {contacto.conectado ? 'En linea' : 'No disponible'}</h3>
        <button className={contacto.conectado ? 'boton-sesion desconectar' : 'boton-sesion conectar'}
        onClick={cambiarSesion}>{contacto.conectado ? 'Desconectar' : 'Conectar'}</button>

    </div>
  )
}

ComponenteB.propTypes = {
    contacto : PropTypes.instanceOf(Contacto),
    sesion : PropTypes.bool
}

export default ComponenteB
