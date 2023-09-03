const questions = [
    {
        Question: "What is the estimated mass of the supermassive black hole at the center of the Milky Way?"
    ,answers: [
        { text: "10,000 solar masses", correct : false},
        { text: " 100,000 solar masses", correct : false},
        { text: "1 million solar masses", correct : true},
        { text: "1 billion solar masses", correct : false} ,
    ]
    },
    {
        Question: "What is the name of the phenomenon where a massive star collapses under its own gravity, forming a black hole?"
        ,answers: [
            { text: "Redshift", correct : false},
            { text: "Singularity", correct : true},
            { text: "Event horizon", correct : false},
            { text: "Gravitational lensing", correct : false} ,  
    ]
    },
    {
        Question: "What is black hole primarily defined by?"
        ,answers: [
            { text: "Its intense gravitational pull", correct : true},
            { text: "Its dark black color", correct : false},
            { text: "its rapid rotation", correct : false},
            { text: "Its high temperature", correct : false},
        ]
    },
    {
        Question: "What is the boundary surrounding a black hole from which nothing can escape called?"
        ,answers: [
            { text: "Event horizon", correct : true},
            { text: "Singularity", correct : false},
            { text: "Ergosphere", correct : false},
            { text: "Photon sphere", correct : false},
        ]
    },
    {
        Question: "Which of the following celestial objects is most likely to become a black hole at the end of its life cycle?"
        ,answers: [
            { text: "White dwarf", correct : false},
            { text: "Red giant star", corect : true},
            { text: "Neutron star", correct : false},
            { text: "Brown dwarf", correct : false},
        ]
    },
    {
        Question: "What happens to time near a black hole?"
        ,answers: [
            { text: "Time speeds up", correct : false},
            { text: "Time slows down", correct : true},
            { text: "Time remains the same", correct : false},
            { text: "Time becomes erractic", correct : false},
        ]
    },
    {
        Question: "Who first predicted the existence of black holes based on Einstein's theory of general relativity?"
        ,answers: [
            { text: "Stephen Hawking", correct : false},
            { text: "Carl Sagan", correct : false},
            { text: "Albert Einstein", correct : false},
            { text: "John Michell", correct : true},
        ]
    },
    {
        Question: "What is the name of the phenomenon where a black hole's gravity causes the bending of light, making objects behind it appear distored or duplicated?"
        ,answers: [
            { text: "Gravitational lensing", correct : true},
            { text: "Event horizon effect", correct : false},
            { text: "Dark matter effect", correct : false},
            { text: "Time dilation", correct : false},
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

