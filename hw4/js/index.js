// // 1
// let i = 1;

// let n = Number(prompt('напиши цифру 2 и я напишу слово ПРИВЕТ ! 2 раза'));

// while (i <= n) {
//     alert('ПРИВЕТ !');
//     i++;
// };

// // 2 
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 6);


// // 3
// let i = 7;

// do {
//     console.log(i);
//     i++;
// } while (i < 23);

// 4
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
  };

  for ( const key in Object ) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

// 5 
let n = 1000;
let num = 0;

while (n >= 50) { 
    n = n/2; 
    num++; 
}
console.log (n);
console.log (num);


// 6
let firstFriday = 5;

for (let day = 1; day <= 31 ; day = day +=7) {
        console.log (`отчетный день, ${firstFriday}-е число. Необходимо подготовить отчет.`);
        firstFriday += 7;
    } ;