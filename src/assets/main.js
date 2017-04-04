let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (attempt === 0 || answer === ''){
      setHiddenFields();
    }
    if(!validateInput(input.value)){
      return false;
    }
    attempt++;
}
function setHiddenFields (){
  let attempt = 0;
  answer = Math.floor(Math.random()*9999);
  answer.toString();
  while(answer.length() < 4){
    answer = '0'+answer;
  }
}
function setMessage(mess){
  message.innerHTML = mess;
}

function validateInput(inp){
  if (inp.length() === 4){
    return true;
  }
  else{
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}
function getResults(inp){
    let sub = '<div class="row"><span class="col-md-6">'+inp+
              '</span><div class="col-md-6>';
    let correct = 0;
    for (let i = 0; i < inp.length(); i++){ //runs through the inputs characters
      for (let j = 0; j < answer.length(); j++){ //runs through the answers characters
        if (inp.charAt(i) === answer.charAt(j)){ //if the values match
          if(i === j){ //AND the the position matches
            sub += '<span class="glyphicon glyphicon-ok"></span>';
          }
          else{ //if the position does not match
            sub += '<span class="glyphicon glyphicon-transfer"></span>';
          }
        }
        else { // values do NOT match
          sub += '<span class="glyphicon glyphicon-remove"></span>';
        }
      }
    }
    sub += '</div></div>';
    results.innerHTML = sub;
}
//implement new functions here
