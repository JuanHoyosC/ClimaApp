export const peticiones = async ( lugar ) => {

    const API_KEY = 'b6311812bb4448531fb38dc208b6ab06';

    try {
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ lugar }&appid=${ API_KEY }&lang=es`)
        const data = await resp.json();
   
        if(data.cod === 200){

            const { weather, main, wind } = data;
            const { description, icon } = weather[0];
            return [{ temp: main?.temp, velocidad: wind?.speed, desc: description, icon }];


        }else {
            return [];
        }

    } catch (error) {
        console.log(error + ' dd')
    }
    
}
