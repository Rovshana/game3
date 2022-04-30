
let questions = [{
  question: 'html is a not a proggramming language',
  answer: 't'
},
{
  question: '"Cards on the table" work belongs to the Agatha Cristie',
  answer: 't'
},
{
  question: 'Jonathan swift was born in London',
  answer: 'f'
},
{
  question: 'London is a capital of USA',
  answer: 'f'
},
{
  question: 'India is the world"s largest tea-drinking country',
  answer: 't'
},
{
  question: 'In Spain people eat 12 grapes for good luck of each month in the  new year ',
  answer: 't'
},
{
  question: 'Lake Baykal is the deepest lake on the Earth',
  answer: 't'
},
{
  question: 'istanbul is the capital of Turkey',
  answer: 'f'
}
]
// domelements
class DomElements {
questionTitle = document.querySelector('#questionTitle');
correct = document.querySelector('#correct');
false = document.querySelector('#false');
score = document.querySelector('#score');
}
class QuestionGame extends DomElements {
nextQuestion = 0;
point = 0;
questionsArr = [];
constructor(myQuestions) {
  super()
  this.questionsArr = myQuestions;
}
showScreen() {
  this.questionTitle.innerHTML = this.questionsArr[this.nextQuestion].question;
  
}
//
startGame(answer) {
  if (["t", "f"].indexOf(answer) === -1) {
      alert('please only use  letter of t, and f!!!');
      return
  }
  console.log(this.questionsArr[this.nextQuestion].question);
  if (this.questionsArr[this.nextQuestion].answer === answer) {
      this.point++;
      this.score.innerHTML = `Score: ${this.point}`;
  }
  this.nextQuestion += 1;
  console.log(this.questionsArr[this.nextQuestion].answer);
  console.log("user:", answer);
  console.log("point", this.point);
  // console.log(this);
  this.showScreen();
}
}
let myGame = new QuestionGame(questions);
myGame.showScreen();
window.onkeydown = function (e) {
myGame.startGame(e.key);
}
Collapse



