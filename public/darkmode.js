let dark = localStorage.getItem('darkMode');

if(dark == 0){
  document.body.classList.add('darkmode');
}
else{
  document.body.classList.remove('darkmode');
}



function darkMode(){
  var element = document.body;
  element.classList.toggle("darkmode");
  if(dark == 0){
    localStorage.setItem('darkMode', 1);
  }else{
    localStorage.setItem('darkMode', 0);
  }
}
