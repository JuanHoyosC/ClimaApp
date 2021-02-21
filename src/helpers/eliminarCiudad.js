export const eliminarCiudad = (ciudades, ciudad) => {
    
    ciudades.splice(ciudades.findIndex(c => c === ciudad), 1);

    return ciudades;
}
