
const getWeather = () => {

    const city = document.getElementById('cityInput').value;
    const apiKey = 'e2665d732a56c9833ef91ab3188ad2bd'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const weatherInfo = document.getElementById('weatherInfo');

        const description = data.weather[0].description;
        const temparature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherInfo.innerHTML = `
            <p class="text-lg font-medium">Description: ${description}</p>
            <h4 class="text-2xl text-orange-500 font-bold">Temperature: ${temparature} &#8451;</h4>
            <p class="text-lg">Humidity: ${humidity}%</p>
            <p class="text-lg">Wind Speed: ${windSpeed} m/s</p>
        `;

        console.log(description,temparature,humadity, windSpeed);
        
        
    })
 .catch(error => {
    console.error("ops! Sorry Error", error)

 })    

}