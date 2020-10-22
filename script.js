//HTML elements
var counter = document.getElementById("counter");
var score = document.getElementById("score-keeper");
var questionElement = document.getElementById("questionDisplay");
var allButtons = document.querySelector(".btn");
var button1 = document.getElementById("ans1");
var button2 = document.getElementById("ans2");
var button3 = document.getElementById("ans3");
var button4 = document.getElementById("ans4");
var startButton = document.getElementById("start-btn");
var answerAlert = document.getElementById("answerAlert");
var displayScore = document.getElementById("finalScore");
var nameInput = document.getElementById("enterName");
var statDisplay = document.getElementById("statDisplay")
var points = 0;

//Array that will hold values
var highScores = []

//hidden objects 
document.querySelector(".qaDisplay").hidden = true;
document.querySelector("#storeScore").hidden = true;
document.querySelector("#high-score-list").hidden = true;


//function hides the start button, starts the counter at 120 seconds, sets score to 0, shows the question and answer display then runs the displayQuestion function
function startQuiz () {
    secondsLeft= 120
    score.innerText = "Score: " + points
    document.querySelector("#start-btn").hidden = true;
    document.querySelector(".qaDisplay").hidden = false;
    // questionIndex;
    displayQuestion ();
}


//function calls the targetQuest function and passes the quiz parameter when it's index is 0 -- referring to the first question
function displayQuestion () {
     targetQuest(quizContent[0])
}

//function displays the targeted question from the quizContent array and applies events to the answer buttons

function targetQuest(question) {
    questionElement.innerText = question.question;
    button1.innerText = question.answers[0];
    button2.innerText = question.answers[1];
    button3.innerText = question.answers[2];
    button4.innerText = question.answers[3];

    //if the first button is clicked which is the correct answer for the question, it runs the next question function, gives feedback that your answer was correct, and adds 10 to the current score
    document.getElementById("ans1").onclick = function () {
    nextQuest();
    answerAlert.innerText = "Answer: Correct"
    score.innerText = "Score: " + (points += 10);
    
    }

    //if the second button is clicked which is an incorrect option, it runs the next question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans2").onclick = function () {
        nextQuest ();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }

    
    //if the third button is clicked which is an incorrect option, it runs the next question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans3").onclick = function () {
        nextQuest ();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
    
    //if the fourth button is clicked which is an incorrect option, it runs the next question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans4").onclick = function () {
        nextQuest ();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }

    
}

//this function targets the next index in the quizContent array displaying that question and those answers to the page
function nextQuest () {
    targetQuest(quizContent[1]);

    //if the third button is clicked which is the correct button, it will display the next question, give feedback that the answer was correct, and add 10 to the current score
    document.getElementById("ans3").onclick = function () {
        thirdQuest();
        answerAlert.innerText = "Answer: Correct"
        score.innerText = "Score: " + (points += 10)
    }

    
    //if the first button is clicked which is an incorrect option, it runs the third question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans1").onclick = function () {
        thirdQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
        
    //if the second button is clicked which is an incorrect option, it runs the third question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans2").onclick = function () {
        thirdQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
        
    //if the fourth button is clicked which is an incorrect option, it runs the third question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans4").onclick = function () {
        thirdQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }


}


//third question function targets the second index in the quizContent array
function thirdQuest () {
    targetQuest(quizContent[2]);

        
    //if the fourth button is clicked which is the correct option, it runs the last question function, provides feedback that the answer was correct, and adds 10 points to the total score
    document.getElementById("ans4").onclick = function () {
        lastQuest ();
        answerAlert.innerText = "Answer: Correct"
        score.innerText = "Score: " + (points += 10)
    }

        
    //if the first button is clicked which is an incorrect option, it runs the last question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans1").onclick = function () {
        lastQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }

      //if the second button is clicked which is an incorrect option, it runs the last question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans2").onclick = function () {
        lastQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
      //if the third button is clicked which is an incorrect option, it runs the last question function, decrements the timer by 10 seconds, and displays feedback that the answer is incorrect
    document.getElementById("ans3").onclick = function () {
        lastQuest();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
}

//this function targets the final index in the quizContent array
function lastQuest () {
    targetQuest(quizContent[3]);
    //if the second button is clicked which is the correct answer, it will provide feedback that the choice was correct, add 10 points to the current score, and run the quiz over function
    document.getElementById("ans2").onclick = function () {
        answerAlert.innerText = "Answer: Correct"
        score.innerText = "Score: " + (points += 10)
        quizOver ()
    }
    //if the first button is clicked which is an incorrect option, it will run the quizOver function, decrement the timer by 10 seconds, and provide feedback that the answer was incorrect
    document.getElementById("ans1").onclick = function () {
        quizOver();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
    //if the third button is clicked which is an incorrect option, it will run the quizOver function, decrement the timer by 10 seconds, and provide feedback that the answer was incorrect
      document.getElementById("ans3").onclick = function () {
        quizOver();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
        //if the fourth button is clicked which is an incorrect option, it will run the quizOver function, decrement the timer by 10 seconds, and provide feedback that the answer was incorrect
      document.getElementById("ans4").onclick = function () {
        quizOver();
        secondsLeft = secondsLeft - 10;
        answerAlert.innerText = "Answer: Incorrect"
    }
}

//the quizOver function hides some HTML elements and displays the score card. It displays the user's final score. In the displayed HTML element is an input box for the user to store their score. They input their name and click the submit button.
function quizOver () {
    document.querySelector("#storeScore").hidden = false;
    document.querySelector(".qaDisplay").hidden = true;
    document.querySelector("#counter").hidden = true;
    displayScore.innerText = "Your final score is " + points + " points!"

}

//Once the form is submitted, it stores the stats in the stats object. Then it pushes the object into an array. And this is stored in local storage. It will reset the fields for input and run the displayState button. 
function submitStats() {
    // document.getElementById("userStats").reset();
    
        var stats = {
            score: points,
            name: nameInput.value
        }
        
    highScores.push(stats);
        // console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(stats));
    document.getElementById("userStats").reset();
    displayStat();
}

//this function hides the previous HTML element and shows the high score list element. It saves the values the user entered in local storage and retrieves them to display in the element.  
function displayStat() {
    document.querySelector("#storeScore").hidden = true;
    document.querySelector("#high-score-list").hidden = false;
    var userStats = localStorage.getItem("highScores");
    userStats = JSON.parse(userStats)
    statDisplay.innerText = JSON.stringify(userStats);

}

//when start button is clicked, run the function startQuiz
startButton.addEventListener('click', startQuiz);

//quiz details
var quizContent = [{
    question: "What label is Megan Thee Stallion signed to?",
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
}]


//countdown function
function timer () {
    secondsLeft = secondsLeft - 1
    if (secondsLeft < 120 ) {
        counter.innerHTML = "Counter : " + secondsLeft;
    }

    if (secondsLeft < 1) {
        window.clearInterval(update);
    }
}

update = setInterval("timer()", 1000);
