let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log(selection);
    let selectedQuestionNumber = selection.slice(-1); //slice -1 nimmt den letzten Buchstaben; von answer_4 4 und answer_3 3
    console.log('Variable ist', selectedQuestionNumber);
    console.log(question['right_answer']);
    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Geil richtige Antwort')
        document.getElementById(selection).parentNode.classList.add('bg-success'); //fügt Bootstrap-Klassen dem Elternelement zu
    } else {
        console.log('falsche Antwort')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}