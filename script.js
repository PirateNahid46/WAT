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
  

var size = 80;
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
	  clearInterval(checker);
  }
}


function loaded(){
  document.getElementById("main").style.display="block";
  document.getElementById("load").style.display="none";
  document.getElementById("reload").style.display ="none";
  size = document.getElementById("noofwords").value;
  
  ArrayM = splitToChunks(set1, parseInt(size)+1)
  for(let l=1; l<=ArrayM.length;l++){
    var g = document.getElementById("set");
    var option = document.createElement("option");
    option.value = l;
    console.log(option.value);
    option.text = "Set "+l;
    if(ArrayM[l-1].length == parseInt(size)+1){
      g.append(option);
    }
    else{
      console.log('Set '+l+' doesn\'t have enough words');
    }
  }
  
}
//Pirate

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
    let finalWord;
    if(serial.checked){
      finalWord = x +2 +'. ' +word;
    }
    else{
      finalWord = word
    }
    
    
    x++;
    document.getElementById("wat").innerHTML = finalWord;
    Words = Words.remove(word);
    console.log(Words);
    if (soundCheck.checked) {
      audio.play();
    }
    
  

  
  
  
  
  if(x == parseInt(size)){
  	clearInterval(myVar);
    document.getElementById("wat").innerHTML = "Finished";
    document.getElementById("wat").style.color = "#0f0";
    document.getElementById("reload").style.display ="block";
	}
}

function reload(){
  location.reload(true);
}

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

