let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (attempt === '' || answer === ''){
      setHiddenFields();
    }
    if(!validateInput(input.value)){
      return false;
    }
    attempt.value++;
    gameRes = getResults(toString(input.value));
    if(gameRes){ //win condition
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }
    if(!gameRes && attempt.value >= 10){ //lose condition
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage('Incorrect, try again.'); //continue
    }
}
function setHiddenFields (){
  attempt.value = 0;
  let temp = Math.floor(Math.random()*10000);
  temp = temp.toString();
  while(temp.length < 4){
    temp = '0'+temp;
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
    results.innerHTML = '<div class="row"><span class="col-md-6">'+inp+
              '</span><div class="col-md-6>';
    let correct = 0;
    for (let i = 0; i < 4; i++){ //runs through the inputs characters
      if (inp.charAt(i) === answer.value.charAt(i)){ // value match and position match
        results.innerHTML += '<span class="glyphicon glyphicon-ok"></span>';
        correct++;
      }
      else {
        let vMatch = false; //we see if the condition that a value matches as false. (initial assumption)
        for (let j = 0; j < 4; j++){ //run through the answers characters
          if (inp.charAt(i) === answer.value.charAt(j)){ // if a value match is found
            vMatch = true;
            break;
          }
        }
        if (vMatch) { //if a value matches.
          results.innerHTML += '<span class="glyphicon glyphicon-transfer"></span>';
        }
        else { //default nothing matches
          results.innerHTML += '<span class="glyphicon glyphicon-remove"></span>';
        }
      }
    }
    results.innerHTML += '</div></div>';
    if (correct === 4 ) { //if you guessed everyhing correctly
      return true;
    }
    else {
      return false;
    }
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
