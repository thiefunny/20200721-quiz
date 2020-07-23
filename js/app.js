const questionScheme = {
    question: "main question",
    answers: ["1?", "2?", "3?"],
    trueanswer: 1
}

const question1obj = Object.create(questionScheme);
question1obj.question = "pytanie z pierwszego objektu";
question1obj.answers = ["question1obj - 1?", "question1obj - 2?", "question1obj - 3?"],
    question1obj.trueanswer = 1;

const question2obj = Object.create(questionScheme);
question2obj.question = "pytanie z drugiego objektu";
question2obj.answers = ["question2obj - 1?", "question2obj - 2?", "question2obj - 3?", "question2obj - 4?"],
    question2obj.trueanswer = 2;

const question3obj = Object.create(questionScheme);
question3obj.question = "pytanie z trzeciego objektu";
question3obj.answers = ["question3obj - 1?", "question3obj - 2?", "question3obj - 3?", "question3obj - 4?", "question3obj - 5?"],
    question3obj.trueanswer = 3;

const questionsArray = [question1obj, question2obj, question3obj];

const data = {
    sum: 0,
    questionNumber: 0
}

const submitButton = document.querySelector(".next");
const resetButton = document.querySelector(".reset");
const radio = document.querySelectorAll("input");
const h1El = document.querySelector("h1");
const ulEl = document.querySelector("ul");
const progressCounter = document.querySelector(".progress__counter");
let liCreate = document.createElement("li");
let labelCreate = document.createElement("label");
let inputCreate = document.createElement("input");

// <li class="li"><label for="radiobutton1"><input type="radio" id="radiobutton1" name="answers">question1</label><i></i></li>

load = () => {
    h1El.innerHTML = questionsArray[data.questionNumber]['question'];
    progressCounter.innerHTML = `${data.questionNumber+1} of ${questionsArray.length}`;

    liCreate.setAttribute("class", "li");
    labelCreate.setAttribute("for", `radiobutton${data.questionNumber}`);
    inputCreate.setAttribute("type", "radio");
    inputCreate.setAttribute("id", `radiobutton${data.questionNumber}`);
    inputCreate.setAttribute("name", `answers`);
    liCreate.appendChild(labelCreate);
    ulEl.appendChild(liCreate);
    labelCreate.appendChild(inputCreate);
    labelCreate.insertAdjacentHTML('beforeend', "AAAAA");
}

load();

sumfunc = () => {
    // console.log(questionsArray[data.questionNumber]);
    data.sum++
}

next = () => {
    data.questionNumber++;
    // console.log(data.questionNumber);
    load();
}

reset = () => {
    data.sum = 0;
    data.questionNumber = 0;
    load();
}

submitButton.addEventListener("click", function () {

    sumfunc();
    next();

})

resetButton.addEventListener("click", function () {

    reset();
})