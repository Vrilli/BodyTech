import React from 'react'
import { Input } from '@chakra-ui/react'
import Nabar from './Nabar'
import { Button } from 'react-bootstrap'
import "../styles/Busquedad.css"

const Busquedad = () => {
  
  return (
    <div className='busquedad'>
        <Nabar />
         <h2 className='busquedad-title'>Busca tu canción preferida</h2>
         <div className='busquedad-searchbox'>
         <Input type="text" variant='outline' className='busquedad-searchbox-input' placeholder='Busquedad' /> 
         <Button className='busquedad-searchbox-button' variant="outline-success" type='submit'>Buscar</Button>
         </div>
    </div>
  )
}

export default Busquedad