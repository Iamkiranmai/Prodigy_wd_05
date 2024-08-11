// script.js

document.getElementById('getWeatherBtn').addEventListener('click', async function() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = 'd4416731b3574700a9b101649241108';  // Your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message || "City not found!");
            return;
        }

        const cityName = data.location.name;
        const temperature = data.current.temp_c;
        const conditions = data.current.condition.text;
        const icon = data.current.condition.icon;

        document.getElementById("cityName").innerText = cityName;
        document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
        document.getElementById("conditions").innerText = `Conditions: ${conditions}`;
        document.getElementById("weatherIcon").src = `https:${icon}`;
        document.getElementById("weatherIcon").alt = conditions;

        document.getElementById("weatherOutput").style.display = "block";  // Show the weather output
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert("An error occurred while fetching weather data.");
    }
});
