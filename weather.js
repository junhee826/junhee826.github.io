const weather = document.getElementById("weather");
const currentlocation = document.querySelector("#weather h4:first-child");
const currentweather = document.querySelector("#weather h4:last-child");
const api_key = "daf9707081baf5f51caee46094518038";

function success(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      currentlocation.innerText = data.name;
      currentweather.innerText = `${data.main.temp}'C, ${data.weather[0].description}`;
    });
  currentlocation.innerText = "location";
  currentweather.innerText = "weather";
}
function error() {
  weather.innerText = "sorry, can't receive your location";
}
navigator.geolocation.getCurrentPosition(success, error);
