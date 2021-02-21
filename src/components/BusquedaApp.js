import React, { useRef } from 'react'
import { agregarCiudad } from '../helpers/agregarCiudad';


export const BusquedaApp = React.memo(({ setCiudades }) => {
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        const nuevaCiudad = inputRef.current.value.trim();

        if(nuevaCiudad.length === 0) return ;

        setCiudades(ciudades => agregarCiudad(ciudades, nuevaCiudad));
        inputRef.current.value = '';

    }

    const inputRef = useRef();
       
    return (
          
        <form onSubmit={ handleSubmit }>
            <input className="form-control" type="text" placeholder="Buscar ciudad" 
                   ref={ inputRef } />
            <button className="btn btn-primary mt-5" type="submit">Buscar</button>
        </form>
                
    )
});