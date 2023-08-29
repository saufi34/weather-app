//select class
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


apik = "3045dd712ffe6e702e3245525ac7fa38"

//untuk convert farenheight ke celcius
function convertion(val){
return (val - 273).toFixed(2)
}

// add listener bila button kena click
btn.addEventListener('click', function(){

  //ambil data dari api 
  //inputval.value = inout yang user amsukkan dalam inputval / city
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+
  '&appid='+apik)

  //convert data ke json supaya boleh dibaca dan display
  .then(res => res.json())

  //lepas convert ke json, ambil data as data dalam funtion untuk guna dan display
  .then(data => {

//wakilkan data yang perlu dalam satu nama
//tengok dalam console apa keyword
  console.log(data);
  //guna syntax begini supaya tiada masalah untuk ambil data dari nombor
  var nameval = data['name']
  var descrip = data['weather']['0']['description']
  var tempature = data['main']['temp']
  var wndspd = data['wind']['speed']
//display data innerHTML
  city.innerHTML=`Weather of <span>${nameval}<span>`
  temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
  description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
  wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

})

//error display
.catch(err => alert('You entered Wrong city name'))
})
