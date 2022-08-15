 const firebaseConfig = {
   apiKey: "AIzaSyDujkO1_75W09NeIsK75W7ke1lK1WRo7Jg",
   authDomain: "pwat-ee02e.firebaseapp.com",
   projectId: "pwat-ee02e",
   storageBucket: "pwat-ee02e.appspot.com",
   messagingSenderId: "413650120122",
   appId: "1:413650120122:web:7610803b00805e0035c183",
   measurementId: "G-GKRYXXJVHZ"
 };
 let set1 =[];

 firebase.initializeApp(firebaseConfig);
 const db = firebase.database();
 load();
 function load() {
 
   const fetchChat = db.ref("words/");
   fetchChat.on("child_added", function(snapshot) {
     const messages = snapshot.val();
     set1.push(messages.name);
     console.log(messages.name);
   });
 }

document.getElementById("authform").addEventListener("submit", getname);

function getname(e) {
  e.preventDefault();
  const name = document.getElementById("namebox");

  const username = name.value;
  
  if(set1.includes(username)){
    alert("Already added");
  }
  else{
    db.ref("words/" + set1.length).set({
      name: username,
    });
    console.log("added " + username);
    name.value = "";
  }

  
    
  
}
