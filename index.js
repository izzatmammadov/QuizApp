const quizData = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Giraffe", correct: false },
      { text: "Blue Whole", correct: true },
      { text: "Elephant", correct: false },
      { text: "Leon", correct: false },
    ],
  },
  {
    question: "What brand of machine produced the tank?",
    answers: [
      { text: "BMW", correct: false },
      { text: "Mercedes-Benz", correct: false },
      { text: "Lamborhgini", correct: false },
      { text: "Porsche", correct: true },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Georg Ohm", correct: false },
    ],
  },
  {
    question: "Which nation discovered the rap genre?",
    answers: [
      { text: "America", correct: false },
      { text: "Brasil", correct: false },
      { text: "Africa", correct: true },
      { text: "Germany", correct: false },
    ],
  },
  {
    question: "Who is the first programmer in the world?",
    answers: [
      { text: "John Doe", correct: false },
      { text: "Ada Lovelace", correct: true },
      { text: "James Gosling", correct: false },
      { text: "Brendan Eich", correct: false },
    ],
  },
  {
    question: "What is the first programming language?",
    answers: [
      { text: "Analytical Engine", correct: true },
      { text: "Kotlin", correct: false },
      { text: "Java", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "When berlin wall was built?",
    answers: [
      { text: "1955", correct: false },
      { text: "1971", correct: false },
      { text: "1961", correct: true },
      { text: "1983", correct: false },
    ],
  },
];

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  displayQuestion() {
    questionCount.innerHTML = `Question ${this.currentQuestionIndex + 1}/${
      this.questions.length
    }`;

    questionTitle.innerHTML = `<h2>${
      this.questions[this.currentQuestionIndex].question
    }</h2> 
      <div id="answer-buttons">${this.questions[
        this.currentQuestionIndex
      ].answers
        .map(
          (answer, index) =>
            `<button class="button" onclick="quiz.checkAnswer(${index})">${answer.text}</button></div>`
        ).join("")}`;
  }

  checkAnswer(answerIndex) {
    const correctAnswer =
      this.questions[this.currentQuestionIndex].answers[answerIndex].correct;

    if (correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      this.displayQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    resultContainer;
    questionCount.innerHTML = `Game Over`;
    resultContainer.innerHTML = `<h2>Your Score: ${this.score}/${this.questions.length}</h2>`;
    againButton.style.display = "block";
    quizPanel.style.display = "none";
  }
}

againButton.addEventListener("click", function () {
  location.reload();
  app.style.display = "none";
  intro.style.display = "flex";
});

startGame.addEventListener("click", function () {
  intro.style.display = "none";
  app.style.display = "block";
});

exitGame.addEventListener("click", function () {
  window.close();
});

const quiz = new Quiz(quizData);
quiz.displayQuestion();
