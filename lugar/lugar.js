const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=eaf4248a3ed224ace9517c8ee9b1edd2&query=${encodeUrl}`
            //baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Caracas',
            //headers: { 'x-rapidapi-key': '8d7bcb11eamsh1e6004e2dfb217fp1e5f7ajsn66d32ec50e18' }
    });

    const resp = await instance.get();

    if (resp.data.location.lentgh === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}