let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}
function setHiddenFields (){
  answer = Math.floor(Math.random()*9999);
  answer.toString();
  while(answer.length() < 4){
    answer = '0'+answer;
  }
}

//implement new functions here
