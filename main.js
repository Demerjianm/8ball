


function add() {
  var answers = ['That is probablly a good idea', 'I think so', 'NO', 'Go for it',
                  'Yes'];
  var randomId = answers[Math.floor(Math.random() * answers.length)];
  var questionBox = document.getElementById('question').value
  if( document.getElementById('question').value === '' ) {
    alert('Hey, you gotta ask something');
  } else {
    document.getElementById('test').innerHTML = "The 8 ball say's: " + randomId;
    question.value = null;
    console.log(questionBox)
  }
};
