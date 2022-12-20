const API_key = `3f55e01f29a62f895b008cb99287aa19`;

// const imgUrl = `http://openweathermap.org/img/wn/${}@2x.png`;

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  weather.innerHTML = `<div>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
  </div>
  <div>
    <h2>${data.main.temp} °C</h2>
    <h3>${data.weather[0].main}</h3>
  </div>
</div>`;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather(search.value);
});
