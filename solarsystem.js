const questions = [
    {
        Question: "Which planet has the largest Asteroid belt?"
    ,answers: [
        { text: "Saturn", correct : true},
        { text: "Venus", correct : false},
        { text: "Jupiter", correct : false},
        { text: "Neptune", correct : false} ,
    ]
    },
    {
        Question: "Which mission of NASA brought the first human to the moon?"
        ,answers: [
            { text: "Apollo program", correct : true},
            { text: "Gemini program", correct : false},
            { text: "Mercury program", correct : false},
            { text: "None of these", correct : false} ,  
    ]
    },
    {
        Question: "Which is the smallest planet in the solar system?"
        ,answers: [
            { text: "Saturn", correct : false},
            { text: "Mercury", correct : true},
            { text: "Venus", correct : false},
            { text: "Mars", correct : false},   
    ]
    },
    {
        Question: "Which planet do the moons Oberon and Titania belong to?"
        ,answers: [
            { text: "Neptune", correct : false}, 
            { text: "Uranus", correct : true},
            { text: "Jupiter", correct : false},
            { text: "Saturn", correct : false},   
    ]
    },
    {
        Question: "What are comets mostly made of?"
        ,answers: [
            { text: "Rusty metal", correct : false},
            { text: "Poisonous liquid", correct : false},
            { text: "Jupiter", correct : false},
            { text: "Dust, rocks, ice", correct : true} ,  
    ]
    },
    {
        Question: "When did  NASA launch its first mission to the Sun?"
        ,answers: [
            { text: "2016", correct : false},
            { text: "2015", correct : false},
            { text: "2017", correct : false},
            { text: "2018", correct : true},   
    ]
    },
    {
        Question: "Which planet is often referred to as Earth's ''sister planet''?"
        
        ,answers: [
            { text: " Mars", correct : false},
            { text: "Venus", correct :true},
            { text: "Mercury", correct : false},
            { text: " Jupiter", correct : false},   
    ]
    },
    {
        Question: "What is the largest moon in the solar system?"
        ,answers: [
            { text: "Titan (Saturn's moon)", correct : false},
            { text: "Ganymede (Jupiter's moon)", correct : true},
            { text: "Luna (Earth's moon)", correct : false},
            { text: "Triton (Neptune's moon)", correct : false},   
    ]
    }
    ,
    {
        Question: "Which planet is often called the ''Ice Giant''?"
        ,answers: [
            { text: "Neptune", correct : false},
            { text: " Uranus", correct : true},
            { text: "Saturn", correct : false},
            { text: "Pluto", correct : false},   
    ]
    }
    ,
    {
        Question: "What is the name of the largest volcano in our solar system, located on Mars?"
        ,answers: [
            { text: "Olympus Mons", correct : true},
            { text: "Mauna Loa", correct : false},
            { text: "Mount St. Helens", correct : false},
            { text: "None of These", correct : false},   
    ]
    }
    ,
    {
        Question: "What is the farthest dwarf planet from the Sun in our solar system?"
        ,answers: [
            { text: "Pluto", correct : false},
            { text: "Makemake", correct : false},
            { text: "Haumea", correct : false},
            { text: "Eris", correct : true},   
    ]
    }
    ,
    {
        Question: "What is the name of the largest moon of Saturn?"
        ,answers: [
            { text: "Europa", correct : false},
            { text: " Ganymede", correct : false},
            { text: "Titan", correct : true},
            { text: " Io", correct : false},   
    ]
    }



];

const questionElement = document.getElementById("Question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-bt");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1 ;
    questionElement.innerHTML =questionNo + "."+ currentQuestion.Question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("bt");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState()
{ 
    nextButton.style.display=" none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;

    });
    nextButton.style.display ="block";


}

function showScore(){
    resetState();
   
    questionElement.innerHTML =`Thank You for playing!!! \n You have gained ${score} stars out of ${questions.length}  stars` ; 
    nextButton.innerHTML= "Play Again";
    nextButton.style.display= "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex< questions.length)
    {handleNextButton();
    }
    else{
        startQuiz();

    }
    
        

})

startQuiz();

