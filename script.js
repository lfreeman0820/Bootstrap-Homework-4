function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 == "False") {
        correct++;
    }

    if (question2 == "Division by zero") {
        correct++;
    }

    if (question3 == "I got this") {
        correct++;
    }

     document.getElementById("submit_after").style.visibility = "visible";
     document.getElementById("number_correct").innerHTML = "You got  " + correct + " correct";
}