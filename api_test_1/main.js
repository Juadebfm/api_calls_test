const weatherContainer = document.getElementById('weatherContainer');

fetch('https://goweather.herokuapp.com/weather/Curitiba')
  .then(response => response.json())
  .then(data => {
    // Create elements for weather information
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = 'Temperature: ' + data.temperature;

    const windElement = document.createElement('p');
    windElement.textContent = 'Wind: ' + data.wind;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Description: ' + data.description;

    // Append weather elements to container
    weatherContainer.appendChild(temperatureElement);
    weatherContainer.appendChild(windElement);
    weatherContainer.appendChild(descriptionElement);

    // Create elements for forecast
    const forecastElement = document.createElement('div');
    forecastElement.textContent = 'Forecast:';

    // Iterate over forecast data
    data.forecast.forEach(day => {
      const dayElement = document.createElement('p');
      dayElement.textContent = 'Day: ' + day.day + ', Temperature: ' + day.temperature + ', Wind: ' + day.wind;
      forecastElement.appendChild(dayElement);
    });

    // Append forecast element to container
    weatherContainer.appendChild(forecastElement);
  })
  .catch(error => {
    console.error('Error:', error);
  });
