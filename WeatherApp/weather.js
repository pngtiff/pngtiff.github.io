let search = document.querySelector('#search'),
    wrapper = document.querySelector('#mainWrapper');

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

/**
 * Function call the API weather
 * 
 * @param {String} city search bar value, entered by user
 */
const weatherShow = function (city) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5df5d6fb37766078e5055bbfbca1c7a1&units=metric`);
    
    xhr.addEventListener('readystatechange', function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let weather = JSON.parse(xhr.response);
            let weatherData = weather.list;

            wrapper.innerHTML = '';
           
            for(let i=0; i<weatherData.length; i+=8) {
                let container = document.createElement('div')
                let temp = document.createElement('h3'),
                    tempFah = document.createElement('p');
                let desc = document.createElement('p');
                let time = desc.cloneNode();

                let icon = document.createElement('img');
                icon.classList.add('icons');
                icon.src = `./icons/${weatherData[i].weather[0].icon}.png`;

                let tempData = `${Math.round(weatherData[i].main.temp*10)/10}°C`,
                    fahrenheit = (weatherData[i].main.temp * 9/5) + 32,
                    fahrenheitText = `${Math.round(fahrenheit*10)/10}°F`,
                    descData = `${weatherData[i].weather[0].description}`,
                    timeData = new Date(weatherData[i].dt *1000);
                
                let weekday = days[timeData.getDay()];
            
                time.textContent = (weekday);
                temp.textContent = (tempData);
                tempFah.textContent = (fahrenheitText);
                desc.textContent = (descData);

                
                container.appendChild(time);
                container.appendChild(icon);
                container.appendChild(temp);
                container.appendChild(tempFah);
                container.appendChild(desc);
    
                wrapper.appendChild(container);
            }

            wrapper.firstElementChild.classList.add('today');

            let today = document.querySelector('.today');

            let cityName = document.createElement('h2');
            cityName.textContent = weather.city.name;
            today.insertBefore(cityName, today.firstElementChild);

            let windData = `${weatherData[0].wind.speed} m/s`,
                pressureData = `${weatherData[0].main.pressure} hPa`,
                humidityData = `${weatherData[0].main.humidity}%`,
                cloudData = `${weatherData[0].clouds.all}%`;
                
            let details = document.createElement('span');
            let details2 = details.cloneNode();

            details.textContent = (`wind : ${windData} | pressure : ${pressureData}`);
            details2.textContent = (`humidity : ${humidityData} | clouds : ${cloudData}`);

            today.appendChild(details);
            today.appendChild(details2);

        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            wrapper.innerHTML = '';
            let error = document.createElement('div');
            error.classList.add('error');
            error.textContent = (`${xhr.status} - ${xhr.statusText}`);
            wrapper.appendChild(error);
        }
    });
    xhr.send(null);
}


search.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {  
        weatherShow(e.target.value);
    }
})
