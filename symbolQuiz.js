import chemicalElements from './periodictable.json' assert {type: 'json'};

const period = document.querySelector('#period');
const group = document.querySelector('#group');
const symbol = document.querySelector('#symbol');
const answer = document.querySelector('#answer');
const form = document.querySelector('form');
const result = document.querySelector('#result');

function quizCreator(element) {
    period.innerHTML = `주기: ${element.period}`;
    group.innerHTML = `족: ${element.group}`;
    symbol.innerHTML = `원자번호: ${element.number}`;
}

function checkAnswer(element) {
    if (answer.value == element.symbol) {
        result.innerHTML = "⭕정답!";
    } else {
        result.innerHTML = "❌오답!";
    }
    

}

function init() {
    const randomElement = chemicalElements[Math.floor(Math.random()*20)];
    quizCreator(randomElement);

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        checkAnswer(randomElement);
    });

}

init()