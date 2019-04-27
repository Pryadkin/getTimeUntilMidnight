'use strict';
window.addEventListener('DOMContentLoaded', function() {


let getTimeUntilMidnight = function(selector) {

   let bottomTdTable = document.querySelectorAll(selector);      

   setInterval(() => {
      let 
         now = new Date(),
         nowMillisec = Date.parse(now),
         midnightMillisec = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
   
   
      let 
         differMillisec = (midnightMillisec - nowMillisec),
         hours = Math.floor(differMillisec / (1000 * 60 * 60)),
         minuts = Math.floor(differMillisec / (1000 * 60)) - (hours * 60),
         seconds = Math.floor(differMillisec / (1000)) - (minuts * 60) - (hours * 60 * 60);
      
         
      bottomTdTable[0].innerHTML = hours;
      bottomTdTable[1].innerHTML = minuts;
      bottomTdTable[2].innerHTML = seconds;
      
   
      if(seconds < 10) {
         bottomTdTable[2].innerHTML = `0${seconds}`;
      } else {
         bottomTdTable[2].innerHTML = seconds;
      }
   
      if(minuts < 10) {
         bottomTdTable[1].innerHTML = `0${minuts}`;
      } else {
         bottomTdTable[1].innerHTML = minuts;
      }
      
   }, 1000) ;    
};

getTimeUntilMidnight('tr:last-child td');




})








