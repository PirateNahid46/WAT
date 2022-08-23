document.getElementById("main").style.display="none";  
  const firebaseConfig = {
    apiKey: "AIzaSyDujkO1_75W09NeIsK75W7ke1lK1WRo7Jg",
    authDomain: "pwat-ee02e.firebaseapp.com",
    projectId: "pwat-ee02e",
    storageBucket: "pwat-ee02e.appspot.com",
    messagingSenderId: "413650120122",
    appId: "1:413650120122:web:7610803b00805e0035c183",
    measurementId: "G-GKRYXXJVHZ"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  


var x = -1;
let Words;
let set1 = [];
load();
var ArrayM = [];
function load(){
  
  const fetchChat = db.ref("words/");
  fetchChat.on("child_added", function(snapshot) {
    const messages = snapshot.val();
    set1.push(messages.name);
  });
}
let checker;
checker = setInterval(check, 1000);
function check(){
  var goBtn = document.getElementById('Go');
  if (set1.length == 0){
    goBtn.innerHTML = "Loading"
    
    
  }else{
    goBtn.innerHTML = 'Go';
    goBtn.removeAttribute('disabled');
  }
}


function loaded(){
  document.getElementById("main").style.display="block";
  document.getElementById("load").style.display="none";
  ArrayM = splitToChunks(set1, 80)
  for(let l=1; l<=ArrayM.length;l++){
    var g = document.getElementById("set");
    var option = document.createElement("option");
    option.value = l;
    console.log(option.value);
    option.text = "Set "+l;
    g.append(option);
  }
  
}


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
 var serial = document.getElementById('serial');
 var soundCheck = document.getElementById('sound');

function start(){
  
 
  var time = document.getElementById("time").value;
  var setV = document.getElementById("set").value;
  
  
  
  

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
    let finalWord;
    if(serial.checked){
      finalWord = x +2 +'. ' +word;
    }else{
      finalWord = word
    }
    
    
    x++;
    document.getElementById("wat").innerHTML = finalWord;
    Shown.push(word);
    if (soundCheck.checked) {
      audio.play();
    }
    
  }

  
  
  
  
  if(x == 80){
  	clearInterval(myVar);
    document.getElementById("wat").innerHTML = "Finished";
	}
}

