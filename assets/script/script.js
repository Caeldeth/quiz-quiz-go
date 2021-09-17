// define questions and answers
const quizQuestions = [
    {
        question: "Javascript is how many years old as of June 2021?",
        answers: ["6 years", "24 years", "25 years", "30 years"],
        correctAnswer: "c",
    },
    {
        question: "This is not a valid Javascript file extension:",
        answers: [".jav", ".js", ".cjs", ".mjs"],
        correctAnswer: "a",
    },
    {
        question: "Brendan Eich worked for this company while developing Javascript",
        answers: ["Netscape", "Mozilla", "Google", "Opera Software"],
        correctAnswer: "a",
    },
    {
        question: "Javascript is trademarked by this company",
        answers: ["Microsoft", "Sun Microsystems", "IBM", "Oracle"],
        correctAnswer: "d",
    },
    {
        question: "Javascript does not work in this operating system",
        answers: ["Microsoft Windows", "Temple OS", "Linux", "OSX"],
        correctAnswer: "b",
    },
];

// variables to keep track of quiz in progress
var curQuestionIndex = 0;
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
var lblOutcome = document.getElementById("quiz-outcome");
var txtInitials = document.getElementById("initials-box");

function startQuiz() {
    // show quiz "page"
    pageMainSection.style.display = pageMainSection.style.display === "none" ? "flex" : "flex";
    // make sure other pages are hidden
    pageIntroSection.style.display = pageIntroSection.style.display === "flex" ? "none" : "none";
    pageEndQuiz.style.display = pageEndQuiz.style.display === "flex" ? "none" : "none";
    pageHighScores.style.display = pageHighScores.style.display === "flex" ? "none" : "none";

    // disable high score button to prevent exiting game
    btnHighScore.disabled = true;
    // create timer - 1000 will run it every 1 second
    timerVal = setInterval(timer, 1000);
    // show starting time
    lblTimer.innerHTML = time;
    // get questions
    popQuiz();
}

// create timer function
function timer() {
    // update time to show progress
    time--;
    lblTimer.innerHTML = time;

    // expire game if person takes too long
    if (time <= 0) {
        gameOver();
    }
}

// create questions
function popQuiz() {
    // populate questions from array
    var curQuestion = quizQuestions[curQuestionIndex];

    // change title to current question
    lblQuestion.innerHTML = curQuestion.question;

    // clear prior questions
    boxButtons.innerHTML = "";

    // create a loop to add buttons and/or hang myself with
    curQuestion.answers.forEach(function (answer, i) {
        var quizButton = document.createElement("button");
        quizButton.setAttribute("class", "question-buttons");
        quizButton.setAttribute("value", answer);
        quizButton.innerHTML = i + 1 + ". " + answer;
        quizButton.onclick = answerClick;

        boxButtons.appendChild(quizButton);
    });
}

function answerClick() {
    // check if user guessed wrong
    if (this.value !== quizQuestions[curQuestionIndex].correctAnswer) {
        // remove time
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        lblTimer.innerHTML = time;

        // update answer label to inform user they are wrong
        lblOutcome.innerHTML = "Wrong!";
    } else {
        // update answer label to inform user they are right
        lblOutcome.innerHTML = "Correct!";
    }

    // grab next question
    curQuestionIndex++;

    // make sure there are more questions
    if (curQuestionIndex == quizQuestions.length) {
        gameOver();
    } else {
        popQuiz();
    }
}

// end the quiz hurray
function gameOver() {
    // stop timer
    clearInterval(timerVal);

    // hide quiz "page" and show end page
    pageEndQuiz.style.display = pageEndQuiz.style.display === "none" ? "flex" : "flex";

    pageIntroSection.style.display = pageIntroSection.style.display === "flex" ? "none" : "none";
    pageHighScores.style.display = pageHighScores.style.display === "flex" ? "none" : "none";
    pageMainSection.style.display = pageMainSection.style.display === "flex" ? "none" : "none";

    //show final score
    lblEndScore.innerHTML = "Your score is " + time + "!";
}

function saveScore() {
    // find out what was typed in input box
    var winnerName = txtInitials.value.trim();

    // do some simple error checking
    if (winnerName !== "") {
        // get scores from local storage, set to empty if null
        var bestScores = JSON.parse(window.localStorage.getItem("bestScores")) || [];

        // formate new score as object for player
        var newScore = {
            score: time,
            name: winnerName,
        };

        // add to local storage
        bestScores.push(newScore);
        window.localStorage.setItem("bestScores", JSON.stringify(bestScores));

        showScores();
    }
}

function goHome() {
    // the great reset begins

    // clear initials from win box
    txtInitials.value = "";

    // clear last score from label
    lblEndScore.innerHTML = "";

    // clear outcome from label
    lblOutcome.innerHTML = "";

    // hide timer
    lblTimer.innerHTML = "";

    // re-enable high scores button
    btnHighScore.disabled = false;

    // clear score box
    listHighScores.innerText = "";

    // reset all page visibility
    pageIntroSection.style.display = pageIntroSection.style.display === "none" ? "flex" : "flex";
    pageHighScores.style.display = pageHighScores.style.display === "flex" ? "none" : "none";
    pageEndQuiz.style.display = pageEndQuiz.style.display === "flex" ? "none" : "none";
    pageMainSection.style.display = pageMainSection.style.display === "flex" ? "none" : "none";

    curQuestionIndex = 0;
    time = quizQuestions.length * 15;
}

function showScores() {
    //show page
    pageEndQuiz.style.display = pageEndQuiz.style.display === "flex" ? "none" : "none";
    pageHighScores.style.display = pageHighScores.style.display === "none" ? "flex" : "flex";
    pageIntroSection.style.display = pageIntroSection.style.display === "flex" ? "none" : "none";
    pageMainSection.style.display = pageMainSection.style.display === "flex" ? "none" : "none";

    // get scores from local storage or set to empty
    var bestScores = JSON.parse(window.localStorage.getItem("bestScores")) || [];

    // sort high scores by score property
    bestScores.sort(function (a, b) {
        return b.score - a.score;
    });

    bestScores.forEach(function (score) {
        // create list entry for each high score
        var listEntry = document.createElement("li");
        listEntry.textContent = score.name + " - " + score.score;

        // display on page
        listHighScores.appendChild(listEntry);
    });
}

function nukeScores() {
    var beCertain = window.confirm(
        "Are you sure you want to remove high scores?  This will permanently remove your scores"
    );
    if (beCertain == true) {
        window.localStorage.removeItem("bestScores");
        window.location.reload();
    }
}

// add event listeners for all these buttons
// player clicks start quiz
btnStartQuiz.addEventListener("click", startQuiz);
btnInitialsSubmit.addEventListener("click", saveScore);
btnHome.addEventListener("click", goHome);
btnClear.addEventListener("click", nukeScores);
btnHighScore.addEventListener("click", showScores);
