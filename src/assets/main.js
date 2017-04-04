let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (attempt === 0 || answer === ''){
      setHiddenFields();
    }
}
function setHiddenFields (){
  attempt = 0;
  answer = Math.floor(Math.random()*9999);
  answer.toString();
  while(answer.length() < 4){
    answer = '0'+answer;
  }
}
function setMessage(mess){
  message.innerHTML = mess;
}

function validateInput(param){
  if (param.length() === 4){
    return true;
  }
  else{
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}
//implement new functions here
