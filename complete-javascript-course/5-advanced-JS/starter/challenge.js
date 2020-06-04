// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


( function() {
    var Answer = function(answer, numberAnswer) {
    this.answer = answer;
    this.numberAnswer = numberAnswer; //1 is correctly, 0 is not
    this.checkSameNumberAnswer = function(selectAnswerUser) {
        return this.answer === selectAnswerUser;
    }
}


var Question = function(question, answers, correctNumberAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctNumberAnswer = correctNumberAnswer;
       
    this.checkUserAnswer = function(selectedAnswerUser) {
        console.log(selectedAnswerUser);
        console.log(this.answers);
        console.log(this.answers[this.correctNumberAnswer].checkSameNumberAnswer(selectedAnswerUser)?'Es correctly!!!':'Is not clorrectly!!!');
    }
    this.printPosiblesAnswers = function() {
        console.log('Question: ' + this.question);
        for(var i = 0; i < this.answers.length; i++) {
            var answer = this.answers[i];
            console.log('Answer ' + i + ': ' + answer.answer);
        }
    }
}

var QuestionManager = function() {
    this.questions = [];
    this.loadQuestions = function() {
         var answers0 = [
            new Answer('Angel', 0),
            new Answer('Julian', 1),
            new Answer('Caballero', 2),
            new Answer('Nerius', 3)
        ];
        var answers1 = [
            new Answer('Argentina', 0),
            new Answer('Cuba', 1),
            new Answer('Colombia', 2)
        ];
        var answers2 = [
            new Answer('Developer', 0),
            new Answer('Architech', 1),
            new Answer('Lawyer', 2)
        ];
        var question1 = new Question("What is may name?", answers0, 3);
        var question2 = new Question("where do you born?", answers1, 1);
        var question3 = new Question('what it\'s you profession?', answers2, 0); 
        this.questions.push(question1);
        this.questions.push(question2);
        this.questions.push(question3);
    }
    this.sendRandomQuestion = function() {
        var randomQuestion = Math.floor(Math.random() * 3);     
        var randomSelectedQuestion = this.questions[randomQuestion];
        randomSelectedQuestion.printPosiblesAnswers();
        var selectedAnswerUser = prompt(randomSelectedQuestion.question);
        if (selectedAnswerUser === 'exit')
            return;
        randomSelectedQuestion.checkUserAnswer(selectedAnswerUser);
        this.sendRandomQuestion();
    }
}

var questionManager = new QuestionManager();
questionManager.loadQuestions();
questionManager.sendRandomQuestion();
}
)();