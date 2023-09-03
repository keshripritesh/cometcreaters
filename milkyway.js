const questions = [
    {
        Question: "Which type of star is believed to be the most abundant in the Milky Way?"
    ,answers: [
        { text: " Red dwarfs", correct : true},
        { text: "White dwarfs", correct : false},
        { text: "Supergiants", correct : false},
        { text: "Neutron stars", correct : false} ,
    ]
    },
    {
        Question: "What is the term for the process by which a star, more massive than our Sun, ends its life in a massive explosion?"
        ,answers: [
            { text: "Supernova", correct : true},
            { text: "Solar flare", correct : false},
            { text: "Nebular collapse", correct : false},
            { text: "Stellar fusion", correct : false} ,  
    ]
    },
    {
        Question: "What is the name of the interstellar cloud of gas and dust where new stars are born?"
        ,answers: [
            { text: " Hubble Space", correct : false},
            { text: "Oort Cloud", correct : false},
            { text: "Orion Nebula", correct : true},
            { text: "Event Horizon", correct : false},   
    ]
    },
    {
        Question: "Approximately how many Earth years does it take for the Sun to complete one orbit around the center of the Milky Way?"
        ,answers: [
            { text: "10 million years", correct : false}, 
            { text: "100 million years", correct : true},
            { text: "1 billion years", correct : false},
            { text: "10 billion years", correct : false},   
    ]
    },
    {
        Question: "Which mission, launched by the European Space Agency (ESA), is designed to map the Milky Way's stars in unprecedented detail?"
        ,answers: [
            { text: "Hubble Space Telescope", correct : false},
            { text: "Kepler Space Telescope", correct : false},
            { text: "Chandra X-ray Observatory", correct : false},
            { text: "Gaia", correct : true} ,  
    ]
    },
    {
        Question: "In the Milky Way, what is the approximate distance from the Sun to the galactic center?"
        ,answers: [
            { text: "10,000 light-years", correct : false},
            { text: "25,000 light-years", correct : true},
            { text: "50,000 light-years", correct : false},
            { text: "100,000 light-years", correct : false},   
    ]
    }
    ,
    {
        Question: "Which region of the Milky Way is characterized by a high concentration of older stars and a central bulge?"
        ,answers: [
            { text: "Galactic Arm", correct : false},
            { text: "Galactic Halo", correct : false},
            { text: "Galactic Disk", correct : false},
            { text: " Galactic Bulge", correct : true},   
    ]
    }
    ,
    {
        Question: "What is the name of the process by which two galaxies, like the Milky Way and Andromeda, slowly gravitate towards each other and will eventually collide?"
        ,answers: [
            { text: "Galactic fusion", correct : false},
            { text: "Galactic cannibalism", correct : false},
            { text: " Galactic collision", correct : false},
            { text: "Galactic merger", correct : true},   
    ]
    },
    {
        Question: "What type of galaxy is the Milky Way?"
        ,answers: [
            { text: " Elliptical Galaxy", correct : false},
            { text: " Irregular Galaxy", correct : false},
            { text: "Spiral Galaxy", correct : true},
            { text: " Dwarf Galaxy", correct : false},   
    ]
    },
    {
        Question: "What is the name of the supermassive black hole at the center of the Milky Way?"
        ,answers: [
            { text: "VY Canis Majoris", correct : false},
            { text: "Sagittarius A*", correct : true},
            { text: "Alpha Centauri", correct : false},
            { text: "Andromeda", correct : false},   
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

