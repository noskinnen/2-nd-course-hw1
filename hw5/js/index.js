// 1 
function calc(a,b) {
    let sum = a >= b;
    console.log(`меньшее из двух чисел ${sum}`)
}
calc (8,4);
calc (6,6);

// 2 
function sum(n,c) {
    return n - c; 
}
let result = sum ( 2 == 0) ;
console.log(result);

// 3.1 
function number(num) {
  return num * num
}
 
console.log(number(10)) // => 100

// 3.2 
function inputNumber() {
  const str = prompt('Введите число от 0 до 40')
  const num = Number(str)
  if(num >= 0 && num <= 40) {
    return number(num)
  }
  return 'Вы ввели значение не из диапазона'
}
 
console.log(inputNumber()) // => 100


// 4 
function age (question, answer) {
    let userAnswer = prompt(question);
    if (userAnswer === answer) {
        console.log('Верно');
    } else {
        console.log('не верно');
    }
}
age('Сколько Вам лет?', '18');

// 5 
function src(a, b, s) {
    let x;
    switch (s) {
        case 'add':
            x = a + b;
            break;
        case 'subtract':
            x = a - b;
            break;
        case 'multiply':
            x = a * b;
            break;
        case 'divide':
            x = a / b;
            break;
        default:
            x = NaN;
    }
    return x;
}

// 6 
const identity = (v) => v;
identity('wow'); // wow

const sum = identity((a, b) => a + b);
sum(0, 10); 

// 7 
getArea = (number = prompt(" введите радиус! ")) => {
    let sum = 0;
    let ok = false;
    if (number >= 0) {
      sum += Math.PI * Math.pow(number, 2);
      result = "Площадь = " + sum + " см^2";
    } else {
      result = "должно быть числовое значение.";
    }
    return result;
  };
  console.log(getArea());

// 8 
let monthNumber = String(prompt('К какому сезону принадлежит "Месяц"?...'));

switch (monthNumber) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        console.log('Зима');
        break;
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log('Весна');
        break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log('Лето');
        break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log('Осень');
        break;

    default: 
        console.log('что то не так');
        break;
}