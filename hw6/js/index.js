// 1 
const numbs = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 10) break ;
	console.log(numbs[i]);
}
for (let a = 0 ; a < numbs.length; a++) {
  if (numbs[a] < 1) break ;
  console.log(numbs[a]);
}

// 2 
const arr = [1, 5, 4, 10, 0, 3];
const position = arr.indexOf(4);
console.log(position);

// 3
let line = [1, 3, 5, 10, 20];
line = line.join(" ");
console.log(line);

// 4 
let array = [];
for (let i = 0; i < 3; i++) {
  let subArray = [];
  for (let j = 0; j < 3; j++) {
    subArray.push(1);
  } 
  array.push(subArray);
}
console.log(array)

// 5 
let subArr = [1, 1, 1];
subArr.push(2, 2, 2);
console.log(subArr);

// 6 
let arrNumber = [9, 8, 7, 'a', 6, 5];
arrNumber.sort().pop();
console.log(arrNumber);

// 7 
const useNumber = [9, 8, 7, 6, 5];
const userNumber = +prompt("введите число от 1 до 10");
if (useNumber.includes(useNumber)) {
  alert ("Это число есть в массиве");
  } else if (isNaN(userNumber)) {
    alert ("Не является числом");
  } else {
    alert ("Такого числа нет в массиве");
  }

// 8 
let greeting = "abcdef";
console.log([...greeting].reverse().join(""));

//9
let arrMas = [[1, 2, 3,],[4, 5, 6]]
const flatArr = arrMas.flat();
console.log(flatArr);

//10
const arrElement = [3, 2, 9, 8, 1, 4, 7, 5, 10, 6];
for (let i = 0; i < arrElement.length - 1; i++) {
  console.log(arrElement[i] + arrElement[i + 1])
}

//11
const element = [12, 16, 25, 32];
const elementSquare = element.map(el => el ** 2);
console.log(elementSquare)

//12
const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']; 
const getLength = getLengthWords.map(function(len) {
  return len.length ;
} );
console.log(getLength)

//13
function getNegativeValues(numbers) {
  
  const result = [];
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
    result.push(numbers[i]);
    }
  }
  return result;
}
let numbers = [2, -6, 8, -22, 7, -4];
let negativeNumbers = getNegativeValues(numbers);
console.log(negativeNumbers)

//14
Math.random()

//15
Math.random()