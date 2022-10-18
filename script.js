const textInput = document.querySelector("#text_input");
const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = `4c79247a2bef2e892367ab3247bc8d3a`;
const cityNameText = document.querySelector(`.city_name`);
const tempreture = document.querySelector(`.tempreture`);
const description = document.querySelector(`.description`);
const minmax = document.querySelector(`.minmax`)
const startCityName = `ankara`

const startWeather = (startCityName) => {
    fetch(`${url+startCityName}&appid=${apiKey}&units=metric&lang=tr`)
    .then(response => response.json())
    .then(result=> renderWeather(result)) 
}

startWeather(startCityName);
textInput.addEventListener('keypress', function (e) {
    if (e.keyCode == "13") {
        getWeather(textInput.value);
    }
});

const getWeather = (cityName) => {
    fetch(`${url+cityName}&appid=${apiKey}&units=metric&lang=tr`)
    .then(response => response.json())
    .then(result=> renderWeather(result)) 
}


const renderWeather = (data)=>{
    console.log(data);
    cityNameText.innerText = `${data.name}`;
    tempreture.innerText = `${Math.round(data.main.temp)}°C`;
    description.innerText = `${data.weather[0].main}`;
    minmax.innerText = `${Math.round(data.main.temp_min)}°C/${Math.round(data.main.temp_max)}°C`
};




