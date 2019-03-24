
//declaring some variables
//counter goes through the array index
var counter = 0
//this is the set length of time
var timer = 20;


var timeRemaining;


var questionsArray = [
    {
        question: "What is Abbi's full name?",
        answer: [
            {value: "Abbi Gary Anna Abrams", correct: true},
            {value: "Abbi Abrams", correct: false},
            {value: "Abbigail Marie Abrams", correct: false},
            {value: "Abbi Garol Abrams", correct: false},
        ]
    },
        {question: "Where did Ilana go to college",
        answer: [
            {value: "Columbia", correct: false},
            {value: "Yale", correct: false},
            {value: "NYU", correct: true},
            {value: "Hunter College", correct: false},
        ]
        },
        {question: "What is Abbi's roomate's name?",
        answer: [
            {value: "Melissa", correct: false},
            {value: "Melanie", correct: false},
            {value: "Melodie", correct: true},
            {value: "Marissa", correct: false},
        ]
        },
        {question: "What is the name of Lincoln's Blog?",
        answer: [
            {value: "The Lincoln bLOGger", correct: false},
            {value: "The Al-Dente Dentist", correct: true},
            {value: "The AL-Dentist", correct: false},
            {value: "Licoln's Blog", correct: false},
        ]
        },
        {question: "What does Abbi promise to get Bevers if he pretends to be Jeremy?",
        answer: [
            {value: "A block of cheese", correct: false},
            {value: "A Costco Rotisserie Chicken", correct: true},
            {value: "A bag of shredded Cheese ", correct: false},
            {value: "Tacos", correct: false},
        ]
        },
        {question: "What is Garol eating when Abbi gets to the distribution center to pick Jeremy's package?",
        answer: [
            {value: "Jell-O", correct: false},
            {value: "Cereal", correct: false},
            {value: "Feta cheese crumbs", correct: false},
            {value: "Yogurt", correct: true},
        ]
        },
        {question:"What does Ilana get Abbi for her 30th birthday?",
        answer: [
            {value: "Jew-ess hoop earrings", correct: false},
            {value: "A hair wig phone case", correct: false},
            {value: "A coupon Book", correct: false},
            {value: "A video montage of Abbi's butt", correct: true},
        ]
        },
        {question:"What was the source of the funky smell in Ilana's Apartment?",
        answer: [
            {value: "Jaime's smelly socks", correct: false},
            {value: "An everything bagel with cream cheese ", correct: true},
            {value: "Ilana' foot shavings", correct: false},
            {value: "a left over vegetarian sandwich", correct: false},
        ]
    },
        {question:"What is Ilana alergic to?",
        answer: [
            {value: "Bananas", correct: false},
            {value: "Shell Fish", correct: true},
            {value: "Figs", correct: false},
            {value: "yellow dye #2", correct: false},
        ]
        },
        {question: "What does Ilana call her bike?",
        answer: [
            {value: "Bicycle Jackson", correct: false},
            {value: "Bike-al Jackson", correct: true},
            {value: "Bike Jones", correct: false},
            {value: "Bike-al J. Fox", correct: false},
        ]
        },
        // {question: "What does Ilana call her bike?",
        // answer: [
        //     {value: "Bicycle Jackson", correct: false},
        //     {value: "Bike-al Jackson", correct: true},
        //     {value: "Bike Jones", correct: false},
        //     {value: "Bike-al J. Fox", correct: false},
        // ]
        // },
    ]
    

function start () {
    // displays the first question
    // timeRemaining=timerLength
    console.log("starting quiz.....")
    setInterval(twentySeconds, 1000)
    displayQuestion();
    counter++;
    displayTimer()
    console.log(timer)
    
}


$("#start").on("click", start);




//this function displays the the question and the answer
function displayQuestion() {
    //to-do make sure counter isnt longer than the array length (if statement)
    var questionDisplay = document.getElementById("questionGoesHere");
    questionDisplay.textContent = questionsArray[counter].question;

    var answerDisplay = document.getElementById("answerChoicesgoHere");

    questionsArray[counter].answer.forEach(function(answer) {

        var answerEl = document.createElement('p')
        
        answerEl.textContent = answer.value
       
        answerDisplay.append(answerEl)
        
        console.log(answer.value)
        
       
    })
    console.log("NEXT QUESTION....................")
   
    //nextQuestion function cant go above this line.  BAD THINGS HAPPEN!
    
}


//    this function displays the next question after a certain amount of time
   function nextQuestion() {
       $('#questionGoesHere').empty()
       $('#answerChoicesgoHere').empty()
        

    displayQuestion();

//     console.log(nextQuestion);
}

function twentySeconds(){

    nextQuestion()
    counter++
}
function displayTimer(){
       timerDisplay = document.getElementById("displayTimer");
       timerDisplay.textContent = "timer:" + timer;
        timer--
    }
   

// function count(){
//     timer--
//     if (timer === 0 ){
// showResult("time up")

    // }
// }
// function showResult(feedback){
// //did user get the question right or wrong
// //from user click or time up


// }

    
    
 
    //this will start the quiz all over
//     function reset (){
//         if (counter === questionsArray.length) {
//             counter = 0;
        
//     }
// }
    











   

      