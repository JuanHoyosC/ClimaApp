import React, { useState } from 'react'
import '../css/climaApp.css';

import { BusquedaApp } from '../components/BusquedaApp';
import { InformacionClima } from '../components/InformacionClima';
import { Error } from '../components/Error';

export const ClimaApp = () => {

   const [ciudades, setCiudades] = useState([]);
   const [error, setError] = useState(false)

   console.log(ciudades)
    return (
        <div>
            { error  && <Error />}
            <h1 className="text-center mb-3 text-primary">ClimaApp</h1>
            <BusquedaApp setCiudades={ setCiudades } />
            <div className="row">
                { ciudades.map( ciudad => <InformacionClima key={ ciudad } ciudad={ ciudad } setCiudades={ setCiudades } setError={ setError }/> ) }
            </div>     
        </div>
    )
}
