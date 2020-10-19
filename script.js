var counter = document.getElementById("#counter");
var score= document.getElementById("#score-keeper");
var quizBody= document.getElementsByClassName(".card-body")
var startButton= document.getElementById("start-btn");
var quizQuest= document.querySelector(".question");
var quizAns= document.querySelector(".answers");
var rightanswer= document.getElementsByClassName(".card-footer");

var secondsLeft= 120;



function startQuiz () {
    document.querySelector("#start-btn").hidden = true;
    document.querySelector("#question-container").hidden = false;
}

startButton.addEventListener('click', startQuiz);


var quizContent = [{
    question: "Who is Megan Thee Stallion signed to?",
    answers: [
     "300 Entertainment",
     "Atlantic Records",
     "Def Jam Records",
    "Sony Music Entertainment"
],
    correctAnswer: "300 Entertainment"
},
{
    question: "Which University did Megan attend?",
    answers: [
     "Howard University",
     "Texas Tech University",
     "Prairie View A&M University",
     "Tuskegee University"

    ],
    correctAnswer: "Prairie View A&M University"
},
{
    question: "Which rapper shot Megan?",
    answers: [
        "YG",
        "Lil Yachty",
        "Pop Smoke",
        "Tory Lanez"
    ],
    correctAnswer: "Tory Lanez"
},
{
    question: "What is Megan Thee Stallion's real name?",
    answers: [
        "Megan Trainor",
        "Megan Pete",
        "Megan Markle",
        "Megan Brown"
    ],
    correctAnswer: "Megan Pete"
}
];


