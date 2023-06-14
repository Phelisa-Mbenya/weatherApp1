function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}${hours}:${minutes}`;
}
function formatDate(timestamp){
  let date= new Date (timeStamp* 1000);
  let days= ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  return day[days];
}

function displayForecast(){
let forecast= response.data.daily;


let forecastElement= document.querySelector(#"forecast");
let days= ["Thurs","Fri","Sat","Sun"];

let forecastHTML=`<div class="row">`;
forecast.forEach(function(forecastday, index){
forcastHTML=forecastHTML+`
if (index < 6){
}
                <div class="col-2">
                <div class="weather-forecast-date">{forecastDay.date}${formatDay(forecastDay.dt)}</div>${index}
                  <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.${forecast.weather[0].icon}.png"
                  alt="clear"width="42"
                />
                <div class="weather-forecast-temperatures">
                   <span class="weather-forecast-temperatures-max">${math.round(forecastDay.temp.max)}°</span>
                   <span class="weather-forecast-temperatures-min">${math.round(forecastDay.temp.min)}°</span>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>`;
        }
       
    function getForecast(coordinates){
      console.log(coordinates);
      let apiKey= "692f331c4fb9015b678fb92ab69c8d7f";
      let apiUrl= `https://api.openweathermap.org/data/3.0/onecall?lat={coordinates.lat}&lon={coordinates.lon}&appid={API key}&units=metric`;
      console.log(apiUrl);
      axios.get(apiUrl).then(displayForecast);
    }
    
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  getForecast(response.data.coord);
}
function search(city) {
  let apiKey = "692f331c4fb9015b678fb92ab69c8d7f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("New York");
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);