const questionScheme = {
    question: "",
    answers: [],
    trueanswer: 1
}

const question1obj = Object.create(questionScheme);
question1obj.question = "Jak ma na imię Mikołaj?";
question1obj.answers = ["Kacper", "Marcin", "Mikołaj", "Filip"],
    question1obj.trueanswer = 2;

const question2obj = Object.create(questionScheme);
question2obj.question = "Gdybyś był wilkiem, to kim byś był?";
question2obj.answers = ["Słoniem", "Wilkiem", "Słoniem"],
    question2obj.trueanswer = 1;

const question3obj = Object.create(questionScheme);
question3obj.question = "Co lubisz na deser?";
question3obj.answers = ["tylko to", "tego nie", "to jest ohydne", "tego bym nie dotknął, choćbym się ze$ał", "to jest na drugim miejscu"],
    question3obj.trueanswer = 0;

const questionsArray = [question1obj, question2obj, question3obj];

const data = {
    sum: 0,
    questionNumber: 0,
    radioChecked: 0
}

const submitButton = document.querySelector(".next");
const resetButton = document.querySelector(".reset");
const h1El = document.querySelector("h1");
const ulEl = document.querySelector("ul");
const fieldEl = document.querySelector("fieldset");
const progressCounter = document.querySelector(".progress__counter");

load = () => {

    h1El.innerHTML = questionsArray[data.questionNumber]['question'];
    progressCounter.innerHTML = `${data.questionNumber+1} of ${questionsArray.length}`;

    ulEl.innerHTML = '';

    let liElements = [];
    let labelElements = [];
    let inputElements = [];

    for (let i = 0; i < questionsArray[data.questionNumber].answers.length; i++) {

        liElements[i] = document.createElement("li");
        labelElements[i] = document.createElement("label");
        inputElements[i] = document.createElement("input");

        ulEl.appendChild(liElements[i]);
        liElements[i].appendChild(labelElements[i]);
        labelElements[i].appendChild(inputElements[i]);

        liElements[i].setAttribute("class", "li");
        labelElements[i].setAttribute("for", `radiobutton${i}`);
        inputElements[i].setAttribute("type", "radio");
        inputElements[i].setAttribute("id", `radiobutton${i}`);
        inputElements[i].setAttribute("name", `answers`);
        inputElements[i].setAttribute("value", `${i}`);
        labelElements[i].insertAdjacentHTML('beforeend', `${questionsArray[data.questionNumber].answers[i]}`);

    }

    submitButton.classList.remove("hide");
    fieldEl.classList.remove("hide");
    resetButton.innerHTML = "zacznij test jeszcze raz"

}

load();

calculate = () => {
    const radio = document.querySelectorAll("input");
    for (let elem of radio) {

        if (elem.checked) {
            data.radioChecked = Number(elem.value);
        } else {
            data.radioChecked = null
        }

        if (data.radioChecked === questionsArray[data.questionNumber].trueanswer) {
            console.log('HURA');
            data.sum++
    }
    console.log(data.sum);
}}

results = () => {
    h1El.innerHTML = `KONIEC TESTU`;
    progressCounter.innerHTML = `Twój wynik to ${Math.round(data.sum / questionsArray.length * 100)}%`;
    submitButton.classList.add("hide");
    fieldEl.classList.add("hide");
    resetButton.innerHTML = "CHCĘ JESZCZE RAZ!!!"
}

next = () => {
    console.log(data.questionNumber, questionsArray.length)
    if (data.questionNumber < questionsArray.length-1) {
    data.questionNumber++;
    load();
    }
    else {
        results()
    }
}

reset = () => {
    data.sum = 0;
    data.questionNumber = 0;
    load();
}

submitButton.addEventListener("click", function () {

    calculate();
    next();

})

resetButton.addEventListener("click", function () {

    reset();
    
})