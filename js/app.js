const questionScheme = {
    question: "",
    answers: [],
    trueanswer: 1
}

const question1obj = Object.create(questionScheme);
question1obj.question = "pytanie z pierwszego objektu";
question1obj.answers = ["question1obj - 1?", "question1obj - 2?", "question1obj - 3?"],
    question1obj.trueanswer = 0;

const question2obj = Object.create(questionScheme);
question2obj.question = "pytanie z drugiego objektu";
question2obj.answers = ["question2obj - 1?", "question2obj - 2?", "question2obj - 3?", "question2obj - 4?"],
    question2obj.trueanswer = 1;

const question3obj = Object.create(questionScheme);
question3obj.question = "pytanie z trzeciego objektu";
question3obj.answers = ["question3obj - 1?", "question3obj - 2?", "question3obj - 3?", "question3obj - 4?", "question3obj - 5?"],
    question3obj.trueanswer = 2;

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

}

load();

calculate = () => {
    const radio = document.querySelectorAll("input");
    for (let elem of radio) {

        if (elem.checked) {

            data.radioChecked = Number(elem.value);
            // console.log(`checked ${elem.value}`)

        } else {
            
            data.radioChecked = null

        }
        // console.log(`data.radioChecked = ${data.radioChecked}`)
        // console.log(`questionsArray[data.questionNumber].trueanswer = ${questionsArray[data.questionNumber].trueanswer}`)
        if (data.radioChecked === questionsArray[data.questionNumber].trueanswer) {
            console.log('HURA');
            data.sum++
            
        // } else {
            // console.log("bzik")
        // }

    }
    console.log(data.sum);
}}

next = () => {
    data.questionNumber++;
    // console.log(data.questionNumber);
    // calculate();
    load();
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