import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='text-white py-4 bg-danger navbar navbar-fixed-bottom'>
        <footer className='text-white py-4 bg-danger navbar navbar-fixed-bottom'>
            <div className='container'>
                <nav className='row'>
                   <Link to='/' className='text-decoration-none text-reset col-12 col-md-3 d-flex align-items-center justify-content-center'>
                    <h2>Carniceria</h2>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'><h5>Nosotros</h5></li>
                        <p>Somos una reconocida empresa de origen familiar, 
                            con más de 45 años abasteciendo al mercado nacional. </p>
                        <li>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justyfy-content-center'></Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'><h5>Contacto</h5></li>
                        <p>+56 955627896</p><br/>
                        <p>+56 225627896</p><br/>
                        <p>email.@gmail.com</p><br/>
                        <li className='d-flex justify-content-center ' >
                        <i className="bi bi-facebook mx-3 my-2 "/>
                        <i className="bi bi-whatsapp mx-3 my-2"/>
                        <i className="bi bi-instagram mx-3 my-2"/>
                        <i className="bi bi-twitter mx-3 my-2"/>
                        </li>
                        </ul>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weigth-bold mb-2'><h5>Ubicacion</h5></li>
                        <p>Avenida Ecuador 3866</p>
                        <p>Estacion Central</p>
                        <p>Santiago</p>
                        <p>Chile</p>
                    </ul>
                    <div className='container my-0'>
                      <p className='text-center'>&copy; Copyright <strong><span>Carniceria</span></strong>. All Rights Reserved</p> 
                    </div> 
                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer