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

function displayForecast(){

let forecastElement= document.querySelector(#"forecast");
forecastElementinnerHTML=`<div class="row">
                <div class="col-2">
                  <div class="weather-forecast-date">
                  Thurs

                  <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="clear"width="36"
                />
                <div class="weather-forecast-temperatures">
                   <span class="weather-forecast-temperatures-max">
                  18°</span>
                   <span class="weather-forecast-temperatures-min">
                  12°</span>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>`;
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  displayForecast();

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
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

displayForecast();