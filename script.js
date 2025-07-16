const questions = [
  {
    question: "What is the biggest lake in Rwanda?",
    answers: [
      { text: "Ruhondo", correct: false },
      { text: "Mugesera", correct: false },
      { text: "Kivu", correct: true },
      { text: "Muhazi", correct: false }
    ]
  },
  {
    question: "Which city is the capital of Rwanda?",
    answers: [
      { text: "Huye", correct: false },
      { text: "Musanze", correct: false },
      { text: "Kigali", correct: true },
      { text: "Rubavu", correct: false }
    ]
  },
  {
    question: "Which animal is featured in Rwanda's tourism ",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Lion", correct: false },
      { text: "Gorilla", correct: true },
      { text: "Zebra", correct: false }
    ]
  },
  {
    question: "What is Rwanda's official language ",
    answers: [
      { text: "Zulu", correct: false },
      { text: "Kinyarwanda", correct: true },
      { text: "Swahili", correct: false },
      { text: "Luganda", correct: false }
    ]
  }
];

const questionElement=document.querySelector(".question");
const answerButton=document.querySelector(".buttons");
const nextButton=document.querySelector(".next");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex + 1;
  questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
 function resetState(){
  nextButton.style.display="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
 }
startQuiz();