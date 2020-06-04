/**////////////////////////////
// Lecture: Functions returning functions*//
/**function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');*/
function interviewQuestion(job) {
    return function(name) {
        switch(job) {
            case 'designer':
                console.log(name + ', can you please explain what UX desing is?');
                break;
            case 'teacher':
                console.log('What subject do you teach, ' + name + '?');
                break;
            default:
                console.log('Hello ' + name + ', what do yuo do?');
        }
    }
}

interviewQuestion('teacher')('nerius');
interviewQuestion('designer')('kari');
interviewQuestion('banker')('adri');

/**
IIFE
*/

/*function game() {
    var score = Math.random() * 10
    console.log(score);
    console.log(score >= 5);
}

game();
console.log(score);*/
( function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
)();

( function(goodluk) {
    console.log(goodluk());
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluk());
}
)(function dobleFor() {
    return 4*2;
});
            

            