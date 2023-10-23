let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('whole-container').style.display = 'none';
        document.getElementById('end-screen').style = '';
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = './img/quiz.png';
        document.getElementById('header-image').classList.add('top-image');
    } else {
        let question = questions[currentQuestion];
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;

        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer1'];
        document.getElementById('answer_2').innerHTML = question['answer2'];
        document.getElementById('answer_3').innerHTML = question['answer3'];
        document.getElementById('answer_4').innerHTML = question['answer4'];
        document.getElementById('right-number').innerHTML = currentQuestion + 1;
        document.getElementById('header-image').classList.remove('top-image');
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); //slice -1 nimmt den letzten Buchstaben; von answer_4 4 und answer_3 3
    let idOfRigthAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) { //bei true richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success'); //fügt Bootstrap-Klassen dem Elternelement zu
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRigthAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++; //Erhöhung z.B. von 0 auf 1
    document.getElementById('nextButton').disabled = true;
    resetButtons();
    showQuestion(); //der aktuelle Wert von currentQuestion wird deshalb ohne Parameter weiter gereicht an showQuestion() weil currentQuestion global definiert ist
}

function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = './img/Group 5.png';
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('whole-container').style = '';
    init();

}