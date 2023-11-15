const btn = document.getElementById("button")
let name_ = document.querySelector("#citySearch")
let temp_ = document.querySelector("#tempSearch")
let wind_ = document.querySelector("#windSearch")
let humidity_ = document.querySelector("#humiditySearch")

btn.addEventListener("click", function(){
  const searchResult = document.querySelector("#search").value

  const url = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q="+ searchResult +",US&appid=d296f93db7d79c41ef8a6d563f1b4432"
  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    name_.innerHTML = data.city.name
    //wind_.innerHTML = data.main.humidity
    //humidity_.innerHTML= data.main.humidity
    //figured out you had to use the array it was in to get the right properties...
    temp_.innerHTML= data.list[0].main.temp
    
  })
  console.log(url)
  console.log(searchResult)
})




//current temp
//current wind
//current humidity

//function fetchResults() {
   // fetch(url)
   // .then(response)
   // .then()
  //  .catch
//}
//fetchResults();