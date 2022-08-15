var x = -1;
 let Words;
const set1 = ["Displaced", "Sex", "Virgin", "Girl", "Grief", "Dash", "Women", "Dedicate", "Misfortune", "Luck", "Sound", "Light", "Sun", "Honest", "Word", "Hard", "People", "Success", "Mind", "Late", "Secret", "Stone", "Money", "Clash", "Rose", "Morning", "Sleep", "Game", "Ear", "Travel", "Figure", "Spider", "Sincerity", "Seniors", "Efficient", "Bullet", "Lonely", "Equal", "Request", "Assemble", "Field", "Week", "Miss", "Dawn", "Success", "Gentle", "Need", "Cry", "Push", "Task", "Quarelling", "Challenge", "Keen", "Rumour", "Crazy", "Zero", "Joy", "Pale", "Society", "State", "Designation", "President", "Blow", "Check", "Alarm", "Corruption", "Newspaper", "Sorrow", "Death", "Judge", "Noble", "Guitar", "Pious", "Favour", "Love", "Pull", "Fool", "Lesson", "Fight", "Shoe", "Waste", "Dear", "Brains", "Action", "Annoy", "Honesty", "Save", "Native", "Refuse", "Low", "Taught", "Grass", "Crowd", "Lip", "Police", "Study", "Wide", "Surplus", "Discipline", "Clerk", "Respect", "Father", "Embrace", "Gun", "Freedom", "Glad", "Ship", "Hate", "Bring", "Coup", "Cycle", "Air", "Loose", "Sword", "Power", "Lonely", "Hunting", "Tea"];


function splitToChunks(array, parts) {
  let result = [];
  const chunkSize = parts;
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  console.log(result);
  return result;
}



let audio = new Audio();
audio.src = "src/sound.mp3";
let myVar;
let Shown = [];

function start(){
 
  var time = document.getElementById("time").value;
  var setV = document.getElementById("set").value;
  
  var ArrayM = splitToChunks(set1, 80);
  Words = ArrayM[setV-1];
  
  document.getElementById("wat").innerHTML = "Wait for "+time+"s";
  myVar = setInterval(myTimer ,time*1000);
  document.getElementById("ui").style.display = "none";
}
function myTimer() {
  var word = Words[Math.floor(Math.random() * Words.length)];
  if(Shown.includes(word)){
    myTimer();
  }else{
    x++;
    document.getElementById("wat").innerHTML = word;
    Shown.push(word);
    audio.play();
  }

  
  
  
  
  if(x == 80){
  	clearInterval(myVar);
    document.getElementById("wat").innerHTML = "Finished";
	}
}
