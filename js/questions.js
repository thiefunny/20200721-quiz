const questionScheme = {
    question: "main question",
    answers: ["1?", "2?", "3?"],
    trueanswer: 1
}

const question1obj  = Object.create(questionScheme);
question1obj.question = "pytanie z pierwszego objektu";
question1obj.answers = ["question1obj - 1?", "question1obj - 2?", "question1obj - 3?"],
question1obj.trueanswer = 1;

const question2obj  = Object.create(questionScheme);
question2obj.question = "pytanie z pierwszego objektu";
question2obj.answers = ["question2obj - 1?", "question2obj - 2?", "question2obj - 3?"],
question2obj.trueanswer = 2;

const questionsArray = [question1obj, question2obj];

