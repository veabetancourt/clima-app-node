
const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat }&lon=${lng}&appid=b9ead1ac9930d773fb8812e27684f53b&units =metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}