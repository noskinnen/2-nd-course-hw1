// 1
let a = 20;
alert(a);
b = 10;
alert(b);

// 2 
const newLocal = iPhone;
iPhone = "29 июня 2007 года";
alert(iPhone);

// 3
const Brendan = "[BrendanEich]";
alert(Brendan);

// 4
'use strict';
let x = 10;
let y = 2;
alert(`${x} + ${y} = ${x + y}`); // 10 + 2 = 12
alert(`${x} - ${y} = ${x - y}`); // 10 - 2 = 8
alert(`${x} * ${y} = ${x * y}`); // 10 * 2 = 20
alert(`${x} / ${y} = ${x / y}`); // 10 / 2 = 5

// 5 
let result = (2**5);
alert('result');

// 6 
let a = 9;
let b = 2;
alert(`${a} / ${b} = ${a / b}`); // 9 / 2 = 4.5

// 7 
let n = 1;
n += 5; 
n -= 3; 
n *= 7; 
n /= 3; 
n += 1; 
n -= 1; 
alert( n ); // 7

// 8 
let age;
age = prompt('сколько вам лет?');
alert(age);

// 9.0 
const user  = {    
name: "Cаша",
age: 35,
isAdmin: false,
};

user ["city Of Residence"] = "Москва";

delete user["city Of Residence"]

let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);