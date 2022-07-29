var x = -1;
var Words = ["Displaced", "Sex", "Virgin", "Girl", "Grief", "Dash", "Women", "Dedicate", "Misfortune", "Luck", "Sound", "Light", "Sun", "Honest"];

let audio = new Audio();

let myVar = setInterval(myTimer ,10000);
function myTimer() {
  x++;
  audio.src = "src/sound.mp3";
  document.getElementById("wat").innerHTML = Words[Math.floor(Math.random() * Words.length)];
  audio.play();
  
  if(x == 81){
  	clearInterval(myVar);
    document.getElementById("wat").innerHTML = "Finished";
	}
}