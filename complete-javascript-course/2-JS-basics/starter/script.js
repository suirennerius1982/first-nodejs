console.log('Hello word!!!');
//var name = prompt("What is your name?");
console.log(name);

/*
Basic operator
*/
var year, yearJohn, yearMark;
ageJohn = 28;
ageMark = 33;
var now = 2020;
var yearJon = now - 28;
var yearMark = now - 33;
console.log(yearJon);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operator

varJohmOlder = ageJohn < ageMark;
console.log(varJohmOlder);


//typeof operator

console.log(typeof varJohmOlder);
console.log(typeof ageJohn);
console.log(typeof "nerius");
var x;
console.log(typeof x);

/**
Operator precedence
*/
var now  = 2020;
var yearNer = 2003;
var fullAge = 18;
var isFullAge = now - yearNer >= fullAge;
console.log('the value should be false: ' + isFullAge);

/*var massMark, massJohn, heightMark, heigthJohn, bmiMark, bmiJonh;
var higherThan;
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heigthJohn = 1.95;
console.log("mark height: " + heightMark);
console.log("Jonh height: " + heigthJohn);
var sqareMark = heightMark ** 2;
var sqareJonh = heigthJohn ** 2;
console.log("Sqare mark height: " + sqareMark);
console.log("Sqare Jonh height: " + sqareJonh);

bmiMark = massMark / sqareMark;
bmiJonh = massJohn / sqareJonh;
higherThan = bmiMark > bmiJonh;
console.log('BMI Mark: ' + bmiMark + ", BMI John: " + bmiJonh);
console.log('Is Marks BMI higher than John\'s?' + higherThan);*/


/**
iff /else sentences
*/

var firstname  = 'nerius'
var civilstatus = 'single';

 if (civilstatus === 'married') {
     console.log(firstname + ' is married');
 } else {
     console.log(firstname + ' will hopefully marry soon:)');
 }

var isMaried = true;
if (isMaried) {
 console.log(firstname + ' is married');
} else {
 console.log(firstname + ' will hopefully marry soon:)');
}

var massMark, massJohn, heightMark, heigthJohn, bmiMark, bmiJonh;
var higherThan;
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heigthJohn = 1.95;
console.log("mark height: " + heightMark);
console.log("Jonh height: " + heigthJohn);
var sqareMark = heightMark ** 2;
var sqareJonh = heigthJohn ** 2;
console.log("Sqare mark height: " + sqareMark);
console.log("Sqare Jonh height: " + sqareJonh);

bmiMark = massMark / sqareMark;
bmiJonh = massJohn / sqareJonh;
if (bmiMark > bmiJonh) {
    console.log('Mark\'s BMI is higher than Jonh\'s.');
} else {
    console.log('Jonh\'s BMI is higher than Mark\'s.');
}

/**
Boolean logic
*/

var firstname = 'Nerius';
var age = 37;
if(age < 13) {
    console.log(firstname + " is a boy.");
} else if(age >= 13 && age < 20) {
    console.log(firstname + ' is a teenger.');
} else if(age >= 20 && age < 30) {
    console.log(firstname + ' is a young man.');
} else {
    console.log(firstname + ' is a man.');
}

/**
ternary operator and swicht statements
*/

var firstName = 'nerius';
var age = 37;
age >= 18? console.log(firstName + ' drinks beer.'):console.log(firstName + ' drinks juice.')

var drinks = age >= 18?'beer':juice;
console.log(drinks);
//switch statements
var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor'://en case do you add alse conditions
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drive an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' desing beautefull websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
        break;
}

/**
Challenge 2: Coding
*/

var avgGameJohnScore = (89 + 150 + 103)/3;
var avgGameMikeScore = (116 + 102 + 123)/3;
var avgGameMaryScore = (97 + 140 + 105)/3;

console.log('Avg John: ' + avgGameJohnScore);
console.log('Avg Mike: ' + avgGameMikeScore);
console.log('Avg Mary: ' + avgGameMaryScore);

if (avgGameJohnScore > avgGameMikeScore) {
    console.log('John has higth score: ' + avgGameJohnScore);
}else if (avgGameMikeScore > avgGameJohnScore){
    console.log('Mike has higth score: ' + avgGameMikeScore);
} else if (avgGameJohnScore === avgGameMikeScore) {
    console.log('Jonh and Mike are the same score');
}

if (avgGameJohnScore === avgGameMikeScore  || avgGameJohnScore === avgGameMaryScore || avgGameMikeScore == avgGameMaryScore) {
    console.log('They are the same score');
} else if (avgGameJohnScore > avgGameMikeScore && avgGameJohnScore > avgGameMaryScore){
    console.log('John has higth score: ' + avgGameJohnScore);
} else if (avgGameMikeScore > avgGameMaryScore) {
    console.log('Mike has higth score: ' + avgGameMikeScore);
} else {
    console.log('Mary has higth score: ' + avgGameMaryScore);
} 

/**
Functions
*/

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJonh = calculateAge(1982);
var ageJane = calculateAge(1989);
var ageMike = calculateAge(1990);
console.log(ageJohn, ageJane, ageMike);

function yearUntilRetirement(year, firstname){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstname + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstname + ' is already retired.');
    }
}


yearUntilRetirement(1982, 'Jonh');
yearUntilRetirement(1989, 'Mike');
yearUntilRetirement(1948, 'Jane');

/**
Function declaration: 
function whatDoYouDo(job, firstName) {}
-------------------------------------------
Function expresion
*/
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
        case 'instructor'://en case do you add alse conditions
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drive an uber in Lisbon.';
        case 'designer':
            return firstName + ' desing beautefull websites.';
        default:
            return firstName + ' does something else.';            
    }
}

console.log(whatDoYouDo('instructor', 'nerius'));
console.log(whatDoYouDo('driver', 'kary'));
console.log(whatDoYouDo('nada', 'Adry'));

/**
Arrays
*/

var names = ['Nerius', 'Kari', 'Charles'];
var years = new Array(1982,1975,1984);
console.log(names[1]);
console.log(name.length);
 //Mute Arrays
names[1] = 'Griselda';
names[names.length] = 'Pabla';
console.log(names);

//Diferents data types
var jonh = ['Jonh', 'Smith', 1990, 'teacher', false];
jonh.push('Blue');
jonh.unshift('Mr.');//add in the bigining
console.log(jonh);
jonh.pop(); //delete to the end of array
jonh.pop();
jonh.shift(); ///delete first element of array
console.log(jonh);
console.log(names.indexOf(23)); //find this element in the array, it's didn't found return -1
var isDesinger = jonh.indexOf('designer') == -1?'Jonh is not a designer':'Jonh is a designer';
console.log(isDesinger);
jonh.push('designer');
var isDesinger = jonh.indexOf('designer') == -1?'Jonh is not a designer':'Jonh is a designer';
console.log(isDesinger);

/**
Coding challenge2
*/

var bills = [124, 48, 268];
var tips = [];
var amounts = [];
var calculateTip = function(amount) {
    if (amount < 50)
        return amount * 0.2;
    if (amount >= 50 && amount <= 200)
        return amount * 0.15;
    if (amount > 200)
        return amount * 0.1;
}

tips.push(calculateTip(bills[0]));
tips.push(calculateTip(bills[1]));
tips.push(calculateTip(bills[2]));

amounts.push(bills[0] + tips[0]);
amounts.push(bills[1] + tips[1]);
amounts.push(bills[2] + tips[2]);

console.log("Tips to pay: " + tips);
console.log("Amounts to pay: " + amounts);

/**
Object and properties
*/

//Object literal
var jonh = {
    firstName: "Jonh",
    lastName: 'Perez',
    isMarried: false,
    birthDay: 1982,
    family: ['Ruben', 'Maria', 'Anyel'],
    job: 'teacher'
};

console.log(jonh);
console.log(jonh.firstName);
console.log(jonh['isMaried']);
var x = 'birthDay';
console.log(jonh[x]);
jonh.job = 'designer';
jonh.isMarried = true;
console.log(jonh);

//new Object sintax
var jane = new Object();
jane.firstName = 'Jane';
jane.isMarried = true;
jane['birthDay'] = 1986;
console.log(jane);

/**
Object Methods
*/

var jonh = {
    firstName: "Jonh",
    lastName: 'Perez',
    isMarried: false,
    birthDay: 1982,
    family: ['Ruben', 'Maria', 'Anyel'],
    job: 'teacher',
    calcAge: function() {
        this.age = 2020 - this.birthDay;
    }
};

jonh.calcAge();
console.log(jonh);

/**
Code challenge4
*/

var jonh = {
    fullName: 'Jonh Smith',
    mass:92,
    heigth: 1.95,
    calculateBmi: function() {
        var sqare = this.heigth ** 2;
        this.bmi = this.mass / sqare;
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Smith',
    mass:78,
    heigth: 1.69,
    calculateBmi: function() {
        var sqare = this.heigth ** 2;
        this.bmi = this.mass / sqare;
        return this.bmi;
    }
}
if(mark.calculateBmi() === jonh.calculateBmi()) {
    console.log('BMIs are the same. There values are = ' + jonh.bmi);
} else if (mark.bmi > jonh.bmi) {
    console.log(mark.fullName + '\'s BMI = ' + mark.bmi + ' is higher than' + jonh.fullName + '\'s BMI = ' + jonh.bmi);
} else {
    console.log(jonh.fullName + '\'s BMI = ' + jonh.bmi + ' is higher than' + mark.fullName + '\'s BMI = ' + jonh.bmi);
}

/**
Coding Challenge 5
*/

var billJonhFamily = {
    bills:[124, 48, 268, 180, 42],
    tipCalc: function() {
        this.tips = [];
        this.amountsPaid = [];
        for(var i = 0; i < this.bills.length; i++) {
             this.tips[i] = this.calculateTip(this.bills[i]);       
             this.amountsPaid[i] = this.tips[i] + this.bills[i];    
        }
        this.calculateAvgTip();
        console.log(this.avgTip);
    },
    calculateTip: function(billItem) {
        if(billItem < 50) {
            return billItem * 0.2;
        } else if (billItem >= 50 && billItem <= 200) {
            return billItem * 0.15;
        } else if (billItem > 200){
            return billItem * 0.10;
        }
    },
    calculateAvgTip: function() {
        this.avgTip = 0;
        var sumTips = 0;
        for(var i = 0; i < this.tips.length; i++) {
            sumTips += this.tips[i];
        }
        this.avgTip = sumTips/this.tips.length;
    }
}

var billMarkFamily = {
    bills:[77, 475, 110, 45],
    tipCalc: function() {
        this.tips = [];
        this.amountsPaid = [];
        for(var i = 0; i < this.bills.length; i++) {
             this.tips[i] = this.calculateTip(this.bills[i]);       
             this.amountsPaid[i] = this.tips[i] + this.bills[i];    
        }
        this.calculateAvgTip();
        console.log(this.avgTip);
    },
    calculateTip: function(billItem) {
        if(billItem < 100) {
            return billItem * 0.2;
        } else if (billItem >= 100 && billItem <= 300) {
            return billItem * 0.10;
        } else if (billItem > 300){
            return billItem * 0.25;
        }
    },
    calculateAvgTip: function() {
        this.avgTip = 0;
        var sumTips = 0;
        for(var i = 0; i < this.tips.length; i++) {
            sumTips += this.tips[i];
        }
        this.avgTip = sumTips/this.tips.length;
    }
}

billJonhFamily.tipCalc();
billMarkFamily.tipCalc();
if (billJonhFamily.avgTip > billMarkFamily.avgTip) {
    console.log("The family that paied the highest tip on average is Jonh Family with avg tips = " + billJonhFamily.avgTip)  ; 
} else if (billMarkFamily.avgTip > billJonhFamily.avgTip) {
    console.log("The family that paied the highest tip on average is Mark Family with avg tips = " + billMarkFamily.avgTip);  
} else if (billJonhFamily.avgTip === billMarkFamily.avgTip) {
    console.log('Family are the same avg tips = ' + billJonhFamily.avgTip);
}
