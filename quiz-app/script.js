const quizData = [{
        question: 'How old is Santi ?',
        a: '18',
        b: '28',
        c: '38',
        d: '3023',

        correct: 'd'
    }, {
        question: 'What is the most optimized front-end tech in 2022?',

        a: 'React',
        b: 'Angular',
        c: 'Flutter',
        d: 'Vue. js',

        correct: 'a'
    }, {
        question: 'Who is the largest planet in our solsar System?',

        a: 'Saturn',
        b: 'Uranus',
        c: 'Earth',
        d: 'Jupiter',

        correct: 'd'
    }, {
        question: 'Who is the largest star in univers?',

        a: 'UY Scuti',
        b: 'Milk Way',
        c: 'Santi',
        d: 'VY Canis',

        correct: 'a'
    }, {
        question: 'How many dimensions of univers are ?',

        a: '7-simplex',
        b: '7-cube',
        c: '7-orthoplex',
        d: '1-one-dimnsion universe',

        correct: 'd'
    }

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});