// app_id : 5df5d6fb37766078e5055bbfbca1c7a1
// https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=5df5d6fb37766078e5055bbfbca1c7a1&units=metric
// https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=5df5d6fb37766078e5055bbfbca1c7a1&units=metric


let cityList;

const loadCities = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'city.list.json');
    xhr.onload = () => {
        if(xhr.status == 200) {
            cityList = JSON.parse(xhr.responseText).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        }
    }
    xhr.send(null);
}

loadCities();


let searchBar = document.querySelector('#searchBar'),
    wrapper = document.querySelector('#mainWrapper');


let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let resultsDiv = document.querySelector('#results');


let count = -1;

const searchByID = function (cityID) {
    count = -1;
    resultsDiv.innerHTML = '';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=5df5d6fb37766078e5055bbfbca1c7a1&units=metric`);
    
    xhr.addEventListener('readystatechange', function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let weather = JSON.parse(xhr.response);
            let weatherData = weather.list;
            // console.log(weather)
           
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
            cityName.textContent = `${weather.city.name}, ${weather.city.country}`;
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
            // error.textContent = (`${xhr.status} - ${xhr.statusText}`);
            error.textContent = (`Enter a proper or full city name`);
            wrapper.appendChild(error);
        }
    });
    xhr.send(null);
}


let searchResults;

const search = function (inputValue) {
    let droplist = document.createElement('div');
    droplist.setAttribute('id', 'droplist');
            
    searchResults = [];
    for(let i=0; i<cityList.length; i++) {
        let name = cityList[i].name;
        let state = cityList[i].state;
        let country = cityList[i].country;
        let cityID = cityList[i].id;
        if(name.toLowerCase().indexOf(`${inputValue.toLowerCase()}`)==0) {
            if(searchResults.length<10) {
                searchResults.push({name, state, country, cityID});
                // searchResults.push(`${name}|${state}|${country}|${cityID}`);
            }
        }
    }

    if(typeof searchResults[0] == 'undefined') {
        return;
    } 
    for(let j=0; j<searchResults.length; j++) {
        // result = searchResults[j].split('|');

        let div = document.createElement('div');
        div.textContent = `${searchResults[j].name} - ${searchResults[j].state} - ${searchResults[j].country}`;
        droplist.appendChild(div);


        div.addEventListener('click', function(e) {
            searchBar.value = searchResults[j].name;
            let selectedID = searchResults[j].cityID;
            searchByID(selectedID); // searches by city ID when clicking from the dropdown list
        })

        div.addEventListener('mouseover', function(e) {
            let resultsList = Array.from(droplist.children);
            for(let j=0; j<resultsList.length; j++) {
                if(resultsList[j].classList.contains('highlighted')) {
                    resultsList[j].classList.remove('highlighted');
                }
            }
            e.target.classList.add('highlighted');
            count = resultsList.indexOf(e.target);
        })
        
    }
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(droplist);
    return searchResults;
}
    


searchBar.addEventListener('keyup', function(e) {
    let results = document.querySelectorAll('#droplist div');

    if(e.target.value == '') {
        resultsDiv.innerHTML = '';
        count = -1;
    }
    
    else if(e.key == 'ArrowDown') {
        if(count == results.length-1) {
            results[count].classList.remove('highlighted')
            count = -1;
        }else if(count > -1) {
            results[count].classList.remove('highlighted')
        } 
        results[++count].classList.add('highlighted');
        // e.target.value = (results[count].textContent.split(' - '))[0];
        e.target.value = searchResults[count].name;
        searchBar.value = e.target.value;
    } else if(e.key == 'ArrowUp') {
        let results = document.querySelectorAll('#droplist div');
        if(count == 0) {
            results[count].classList.remove('highlighted')
            count = results.length-1;
        }else if(count >= -1) {
            if(count != -1){
                results[count--].classList.remove('highlighted')
            }else {
                count= results.length-1;
            }
        }
        results[count].classList.add('highlighted');
        // e.target.value = (results[count].textContent.split(' - '))[0];
        e.target.value = searchResults[count].name;
        searchBar.value = e.target.value;
    }
    else if(e.key === 'Enter') {
        let cityIdFromName;
        if(count !== -1 && results[count].classList.contains('highlighted') && searchBar.value.toLowerCase() === searchResults[count].name.toLowerCase()) {
            searchByID(searchResults[count].cityID)
        } else {
            for(let j=0; j<searchResults.length; j++) {
                if(searchBar.value.toLowerCase() === searchResults[j].name.toLowerCase()) {
                    cityIdFromName = searchResults[0].cityID;
                    // console.log(cityIdFromName);
                }
            }
            searchByID(cityIdFromName)
        }
    } else {
        count = -1;
        search(e.target.value);
    }
})
