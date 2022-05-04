import React from 'react';
import useForm from '../hooks/useForm';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Contacto = () => {

  const {values, handleInputChange, resetForm} = useForm({
      nombre: '',
      dni: '',
      email: '',
      telf: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    }

  return (
    <div>
            <h2 className='my-4'>Contactenos</h2><br/>

            <form onSubmit= {handleSubmit}>
            <TextField           
            fullWidth sx={{ m: 1, width: '50%' }}
             type={'text'} 
             label="Nombre y Apellido" 
             value={values.nombre} 
             name="nombre"
             onChange= {handleInputChange}                 
             placeholder='Nombre y Apellido'
              color="primary" />

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'text'} 
            label="DNI" 
            value={values.dni} 
            name="dni"
            onChange={handleInputChange} 
             placeholder='DNI' 
             color="primary" />

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'email'} 
            label="Correo Electronico" 
            value={values.email}
            name="email" 
            onChange={handleInputChange}
            placeholder='Email' 
            color="primary"/>

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'tel'} 
            label="Telefono" 
            name="telf"
            value={values.telf} 
            onChange={handleInputChange}
            placeholder='Telefono' 
            color="primary" /><br/>

        { values.telf && values.nombre && values.email && values.dni? 
            <Button className='mx-3 my-4' variant="contained" type='submit' endIcon={<SendIcon />}>Enviar</Button>   
            :<h5>Complete campos</h5> 
          
        }

            
            <Button className='mx-3 my-4' variant="outlined"  color="success" onClick={resetForm} startIcon={<DeleteIcon />}>Vaciar</Button> 
            </form> 
        </div>
  )
}

export default Contacto