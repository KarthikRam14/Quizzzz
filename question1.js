let currentQuestionIndex = 0
let score = 0
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "None"],
    correctAnswer: "William Shakespeare",
  }
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
    const userAnswer = selectedOption.nextElementSibling.innerText; 
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
