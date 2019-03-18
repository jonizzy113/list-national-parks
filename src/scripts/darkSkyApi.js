
const getWeatherApi = (latitude,longitude) => {
    return fetch(`https://api.darksky.net/forecast/d0e0272bc4f675b51bfecd1c9a1a1dc3/${latitude},${longitude}`)
    .then(weather => weather.json())
    .then (parsedWeather => {
        getWeather(parsedWeather)
    })
}