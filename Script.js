async function fetchWeatherData(cityName){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=466c38de8751406baded98a9f451b33e `;
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)

}

// demo()

function fetchCity(){
    let cityName= document.getElementById("city_name") 
    if(cityName.value===""){
        alert("Enter a city name");
    }
    else{
        fetchWeatherData(cityName.value);
        cityName.value=""
    }

}