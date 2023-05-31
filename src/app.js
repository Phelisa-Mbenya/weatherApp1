function formatDate(timestamp) {
  let date = newDate(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0$ {hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0$ {minutes}`;
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
function displayTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerhtml = math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  desscriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.main.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
function search(city) {
  let apiKey = "692f331c4fb9015b678fb92ab69c8d7f";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement);
}
axios.get(apiUrl).then(displayTemperature);
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
