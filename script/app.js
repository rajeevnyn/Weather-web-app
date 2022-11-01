const cityForm=document.querySelector('form');
const details=document.querySelector('.details');
const card=document.querySelector('.card');
const updateUI=(data)=>{

    const cityDets=data.cityDets;
    const weather=data.weather;

    details.innerHTML=`<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span> </div>`;

};
const updateCity= async(city)=>{

    const cityDets= await getcity(city);
    const weather =await getweather(cityDets.Key);

    return {
        cityDets, weather
    };

};

cityForm.addEventListener('submit',e => {
e.preventDefault();
const city=cityForm.city.value.trim();
cityForm.reset();
updateCity(city)
.then(data =>{ updateUI(data)});

}); 