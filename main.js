$(document).ready( function() {
  var $header = $('#header')
  var $addEm = $('#addEm')
  var answers = ['That is probablly a good idea', 'I think so', 'NO', 'Go for it',
                  'Yes', 'You sure about that', 'hell yes', 'I would', 'Naaaa'];

  $addEm.click( function() {
    var randomId = answers[Math.floor(Math.random() * answers.length)];
    var question = $('#question').val()
    var li = '<li>' +'your question: ' + question + ',' + ' magic balls answer: '+ randomId + '</li>'
    if( question === '')
      alert('uh oh, type a question')

    $('#test').text(randomId)
    $('#responses').append(li)
    $('#question').val('')
  })
})

/*
function addToList() {
  var questionBox = document.getElementById('question').value
  var list = document.getElementById('responses');
  var li = document.createElement('li');
  li.innerHTML = questionBox;
  list.appendChild(li)
}

function add() {
  var answers = ['That is probablly a good idea', 'I think so', 'NO', 'Go for it',
                  'Yes', 'You sure about that', 'hell yes', 'I would', 'Naaaa'];
  var randomId = answers[Math.floor(Math.random() * answers.length)];
  var questionBox = document.getElementById('question').value
  if( document.getElementById('question').value === '' ) {
    alert('Hey, you gotta ask something');
  } else {
    document.getElementById('test').innerHTML = "The 8 ball say's: " + randomId;

    console.log(questionBox)
    addToList();
    question.value = null;
  }
};
*/
