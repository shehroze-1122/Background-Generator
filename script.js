var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var linerGradient=document.querySelector("p");
var body=document.getElementById("gradient")

function addGradient(){
  body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
  linerGradient.textContent = body.style.background + ";";
}

color1.addEventListener("input",addGradient);
color2.addEventListener("input",addGradient);

function copyFunction() {
  /* Get the text field */
  var property = document.getElementById("css-property");

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(property.innerText);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
} 

