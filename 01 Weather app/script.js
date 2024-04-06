//serach
const search =document.querySelector('#search');
const searchBtn =document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weatherImg');

const apiKey = 'dff2706213f56f196f685c92586f4efa';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        console.log(data.humidity);
        // console.log(data.speed);

        // city 
        document.querySelector('#city').innerHTML = data.name;
        //temp 
        document.querySelector('#temp').innerHTML = (data.main.temp +" °C");
        
        //jumidity
        document.querySelector('.humidity').innerHTML =(data.main.humidity + " %")
        //speed
        const speed = document.querySelector('.speed').innerHTML = (data.wind.speed + " Km/h");

        if(data.weather[0].main == 'Clouds'){
            weatherImg.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == 'Clear'){
            weatherImg.src = 'images/clear.png';
        }
        else if(data.weather[0].main == 'Rain'){
            weatherImg.src = 'images/rain.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherImg.src = 'images/drizzle.png';
        }
        else if(data.weather[0].main == 'Mist'){
            weatherImg.src = 'images/mist.png';
        }

        document.querySelector('.weather').style.display = 'block';

        
    } catch (error) {
        console.log(error)
    }
    
   
}
searchBtn.addEventListener('click',( )=> {
    checkWeather(search.value);
})
