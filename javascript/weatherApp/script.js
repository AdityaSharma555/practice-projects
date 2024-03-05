const apiKey = "61b6b3b5eb4e8d0002eca0d184f91c78";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon")

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/clouds.png";
    } 
    else if(data.weather[0].main == "clear") {
        weatherIcon.src = "./assets/clear.png";
    } 
    else if(data.weather[0].main == "drizzle") {
        weatherIcon.src = "./assets/drizzle.png";
    } 
    else if(data.weather[0].main == "humidity") {
        weatherIcon.src = "./assets/humidity.png";
    } 
    else if(data.weather[0].main == "mist") {
        weatherIcon.src = "./assets/mist.png";
    } 
    else if(data.weather[0].main == "rain") {
        weatherIcon.src = "./assets/rain.png";
    } 
    else if(data.weather[0].main == "search") {
        weatherIcon.src = "./assets/search.png";
    } 
    else if(data.weather[0].main == "snow") {
        weatherIcon.src = "./assets/snow.png";
    } 
    else if(data.weather[0].main == "wind") {
        weatherIcon.src = "./assets/wind.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})














