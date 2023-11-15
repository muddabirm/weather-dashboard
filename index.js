const btn = document.getElementById("button")
let name_ = document.querySelector("#citySearch")
let temp_ = document.querySelector("#tempSearch")
let wind_ = document.querySelector("#windSearch")
let humidity_ = document.querySelector("#humiditySearch")
let saved = document.querySelector("#saved")

btn.addEventListener("click", function(){
  const searchResult = document.querySelector("#search").value
  //trying to impliment the local storage
  const url = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q="+ searchResult +",US&appid=d296f93db7d79c41ef8a6d563f1b4432"
  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    name_.innerHTML = data.city.name
    wind_.innerHTML = "speed: " + data.list[0].wind.speed
    humidity_.innerHTML= "humidity: " + data.list[0].main.humidity + " %"
    //figured out you had to use the array it was in to get the right properties...
    temp_.innerHTML= "temp: " + data.list[0].main.temp + " F"
    
  })
  localStorage.setItem("City", searchResult)
   saved.innerHTML = localStorage.getItem("City")
})




//current temp
//current wind
//current humidity

//function fetchResults() {
   // fetch(url)
   // .then(response)
   // .then()
 