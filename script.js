var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var mousa=document.querySelector(".mousa")
var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

function setGradient() {
	body.style.background=
	"linear-gradient(to right,"
	+color1.value
	+", "
	+color2.value
	+")";
	css.textContent=body.style.background + ";";
	var colstyle=body.style.background;
	mousa.style.color=colstyle;	
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
