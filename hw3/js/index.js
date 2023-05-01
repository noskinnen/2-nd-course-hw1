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

// 7 
