import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <footer className='text-white py-4 bg-danger'>
            <div className='container'>
                <nav className='row'>
                   <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                    <img src='https://picsum.photos/200' alt='Logo' className='mx-2' height='60'/>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'>Nosotros</li>
                        <li>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justyfy-content-center'></Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'>Contacto</li>
                        <li>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justyfy-content-center'></Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'>Ubicacion</li>
                        <li className='d-flex justify-content-between' >
                        <i className="bi bi-facebook"/>
                        <i className="bi bi-whatsapp"/>
                        <i className="bi bi-instagram"/>
                        <i className="bi bi-facebook"/>
                        <i className="bi bi-whatsapp"/>
                        <i className="bi bi-instagram"/>
                        </li>
                    </ul>
                    <div className='container'>
                      <p className='text-center'>&copy; Copyright <strong><span>Carniceria</span></strong>. All Rights Reserved</p> 
                    </div> 
                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer