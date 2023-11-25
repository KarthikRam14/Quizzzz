let currentQuestionIndex = 0
let score = 0
const questions = [
    {
        question: "In which year did the Berlin Wall fall, symbolizing the end of the Cold War?",
        options: ["1985", "1989", "1991", "1995"],
        correctAnswer: "1989",
    },
    {
        question: "Who won the Nobel Prize in Physics in 1921 for their work on the photoelectric effect?",
        options: ["Albert Einstein", "Niels Bohr", "Marie Curie", "Max Planck"],
        correctAnswer: "Albert Einstein",
    },
]

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("quest").innerText = currentQuestion.question;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`label${i}`).innerText =
      currentQuestion.options[i - 1];
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

document.querySelector(".submitAnswer").onclick = checkAnswer;
document.getElementById("nextButton").onclick = displayQuestion;

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
