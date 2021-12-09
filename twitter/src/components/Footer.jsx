import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <div className=' footer  bg-dark justify-content-end '>
            <div className='row justify-content-between '>
                <div className='col-1 text-light m-2'>Acerca de</div>
                <div className='col-1 text-light'>Centro de ayuda</div>
                <div className='col-1 text-light'>Política de Privacidad</div>
                <div className='col-1 text-light'>Política de cookies</div>
                <div className='col-1 text-light'>Información de anuncios</div>
                <div className='col-1 text-light'>Empleos</div>
                <div className='col-1 text-light'>Publicidad</div>
                <div className='col-1 text-light'>Marketing</div>
            </div>
            <div className='row justify-content-between'>
               
                <div className='col-1 text-light m-2'>Twitter para empresas</div>
                <div className='col-1 text-light'>Desarrolladores</div>
                <div className='col-1 text-light'>Guía</div>
                <div className='col-1 text-light'>Configuración</div>
                <div className='col-1 text-light'>© 2021 Twitter, Inc.</div>
              

            </div>

        </div>
    )
}
export default Footer;