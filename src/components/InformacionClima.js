import React, { useRef } from 'react'
import { capitalize } from '../helpers/capitalize';
import { eliminarCiudad } from '../helpers/eliminarCiudad';
import { useFetchClima } from '../hook/useFetchClima'

export const InformacionClima = ({ ciudad , setCiudades, setError }) => {

    const { data, loading, error } = useFetchClima( ciudad, setCiudades, setError );
    const dataClima = !!data && data;

    const card = useRef();

    const handleBorrar = () => {

        card.current.classList.remove('animate__animated', 'animate__zoomIn');
        
        card.current.classList.add('animate__animated', 'animate__zoomOut');
        setTimeout(() => {
            setCiudades(ciudades => [...eliminarCiudad(ciudades, ciudad)]);
        }, 300)
    }

    return (
        <>
            {
                !error &&
                    <div className="mt-3 col-3 animate__animated animate__zoomIn" ref={ card }>
                    { loading 
                        ?
                            
                            <div className="bg-secondary p-5 text-white text-center">
                                <i className="fas fa-circle-notch fa-spin fa-3x"></i>
                            </div>
                        : 
                            
                            <div className="p-2 alert bg-primary text-white">
                                <div className="d-flex justify-content-between">
                                    <h4>{ capitalize( ciudad.toLowerCase() ) }</h4>
                                    <button type="button" className="btn-close"  aria-label="Close" onClick={ handleBorrar }></button>
                                </div>
                                <img src={`http://openweathermap.org/img/w/${ dataClima.icon }.png`}></img>
                                <p className="mb-1">{ dataClima.desc }</p>
                                <p className="mb-1">Temperatura: { Math.round( dataClima.temp -273.1 ) } °C </p>
                                <p className="mb-1">Velocidad del viento: { Math.round( dataClima.velocidad * 3.6  )} km/h</p>
                                
                            </div>
                    }
                </div>

            }
        </>
    )
}
