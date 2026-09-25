let unit="us";

async function getWeather(city = "london"){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=JX2PCMATU677XCFTWAVJRSXDX`)
    console.log("fetched");
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}


getWeather();

function displayWeather(data)
{
    let output = document.querySelector("#output_data");
    let html = `<div>${data.address}</div>
    <div>${data.currentConditions.temp}°</div>
    <div>Feels like ${data.currentConditions.feelslike}°</div>
    <div>${data.currentConditions.conditions}</div>`;
    output.innerHTML = html;
    
}


let submit = document.querySelector("#submit");
submit.addEventListener("click", (event) => {
    let city = document.querySelector("#input_location").value;
    getWeather(city);
})

let convert = document.querySelector('#convert');

convert.addEventListener("click", (event) => {
    unit = (unit=="us"?"metric":"us");
    switch(unit){
        case "us": convert.textContent = "Convert to Celsius";
            break;
        case "metric": convert.textContent = "Convert to Fahrenheit";
            break;

    }
    let city = document.querySelector("#input_location").value;
    console.log(city);
    getWeather(city);
})