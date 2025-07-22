async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("weatherResult");

  const apiKey = "*****************";

  if (city === "") {
    result.innerHTML = "❗ Please enter a city name.";
    return;
  }

  const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric" ;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡 Temp:</strong> ${data.main.temp} °C</p>
        <p><strong>☁ Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>🌬 Wind:</strong> ${data.wind.speed} m/s</p>
      `;
    } else {
      result.innerHTML = "❗ City not found. Please try again.";
    }
  } catch (error) {
    result.innerHTML = "⚠ Error fetching data. Try again later.";
  }
}
