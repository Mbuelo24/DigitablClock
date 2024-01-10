function updateTime() {
  const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = hours >= 12 ? "PM" : "AM";


if (hours >= 24) {
  if (hours > 24) hours -= 24;
  ampm = "PM";
} else if (hours == 0){
  hr = 12;
  ampm = "AM";
}
{
  
}

hours = hours < 10 ? "0" . hours : hours;
minutes = minutes < 10 ? "0" . minutes : minutes;
seconds = seconds < 0 ? "0" . seconds : seconds;


document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
document.getElementById("ampm").textContent = ampm;



}

setInterval(updateTime, 1000);

updateTime();
