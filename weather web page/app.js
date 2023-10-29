const apiKey="e56ba5d6651a3e16363b13ae0f44c869";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector("#searchbox");
const search=document.querySelector("#search");
const result=document.querySelector("#result");

result.style.display="none";


async function checkWeather(city){
    const response=await fetch(url+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector("#humidity").innerHTML=data.main.humidity+"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+" km/h";
}

search.addEventListener("click",()=>{
    result.style.display="block";
    checkWeather(city.value);
})