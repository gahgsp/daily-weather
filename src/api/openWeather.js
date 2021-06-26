import axios from 'axios';

const CORS_WRAPPER = 'https://cors-anywhere.herokuapp.com/';

export default axios.create({
  baseURL: `${CORS_WRAPPER}https://samples.openweathermap.org/data/2.5`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
