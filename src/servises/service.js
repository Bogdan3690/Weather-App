import axios from "axios"

const API_KEY = "8d8735d57fddc1da2080482002a9692c"

export const fetchWeather = (city) => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
        }
    })
}
'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units={metric}'