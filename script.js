var x = -1;
var Words = ["Hi", "Hello"];



let myVar = setInterval(myTimer ,10000);
function myTimer() {
  x++;
  document.getElementById("wat").innerHTML = Words[Math.floor(Math.random() * Words.length)];
  
  if(x == 80){
  	clearInterval(myVar);
	}
}