// 1 
function calc(a,b) { 
    return a < b ? a : b; 
} 
    console.log(calc(8,4)); 
    console.log(calc(6,6)); 

// 2 
function numb(number) {
    return number % 2 == 0 ? "четное" : "нечетное" ;
}
 console.log(numb(4));
 console.log(numb(9));

// 3.1
function number(num) {
  return num * 2;
}
console.log(number(10))

// 3.2 
function inputNumber(number) {
console.log (number ** 2);
} 

// 4 
function userAge() {
    let age = prompt("Сколько Вам Лет");
    if (age < 0) {
        return ("Вы ввели неправильное значение")
    } else if (age <= 12) {
        return ("Привет, друг!")
    } else {
        return ("Добро пожаловать!")
    }
} 
alert (userAge())

// 5 
function mult (c,f) {
    if (isNaN(c) || isNaN(f)) {
        return "Одно или оба значения не являются числом"
    } else {
        return c * f 
    }
}
console.log(mult(24,6))
console.log(mult("N","D"))

// 6 
function cubeNumber () {
    const number = prompt ("Введите число:", "");
    if (isNaN(number)) {
        return "Переданные параметры не являются числом";
    } else {
        const resultNumber = number ** 3 ;
        return `${number} в кубе равняется ${resultNumber}`; 
    }
}
console.log(cubeNumber());
  

// 7.1
let circle1 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    } , 
    getPerimetr: function () {
        return 2 * Math.PI * this.radius;
    }
}

let circle2 = {
    radius: 4,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    } , 
    getPerimetr: function () {
        return 2 * Math.PI * this.radius;
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimetr());

console.log(circle2.getArea());
console.log(circle2.getPerimetr());

// 7.2
function getArea() {
    return Math.PI * this.radius **2;
}

function getPerimetr() {
    return 2 * Math.PI * this.radius;
}

let Circle1 = {
    radius: 7, 
    getArea, 
    getPerimetr,
}

let Circle2 = {
    radius: 4, 
    getArea, 
    getPerimetr,
}


// 8 
function seasons (month) {
    month = Number(prompt("Введите номер месяца"));
    if (month > 12 || isNaN(month) || month == false) {
        let error = confirm("Такого месяца не существует! Или вы ввели не число.\n Повторим?");
        if (error == true) {
            seasons();
        } else {
            return 
        }
    } else if (month === 1 || month === 2 || month === 12) {
        alert("Зима");
    } else if (month >= 3 && month <= 5) {
        alert("Весна");
    } else if (month >= 6 && month <= 8) {
        alert("Лето");
    } else {
        alert("Осень");
    };
    let repeat = confirm("Отлично! \n Сыграем еще раз?");
    if (repeat == true) {
        seasons();
    } else (alert("До встречи!"));
} 