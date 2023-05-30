// 1 
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ]; 

 console.log(people.sort((a,b) => a.age - b.age))

// 2 
function isPositive(arr) {
return arr.filter((a => a >= 0))
}
function isMale(arr2) {
return arr2.filter((a => (a.gender == "male")))
}
function filter(area,instr) {
return instr(area)
}

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
]; 

console.log(filter(peoples, isMale)); 

// 3
let count = 0;
const intervalId = setInterval(function(){
    console.log(new Date());
    count += 3;
    if (count >= 30) {
        clearInterval(intervalId)
        console.log("30 секунд прошло")
    }
}, 3000) 

// 4 
function delayForSecond(callback) {
	setTimeout(callback,2000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// 5 
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi("Глеб")
});


// GAME: 

// fruct 
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