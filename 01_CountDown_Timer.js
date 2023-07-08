const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

function updateTimer(){
const currentYear = new Date().getFullYear();
const Diwali = new Date(`November 12 ${currentYear} 00:00:00`);
console.log(Diwali);

const CurrentDay = new Date();
console.log(CurrentDay);

const Diff = Diwali-CurrentDay;

const d = Math.floor(Diff/1000/60/60/24);
const hrs = Math.floor((Diff/1000/60/60)%24);
const mnts = Math.floor((Diff/1000/60)%60);
const sec = Math.floor((Diff/1000)%60);
Days.innerHTML=d<100?"0"+d:d;
Hours.innerHTML=hrs<10?"0"+hrs:hrs;
Minutes.innerHTML=mnts<10?"0"+mnts:mnts;
Seconds.innerHTML=sec<10?"0"+sec:sec;
}


setInterval(updateTimer,1000);