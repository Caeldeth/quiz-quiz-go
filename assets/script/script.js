// define questions and answers
const quizQuestions = [
    {
        question: "Test Question 1",
        answers: {
            a: "TQ1 Answer 1",
            b: "TQ1 Answer 2",
            c: "TQ1 Answer 3",
            d: "TQ1 Answer 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 2",
        answers: {
            a: "TQ2 Answer 1",
            b: "TQ2 Answer 2",
            c: "TQ2 Answer 3",
            d: "TQ2 Answer 4"
        },
        correctAnswer: "a"
    },
    {
        question: "Test Question 3",
        answers: {
            a: "TQ3 Answer 1",
            b: "TQ3 Answer 2",
            c: "TQ3 Answer 3",
            d: "TQ3 Answer 4"
        },
        correctAnswer: "a"
    },
    {
        question: "Test Question 4",
        answers: {
            a: "TQ4 Answer 1",
            b: "TQ4 Answer 2",
            c: "TQ4 Answer 3",
            d: "TQ4 Answer 4"
        },
        correctAnswer: "d"
    },
    {
        question: "Test Question 5",
        answers: {
            a: "TQ5 Answer 1",
            b: "TQ5 Answer 2",
            c: "TQ5 Answer 3",
            d: "TQ5 Answer 4"
        },
        correctAnswer: "b"
    }
];

//define html "pages" as variables
const pageIntroSection = document.getElementById('quiz-intro-card');
const pageMainSection = document.getElementById('quiz-card');
const pageEndQuiz = document.getElementById('quiz-end');
const pageHighScores = document.getElementById('quiz-scores');

//define html list and container as variables
const boxHighScores = document.getElementById('scores-box');
const listHighScores = document.getElementById('scores-list')

//define html buttons as variables
const btnHighScore = document.getElementById('btn-high-score');
const btnStartQuiz = document.getElementById('start-quiz');
const btnAnswer1 = document.getElementById('ans1');
const btnAnswer2 = document.getElementById('ans2');
const btnAnswer3 = document.getElementById('ans3');
const btnAnswer4 = document.getElementById('ans4');
const btnInitialsSubmit = document.getElementById('initials-submit');
const btnHome = document.getElementById('end-go-back');
const btnClear = document.getElementById('end-clear');

//add event listeners for all these buttons
btnHighScore.addEventListener('click',);
btnStartQuiz.addEventListener('click',);
btnAnswer1.addEventListener('click',);
btnAnswer2.addEventListener('click',);
btnAnswer3.addEventListener('click',);
btnAnswer4.addEventListener('click',);
btnInitialsSubmit.addEventListener('click');
btnHome.addEventListener('click',)
btnClear.addEventListener('click',)
