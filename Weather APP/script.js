console.log("hello");

const API_KEY="de9cad99c86aea6a4f717d3401883657";

function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} C`
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{
    let city="Mumbai";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:->",data);
    
    renderWeatherInfo(data);
} 
catch(err){
    console.log("Error" ,err);
}
}

async function getCustomWeatherDetails(){
    try{
        let latitude=17.6333;
        let longitude=18.3333;

        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data=await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Errror Found", err);
    }
}


function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab!==currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
        }
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else{
        console.log("No geolLocation Support");
    }
}

function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}
