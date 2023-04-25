// 1
let password = prompt('пароль');
if (password === 'пароль'){
    console.log('Пароль введен верно');
}
else {
    console.log("Пароль введен неправильно");
}

// 2 
let x = Number(prompt('Введите первое число'))
let y = Number(prompt('Введите второе число'))

if (x < y) {
    console.log ('Верно')
} else {
    console.log ('Не Верно' && 10);
} 

// 3
let d = Number(prompt('Введите первое число'))
let e = Number(prompt('Введите второе число'))

if (d < e) {
    console.log ('Верно' || 100)
} else {
    console.log ('Не Верно');
} 

// 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(a > b);

// 5 
let monthNumber = String(prompt('К какому сезону принадлежит месяц?'));

switch (monthNumber) {
    case 'Декабрь':
        console.log('Зима');
        break;
    case 'Январь':
        console.log('Зима');
        break;
    case 'Февраль':
        console.log('Зима');
        break;
    case 'Март':
        console.log('Весна');
        break;
    case 'Апрель':
        console.log('Весна');
        break;
    case 'Май':
        console.log('Весна');
        break;
    case 'Июнь':
        console.log('Лето');
        break;
    case 'Июль':
        console.log('Лето');
        break;
    case 'Август':
        console.log('Лето');
        break;
    case 'Сентябрь':
        console.log('Осень');
        break;
    case 'Октябрь':
        console.log('Осень');
        break;
    case 'Ноябрь':
        console.log('Осень');
        break;

    default: 
        console.log('что то не так');
        break;
}

// 7 
