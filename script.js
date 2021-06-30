var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var linerGradient=document.querySelector("h3");
var body=document.getElementById("gradient")

function addGradient(){
  body.style.background = "linear-gradient(to right, "+color1.value + ", "+color2.value +")";
  linerGradient.textContent = body.style.background + ";";
}

color1.addEventListener("input",addGradient);
color2.addEventListener("input",addGradient);
