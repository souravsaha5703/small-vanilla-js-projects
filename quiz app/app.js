const content=[
    {
        question:"What is the capital of India",
        answers:[
            {
                answer:"Delhi",
                correct:false
            },
            {
                answer:"New Delhi",
                correct:true
            },
            {
                answer:"Mumbai",
                correct:false
            },
            {
                answer:"Kolkata",
                correct:false
            }
        ]
    },
    {
        question:"Who is the current captain of ICT",
        answers:[
            {
                answer:"Virat Kohli",
                correct:false
            },
            {
                answer:"MS Dhoni",
                correct:false
            },
            {
                answer:"Hardik Pandya",
                correct:false
            },
            {
                answer:"Rohit Sharma",
                correct:true
            }
        ]
    },
    {
        question:"What is the cleanest city in India",
        answers:[
            {
                answer:"New Delhi",
                correct:false
            },
            {
                answer:"Indore",
                correct:true
            },
            {
                answer:"Kolkata",
                correct:false
            },
            {
                answer:"Chennai",
                correct:false
            }
        ]
    },
    {
        question:"What is the nation animal of India",
        answers:[
            {
                answer:"Royal Bengal Tigar",
                correct:true
            },
            {
                answer:"Peacock",
                correct:false
            },
            {
                answer:"Elephant",
                correct:false
            },
            {
                answer:"Cow",
                correct:false
            }
        ]
    }
];
let questionIndex=0;
let currentScore=0;

let contentSection=document.getElementById("content");
let startBtn=document.getElementById("start");
let answerSection=document.getElementById("answers");
let nextBtn=document.getElementById("btn");

startBtn.addEventListener("click",startQuiz);

function startQuiz(){
    startBtn.style.display="none";
    nextBtn.style.display="none";
    let currentquestion=content[questionIndex];
    let questionTxt=document.createElement("h2");
    questionTxt.id="quest";
    questionTxt.innerHTML=currentquestion.question;
    answerSection.parentNode.insertBefore(questionTxt,answerSection);

    currentquestion.answers.forEach((answers)=>{
        let answerTxt=document.createElement("button");
        answerTxt.innerHTML=answers.answer;
        answerTxt.classList.add("answer");
        answerSection.appendChild(answerTxt);
        if(answers.correct){
            answerTxt.dataset.correct=answers.correct;
        }

        answerTxt.addEventListener("click",(e)=>{
            if(e.target.dataset.correct=="true"){
                answerTxt.style.backgroundColor="green";
                answerTxt.style.color="white";
                currentScore++;
                setTimeout(()=>{
                    questionTxt.style.display="none";
                    while(answerSection.firstChild){
                        answerSection.removeChild(answerSection.firstChild);
                    }
                    let nextQuestionTxt=document.createElement("h4");
                    nextQuestionTxt.innerHTML="Go to next Question";
                    contentSection.appendChild(nextQuestionTxt);
                    // nextBtn.style.display="block";
                    nextQuiz(nextQuestionTxt);
                },2000);
            }else{
                answerTxt.style.backgroundColor="red";
                answerTxt.style.color="white";
                setTimeout(()=>{
                    questionTxt.style.display="none";
                    while(answerSection.firstChild){
                        answerSection.removeChild(answerSection.firstChild);
                    }
                    let nextQuestionTxt=document.createElement("h4");
                    nextQuestionTxt.innerHTML="Go to next Question";
                    contentSection.appendChild(nextQuestionTxt);
                    // nextBtn.style.display="block";
                    nextQuiz(nextQuestionTxt);
                },2000);
            }
        });
    });
}

function nextQuiz(txt){
    questionIndex++;
    if(questionIndex<content.length){
        // nextBtn.style.display="none";
        contentSection.removeChild(txt);
        startQuiz();
    }else{
        let score=document.createElement("h3");
        score.innerHTML=`Score is ${currentScore}`;
        score.style.fontSize="2rem";
        contentSection.removeChild(txt);
        contentSection.appendChild(score);
        nextBtn.style.display="block";
        nextBtn.innerHTML="Play Again";
        nextBtn.addEventListener("click",()=>{
            questionIndex=0;
            currentScore=0;
            contentSection.removeChild(score);
            startQuiz();
        });
    }
}
