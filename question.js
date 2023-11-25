//This method is easier. Using for loop I'm dynamically changing the questions and options one by one and checking if the selected answer matches the correct answer and alerting if choosen ans is wrong and increasing the score one by one.

let currentQuestionIndex = 0
let score = 0
const questions = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who is considered the 'father of the computer'?",
    options: ["Steve Jobs", "Bill Gates", "Charles Babbage", "Tim Berners-Lee"],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the significance of the term 'bit' in computing?",
    options: ["Binary Interval Technology", "Basic Information Tag", "Binary Unit of Data", "Byte Integration Technique"],
    correctAnswer: "Binary Unit of Data",
  },
]

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("quest").innerText = currentQuestion.question;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`label${i}`).innerText = currentQuestion.options[i - 1];
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const userAnswer = selectedOption.nextElementSibling.innerText; //here I am using nextelementSibling is because i want to select the input and append the option to the next sibling element that is label element and in this line the user's choice is noted down
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
      score++
    } else {
      alert(`Incorrect! The correct answer is ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
        localStorage.setItem("scrr", score)
        location.href = './score.html'
    }
  } else {
    alert("Please select an answer before submitting.");
  }
}

document.querySelector(".submitAnswer").onclick = () => {
  checkAnswer()
  localStorage.setItem("scrr", score)
  location.href = './score.html';
}
document.getElementById("nextButton").onclick = checkAnswer;
document.querySelector(".Quit").onclick = () => {
  location.href = './getstarted.html'
} 

displayQuestion();


// In this method I'm trying to append the Questions and options to the input tag and making it displayed but this doesnt seem to work so I instead an alternate and simple method.


// let Questions = [
//     {
//         number: 1,
//         questions: "Which planet is known as the 'Red Planet'?",
//         answer: "Mars",
//         options: [
//             {option : "Venus", correct: false},
//             {option : "Mars", correct: true},
//             {option : "Jupiter", correct: false},
//             {option : "Saturn", correct: false}
//     ]
//     },
//     {
//         number: 2,
//         questions: "Who wrote the play 'Romeo and Juliet'?",
//         answer: "fifth",
//         options: [
//             {option : "William Wordsworth", correct: false},
//             {option : "Charles Dickens", correct: true},
//             {option : " William Shakespeare", correct: false},
//             {option : "nextButton", correct: false}
//     ]
//     },
//     {
//         number: 3,
//         questions: "ghi",
//         answer: "eleventh",
//         options: [
//             {option : "ninth", correct: false},
//             {option : "tenth", correct: false},
//             {option : "eleventh", correct: true},
//             {option : "twlefth", correct: false}
//         ]
//     }
// ]

// const ans = document.querySelector('.options')
// const next = document.querySelector('.nextQuestion')
// let quest = document.getElementById("quest1")

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     displayQuestion()
// }

// function displayQuestion() {
//     startTimer()
//     let currentQue = Questions[currentQuestionIndex];
//     let qNo = currentQuestionIndex + 1
//     que.textContent = qNo + ". " + currentQue.questions;

//     quest.textContent =  currentQue.questions

//     for (let i = 0; i < Questions.options.length; i++) {
//         const optionElement = document.getElementById("label" + (i + 1));
//         optionElement.textContent = Questions.options[i].option;
//     }
// }

// function updateScore() {
//     document.getElementById("scrr").textContent = "Score: " + score;
// }

// next.addEventListener('click', function(e) {
//     e.preventDefault()
//     var selectedOpt = document.querySelector('input[name="option"]:checked')
//     if (selectedOpt) {
//         var optionIndex = parseInt(selectedOpt.id.substring(6)) - 1
//         if (Questions[currentQuestionIndex].options[optionIndex].correct) {
//             score++
//         }
//         currentQuestionIndex++
//         if (currentQuestionIndex < Questions.length) {
//             displayQuestion()
//             selectedOpt.checked = false
//         }else{
//             localStorage.setItem("scrr", score)
//             location.href = './score.html'
//         }
//     }else{
//         alert("Please select an option")
//     }
//     updateScore()
// })

// displayQuestion()
// startQuiz()

var time = 40;
var timerId;
var timer = document.getElementById("timer");

function startTimer() {
  time = 40;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./score.html";
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}
startTimer();
