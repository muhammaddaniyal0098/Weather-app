const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '836a02031cmsh69bc940a6c4bb38p1d853bjsn85f1125480d3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
        city: 'ghakhar'
    }
};
const getweather = (city) =>{

    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {



        console.log(response)
        
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        cloud_pct.innerHTML = response.cloud_pct
        humidity.innerHTML = response.humidity
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}


submit.addEventListener(`click`, (e) =>{
    e.preventDefault()
    getweather(city.value)
}) 
getweather("Pakistan")
