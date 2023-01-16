import chemicalElements from './periodictable.json' assert {type: 'json'};

const period = document.querySelector('#period');
const group = document.querySelector('#group');
const symbol = document.querySelector('#symbol');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const form = document.querySelector('form');
const result = document.querySelector('#result');

function quizCreator(element) {
    period.innerHTML = `원소명: ${element.korean}`;
    group.innerHTML = `번호: ${element.number}`;
    symbol.innerHTML = `기호: ${element.symbol}`;
}

function checkAnswer(element) {
    if (answer1.value == element.period && answer2.value == element.group) {
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