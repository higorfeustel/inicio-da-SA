const questions = [
    {
        question: "Qual é o limite de velocidade em uma área escolar?",
        answers: [
            { text: "30 km/h", correct: true },
            { text: "50 km/h", correct: false },
            { text: "60 km/h", correct: false },
            { text: "80 km/h", correct: false }
        ]
    },
    {
        question: "O que significa uma linha amarela contínua na estrada?",
        answers: [
            { text: "Proibido estacionar", correct: false },
            { text: "Proibido ultrapassar", correct: true },
            { text: "Zona de pedestres", correct: false },
            { text: "Permitido estacionar", correct: false }
        ]
    },
    {
        question: "Qual é a ação correta ao ver uma placa de pare?",
        answers: [
            { text: "Diminuir a velocidade", correct: false },
            { text: "Acelerar", correct: false },
            { text: "Parar completamente", correct: true },
            { text: "Olhar e continuar", correct: false }
        ]
    },
    {
        question: "Qual é a distância mínima para sinalizar uma mudança de faixa?",
        answers: [
            { text: "30 metros", correct: false },
            { text: "50 metros", correct: true },
            { text: "10 metros", correct: false },
            { text: "100 metros", correct: false }
        ]
    }
];

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainerElement = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex, score;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    resultContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResult();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResult() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    resultElement.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
