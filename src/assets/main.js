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
    if(getResults(input)){ //win condition
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    }
    if(!getResults(input) && attempt >= 10){ //lose condition
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage('Incorrect, try again.'); //continue
    }
}
function setHiddenFields (){
  attempt = 0;
  let temp = Math.floor(Math.random()*9999);
  temp = temp.toString();
  while(temp.length < 4){
    temp = '0'+answer;
  }
  answer.value = temp;
}
function setMessage(mess){
  message.innerHTML = mess;
}

function validateInput(inp){
  if (inp.length === 4){
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
    for (let i = 0; i < inp.length; i++){ //runs through the inputs characters
      for (let j = 0; j < answer.length; j++){ //runs through the answers characters
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
    if (correct === 4 ) { //if you guessed everyhing correctly
      return true;
    }
    return false;
}
function showAnswer(winCon){
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if (winCon){
    code.className = ' success';
  }
  else {
    code.className = ' failure';
  }
}
function showReplay(){
  let gDiv = document.getElementById('guessing-div');
  let rDiv = document.getElementById('replay-div');
  gDiv.style.display = 'none';
  rDiv.style.display = 'block';
}
//implement new functions here
