let questions = [];
let currentQuestionIndex = 0;

async function loadQuestions() {
    try {
        const response = await fetch('questions.csv');
        if (!response.ok) {
            throw new Error('Failed to fetch questions');
        }
        const data = await response.text();
        questions = parseCSV(data);
        loadQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to fetch questions. Please try again later.');
    }
}

function parseCSV(data) {
    const lines = data.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentline[j].trim();
        }
        result.push(obj);
    }
    return result;
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = question[`option${index + 1}`];
    });
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("explanation-container").classList.add("hidden");
}

function selectOption(index) {
    const question = questions[currentQuestionIndex];
    if (index === parseInt(question.correct)) {
        document.getElementById("explanation").textContent = question.explanation;
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("explanation-container").classList.remove("hidden");
    } else {
        alert("Incorrect! Please try again.");
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("You have completed the quiz!");
        restartQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestions);
