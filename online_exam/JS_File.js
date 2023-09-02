
const quizData=[
    {
        question:"What does HTML Stands for for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "HyperText Machine Language",
        d: "HyperText Treanfer Protocol",
        correct:"a",
    },
    {
        question:"what does CSS stands for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheet",
        d: "Cascading Style Ship",
        correct:"b"
    },
    {
        question:"Which language runs in a Web browser?",
        a: "Java",
        b: "Python",
        c: "Javascript",
        d: "C",
        correct:"c",
    },
    {
        question:"Where is a correct place to insert a Javascript?",
        a: "Anywhere",
        b: "The <body> section",
        c: "The <head> section",
        d: "Both <head> section and <body> section",
        correct: "d",
    },
    {
        question:" Which HTML tag is used to define a internal style sheet? ",
        a: "<script>",
        b: "<style>",
        c: "<CSS>",
        d: "<css_sheet>",
        correct: "b",
    },
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbtn=document.getElementById('submit')
let currentQuiz=0
let score=0
loadQuiz() 
function loadQuiz(){
    deselectAnswers()
    const currentQuizData= quizData[currentQuiz]
    console.log(questionEl);
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
    
}
submitbtn.addEventListener('click', ()=> {
    const answer=getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
        score++
        }
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=`
        <h2>You answerd ${score}/${quizData.length} questions correctly</h2>
        <button onClick="location.reload()">Reload</button>
        <button onClick="window.location.href='index.html';">Home</button>

        `
        }
    }
})
