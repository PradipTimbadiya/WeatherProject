const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const temp_val=document.getElementById('temp_val');

const getInfo=async(event)=>{
    event.preventDefault();
    
    let cityVal=cityName.value;
    if(cityVal === ""){
        city_name.innerText="enter a city name"
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e094ce30f0a9a22453a241a78447efb4`;
            const response=await fetch(url);
            const objData=await response.json();
            const arrData=[objData]
            
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_val.innerText=arrData[0].main.temp;
        }
        catch{
            city_name.innerText="enter a valid city name"   
        }
    }
}

submitBtn.addEventListener('click',getInfo)