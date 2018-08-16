//Function constructor

/* var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*this.calculateAge = function(){
        console.log(2018-
        this.yearOfBirth);
    }
}
//Usando o prototype inherit eu posso retirar o this.calculateAge da var Person
Person.prototype.calculateAge = function (){
    console.log(2018-
    this.yearOfBirth);
};
//function constructors are always with the capital letter at begining (Person for exemple)
//new operator a brand new object is created - objeto novo eh criado com o new
//e depois chama a função Person para preencher tal objeto - com as variaveis apontando para o new
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge(); 
jane.calculateAge();
mark.calculateAge();

*/

//Object.create


//First define object that will act as the prototype
//then we create a new object based on that prototype
//no capital letter because is not function constructor
/* var personProto = {
    calculaAge: function(){
        console.log(2018 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;

var jane = Object.create(personProto, {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
}); */

//Primitives vs objects

//variaveis contendo primitives seguram o conteudo dentro da variavel
//variaveis associadas a objetos contem referencia ao conteudo de onde o objeto eh salvo 

//Primitives
/* var a = 23;
var b = a;
a = 46;
console.log(a); //a = 46
console.log(b); //b = 23 ter mudado a para 46 não afetou o valor da variavel b

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age); //obj1 age = 30
console.log(obj2.age); //obj2 age = 30 */

/*
Functions - A function is an intance of the object type; 
            - A function behaves like any other object;
            - We can store functions in a variable;
            - We can pass a function as an argument to another function;
            - We can return a function from a function. 
*/
/*
var age = 27;
var obj = {
        name: 'Jonas',
        city: 'Lisbon'
};

function change (a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); //age = 27 didint changed because its primitive pois contem um dado e cria uma copia do dado
console.log(obj.city); //obj.city = Sao Francisco changed because its object e contem uma referencia e nao um dado 
*/

//Fazer uma função que determine a idade a partir dos anos de nascimento. Segue abaixo.
//Retornar o valor e dizer se é fullAge ou não
//Dizer o max heart rate de acordo com a idade

//First Class Functions Passing Functions as Arguments
/* 
var years = [1990, 1988, 1976, 2918, 2005, 1911];

function arrayCalc (arr, fn) {
        var arrRes = [];
        for (var i=0; i < arr.length; i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge (el) {
    return 2018 - el;
}

function isFullAge (el){
    return el>= 18;
}

function maxHeartRate (el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67*el));
    } else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge); //store that function into variable
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [28, 39, 42, -900, 13, 107]
console.log(fullAges);
console.log(rates);
*/

//Functions returning functions - diferent interview question for each dif. job
/*
function interviewQuestion(job){
    if (job === 'teacher'){
        return function(name){
            console.log('What do you teach, '+name+'?');
        }
    } else if (job === 'lawyer'){
        return function(name){
            console.log('Can you describe the importance of the constitution for our country, '+name+'?');
        }
    } else {
        return function(name){
            console.log('What do you do, '+name+'?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var lawyerQuestion = interviewQuestion('lawyer');
var homelessQuestion = interviewQuestion('homeless');

teacherQuestion('Mariana');
lawyerQuestion('Rick');
homelessQuestion('Vini');

interviewQuestion('teacher')('Mark'); // vai retornar a mesma coisa do que a var teacherQuestion
*/

//IIFE 
/* 
Serve para criar data privacy e impede que um dado dentro da function
esteja protegido do 'mundo externo'.
Um jogo no qual ganha quem tirar o numero maior ou igual a 5. O primeiro modo
eh sem a privacidade dos dados (da pra ver quanto o player tirou);
ja o segundo eh com a privacidade nos dados (nao da pra ver o numero que o player tirou).*/

/*

function game () {
    var score = Math.random()*10;
    console.log(score >=5);

}
game();//os dados nao estao protegidos

(function (){
    var score = Math.random()*10;
    console.log(score >=5);

})(); //coloca a função entre parentesis e executa com o () no final. dados protegidos

(function (goodLuck){
    var score = Math.random()*10;
    console.log(score >=5 - goodLuck);

})(5); //nesse caso eu crio um cheat que faz com que a pessoa sempre ganhe

*/

//Closures - possibilita que a inner function sempre tenha acesso ás variaveis e parametros da outer function, mesmo que a outer function tenha retornado (return).
/*
function retirement(retirementAge){
    var a = ' a years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
} // nesse caso a function yearOfBirth continuou tendo acesso à var a e ao retirementAge

var retirementUS = retirement(66);
retirementUS(1990);


function interviewQuestion(job){
    return function (name){
    if (job === 'teacher'){
        
            console.log('What do you teach, '+name+'?');
        
    } else if (job === 'lawyer'){
        
            console.log('Can you describe the importance of the constitution for our country, '+name+'?');
        
    } else {
        
            console.log('What do you do, '+name+'?');
        
    }
    }
};

interviewQuestion('teacher')('Kyal');
*/

//Bind, Call and Apply
/*Bind - copia uma function e deixa armazenar em uma variavel
Call - usa uma function que ja existe
Apply - usa uma function que ja existe mas tem q por array []*/
/*
var rick = {
    name: 'Rick',
    age: 29,
    job: 'lawyer',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good '+ timeOfDay + ', Ladies and Gentlemen! I\'m a '+
            this.job+' and my name is '
            +this.name+ '.')
        } else if (style === 'friendly'){
            console.log('Hey, what\'s up? I\'m a '+
            this.job+' and my name is '
            +this.name+ '. '+ timeOfDay+'.')
        }
    }
}

var winnie = {
    name: 'Winnie',
    age: 31,
    job: 'acupunturist',
};

rick.presentation.call(winnie, 'friendly', 'Morning'); //pega emprestado do rick e usa na winnie
rick.presentation.apply(winnie, ['formal', 'afternoon']); //msma coisa que anterior mas usa array

var rickFriendly = 
rick.presentation.bind(rick, 'friendly');

rickFriendly('morning');

var winnieFriendly = 
rick.presentation.bind(winnie, 'friendly');

winnieFriendly('morning');

var years = [1990, 1988, 1976, 2017, 2005, 1911];

function arrayCalc (arr, fn) {
        var arrRes = [];
        for (var i=0; i < arr.length; i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge (el) {
    return 2018 - el;
}

function isFullAge (limit, el){
    return el>= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, 
isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

/////////////////////////////
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

