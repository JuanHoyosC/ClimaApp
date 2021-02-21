export const agregarCiudad = (ciudades, ciudad) => {
   
    if(ciudades.find( c => c.toLowerCase() === ciudad.toLowerCase() )) return ciudades;

    return [ciudad, ...ciudades];

}
