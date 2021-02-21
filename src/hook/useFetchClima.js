import { useEffect, useState } from "react";
import { eliminarCiudad } from "../helpers/eliminarCiudad";
import { peticiones } from "../helpers/peticiones";

export const useFetchClima = ( lugar, setCiudades, setError ) => {

    const [climaApp, setClimaApp] = useState({data: [], loading: true, error: true});

    useEffect(async () => {

       const data = await peticiones( lugar );
       
       if(data.length === 0) {

            setClimaApp({ data: data[0], loading: false, error: true });
            setCiudades( ciudades => eliminarCiudad(ciudades, lugar));
            setError( true );

       }else{

            setClimaApp({ data: data[0], loading: false, error: null });
            setError( false );

       }
       
    }, [ lugar ])

    return climaApp;

}
