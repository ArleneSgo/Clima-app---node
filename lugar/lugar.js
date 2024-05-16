const axios = require('axios');
const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);
    // const instance = axios.create({
    //     baseURL: `https://open-weather13.p.rapidapi.com/city/${encodedUrl}`,
    //     headers: { 'X-RapidAPI-Key': 'cfc78e9071msh532adff0f2fa65cp13b8e8jsn5a7f26ee6b69' }
    // });
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=32f843d833c38373032f825c4a92418a&units=metric`)
    if (resp.data.length === 0) {
        throw Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon
    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}