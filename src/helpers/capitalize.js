export const capitalize = ( palabra ) => {

   return palabra.split(' ').map(a => a[0].toUpperCase() + a.substring(1, a.lenght)).join(' ')

}
