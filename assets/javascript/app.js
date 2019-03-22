// $(document).ready(function () {
//declaring some variables
var rightAnswer;
var wrongAnswer;
var questionsArray = ["what is Abbi's full name?", "Where did Ilana go to college?", "What is Abbi's roomate's name?", "What is the name of Lincoln's Blog?", "What does Abbi promise to get Bevers if he pretends to be Jeremy?", "What is Garol eating when Abbi gets to the distribution center to pick Jeremy's package?", "What does Ilana get Abbi for her 30th birthday? ", "What was the source of the funky smell in Ilana's Apartment?", "What does Ilana call her bike?", "What is Ilana alergic to?"]//should i put the questions into an array?
var answersArray = ["Abbi Gary Anna Abrams", "NYU", "Melody", "The Al-Dente Dentist", "A rotisserie chicken", "Yogurt", "A video montage of Abbi's butt", "an everything bagel with cream cheese", "Bike-al Jackson", "Shell Fish"];
var alottedAnswerTime = 30;//answer time for each of the questions before it moves on to the next one
// var showQuestion//not exactly sure why i need this...
var counter = 0
var showQuestion;

function start () {
    // displays the first question
    displayQuestion();
    counter++;
    setInterval(twentySeconds, 1000);
}

$("#start").on("click", start);
//this snippet of code picks a  question and the corresponding answer from their respective arrays and displays it in the DOM
//*** could this be a function??

//     var questionNumber= [Math.floor(Math.random()* questionsArray.length)];

function displayQuestion() {
    questionDisplay = document.getElementById("questionGoesHere");
    questionDisplay.textContent = questionsArray[counter];

    answerDisplay = document.getElementById("answerChoicesgoHere");
    answerDisplay.textContent = answersArray[counter]
}

// console.log(questionsArray[counter]);
// console.log(answersArray[counter]);



function twentySeconds() {
    displayQuestion();
    counter++;
    // questionDisplay = document.getElementById("questionGoesHere");
    // questionDisplay.textContent = questionsArray[counter];

    // answerDisplay = document.getElementById("answerChoicesgoHere");
    // answerDisplay.textContent = answersArray[counter]

    // counter++
}









    // $(document.body).on("click", "#start", function () {
    //     //StartTrivia

    //     function startTrivia() {
    //         console.log("starting the trivia game")

    //         alert("hiiiii!")
    //    

        //when the user clicks start...
        //the new layout wll appear
        //the first question and the possible answers will appear 
        //the timer will start

        //On the first page...
        //if there is time on the clock and the user clicks on the button with the CORRECT answer it'll show the correct answer page
        //if the user clicks on the WRONG with time on the clock, then it will take them to the wrong answer page
        //if the user runs out of time, move on to the next page
        //this needs to repeat until all the questions have been answered

        //On the last page
        //show the total of correct questions
        //show the total incorrect questions
        //shows the number of unasnwered questions
        //has a button that restarts the game


        // //score variables
            // var userScoredRight;//this will keep track of how many answers the user got right
            // var userScoredWrong;//this will keep track of how many answers the user got wrong











    // });
    //  array