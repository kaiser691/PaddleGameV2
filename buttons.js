
function playClick(){
   document.querySelector(".entrance").style.display = "none";
   startGame = true;
}
function exitClick(){
   document.querySelector(".info").style.display = "none";
   document.querySelector(".entrance").style.display = "block";
}
function infoClick(){
   document.querySelector(".entrance").style.display = "none";
   document.querySelector(".info").style.display = "block";
}
