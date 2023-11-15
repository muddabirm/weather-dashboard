const btn = document.getElementById("button")

btn.addEventListener("click", function(){
  const searchResult = document.querySelector("#search").value

  const url = "https://api.openweathermap.org/data/2.5/forecast?q="+ searchResult +",US&appid=d296f93db7d79c41ef8a6d563f1b4432"
  fetch(url)
  console.log(url)
  console.log(searchResult)
})




//function fetchResults() {
   // fetch(url)
   // .then(response)
   // .then()
  //  .catch
//}
//fetchResults();