// 1 
let str = "js" ;
str = str.toUpperCase();
console.log(str);

// 2 
const arr1 = ['Кошка', 'Кит', 'Комар', 'Носорог'] ;

const arr2 = ['яблоко', 'груша', 'гриб', 'огурец'] ;

const arr3 = ['Дом', 'Банк', 'Больница', 'Театр'] ;

const arrResult = []; 

function searchStart(arr, search) {
    let searchArr = [];

    arr.forEach((arr) => {
        if (arr.toLowerCase().startsWith(search.toLowerCase())) {
            searchArr.push(arr);
        }
    }) 
    return console.log(searchArr);
}
searchStart(arr1, 'ко');
searchStart(arr2, 'гру');
searchStart(arr3, 'кино');

// 3
let number = 32.58884;

let roundDown = Math.floor(number);
let roundUp = Math.ceil(number);
let roundNearest = Math.round(number);

console.log(roundDown, roundUp, roundNearest)

// 4 
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Минимальное число: ${min}`);
console.log(`Максимальное число: ${max}`);

// 5 
function randomNumber(min, max) {
    return Math.round(Math.random() * (min - max)) + max ;
} 

console.log(randomNumber(1, 10))

// 6 
function getRandomArr(n) {
    const getArr = [];

    for (let i = 0; i < n / 2 ; i ++) {
        getArr.push(Math.floor(Math.random() * (n + 1)));
    } 
    return getArr;
}

console.log(getRandomArr(7));
console.log(getRandomArr(12));

// 7 
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min ;
} 

console.log(getRandomNumber(1, 30));

// 8 
let currentDate1 = new Date();

console.log(currentDate1);

// 9
let currentDate = new Date();
let nextDate = new Date();
let daysToAdd = 73;

nextDate.setDate(currentDate.getDate() + daysToAdd);
nextDate.toLocaleTimeString('ru-RU');

console.log(nextDate);

// 10
function formateDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `Дата: ${day} ${month} ${year}: ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
} 

const currentDates = new Date();

console.log(formateDate(currentDates));

// 11 fruct
const fructShow = () => {
    const fruct = ['яблоко', 'груша', 'банан', 'виноград', 'апельсин', 'мандарин'];

    alert(fruct.sort(() => Math.random() - 0.5));
    let answerOne = prompt('Чему равнялся первый элемент массива?');
    let answerTwo = prompt('Чему равнялся последний элемент массива?');
    if (answerOne == fruct[0] && answerTwo == fruct[fruct.length - 1]) {
        return alert('Поздравляю! Вы угадали!');
    } else if (answerOne === fruct[0] || answerTwo === fruct[fruct.length - 1]) {
        return alert('Вы были близки к победе!');
    } else {
        return alert('Не правильно!');
    }
}

// seasons
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