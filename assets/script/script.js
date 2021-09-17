// define questions and answers
const quizQuestions = [
    {
        testIndex: 1,
        question: "Test Question 1",
        answers: {
            a: "TQ1 Answer 1",
            b: "TQ1 Answer 2",
            c: "TQ1 Answer 3",
            d: "TQ1 Answer 4",
        },
        correctAnswer: "c",
    },
    {
        testIndex: 2,
        question: "Test Question 2",
        answers: {
            a: "TQ2 Answer 1",
            b: "TQ2 Answer 2",
            c: "TQ2 Answer 3",
            d: "TQ2 Answer 4",
        },
        correctAnswer: "a",
    },
    {
        testIndex: 3,
        question: "Test Question 3",
        answers: {
            a: "TQ3 Answer 1",
            b: "TQ3 Answer 2",
            c: "TQ3 Answer 3",
            d: "TQ3 Answer 4",
        },
        correctAnswer: "a",
    },
    {
        testIndex: 4,
        question: "Test Question 4",
        answers: {
            a: "TQ4 Answer 1",
            b: "TQ4 Answer 2",
            c: "TQ4 Answer 3",
            d: "TQ4 Answer 4",
        },
        correctAnswer: "d",
    },
    {
        testIndex: 5,
        question: "Test Question 5",
        answers: {
            a: "TQ5 Answer 1",
            b: "TQ5 Answer 2",
            c: "TQ5 Answer 3",
            d: "TQ5 Answer 4",
        },
        correctAnswer: "b",
    },
];

// variables to keep track of quiz in progress
var currentQuestion = 0;
var time = quizQuestions.length * 15;
var timerVal;

//define html "pages" as variables
var pageIntroSection = document.getElementById("quiz-intro-card");
var pageMainSection = document.getElementById("quiz-card");
var pageEndQuiz = document.getElementById("quiz-end");
var pageHighScores = document.getElementById("quiz-scores");

//define html list and container as variables
var boxHighScores = document.getElementById("scores-box");
var listHighScores = document.getElementById("scores-list");

//define html buttons as variables
var btnHighScore = document.getElementById("btn-high-score");
var btnStartQuiz = document.getElementById("start-quiz");
var btnInitialsSubmit = document.getElementById("initials-submit");
var btnHome = document.getElementById("end-go-back");
var btnClear = document.getElementById("end-clear");
var boxButtons = document.getElementById("button-group");

//define various labels as variables
var lblEndScore = document.getElementById("end-text");
var lblTimer = document.getElementById("timer-value");
var boxTimer = document.getElementById("timer-container");
var lblQuestion = document.getElementById("quiz-title");

function startQuiz() {
    // hide intro "page"
    pageMainSection.style.display = pageMainSection.style.display === "none" ? "flex" : "flex";
    // show quiz "page"
    pageIntroSection.style.display = pageIntroSection.style.display === "flex" ? "none" : "none";
    // disable high score button to prevent exiting game
    btnHighScore.disabled = true;
    // create timer - 1000 will run it every 1 second
    timerVal = setInterval(timer, 1000); 
    // show starting time
    lblTimer.innerHTML = time
    // get questions
    popQuiz();
}

// create timer function
function timer() {
    // update time to show progress
    time--;
    lblTimer.innerHTML = time;

    // expire game if person takes too long
    if (time <=0) {
        gameOver();
    }
}

// create questions
function popQuiz() {

}

//add event listeners for all these buttons
btnStartQuiz.addEventListener("click", startQuiz);
/*
btnHighScore.addEventListener('click',);
btnAnswer1.addEventListener('click',);
btnAnswer2.addEventListener('click',);
btnAnswer3.addEventListener('click',);
btnAnswer4.addEventListener('click',);
btnInitialsSubmit.addEventListener('click');
btnHome.addEventListener('click',)
btnClear.addEventListener('click',)
*/
