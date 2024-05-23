
// Задание 1
let array = [1, 1, 1, 2, null]; 
let oddCount 
let evenCount 
let nullCount

function countEvenNumbers(array) {
    evenCount = 0;
    for(let number of array) {
        if (number % 2 === 0) {
            evenCount++
        }
    }
    return evenCount
}

function countOddNumbers(array) {
    oddCount = 0;
    for(let number of array) {
        if (number % 2 === 1) {
            oddCount++
        }
    }
    return oddCount
}

function countNullNumbers(array) {
    nullCount = 0;
    for(let number of array) {
        if (number === null) {
            nullCount++
        }
    }
    return nullCount
}

// мне кажется, что эти 3 строчки излишне, но я не могу понять как передать значения в глобальные переменные по другому
evenCount = countEvenNumbers(array);
oddCount = countOddNumbers(array);
nullCount = countNullNumbers(array);

console.log(`Количество четных элементов: ${evenCount}`);
console.log(`Количество нечетных элементов: ${oddCount}`);
console.log(`Количество нулевых элементов: ${nullCount}`);

// Задание 2
let number = +prompt("Введите число от 1 до 1000");

function isPrime(number) {
    if(1 <= number || number < 1000) {
        return false
    } 
    else if (number % number && number % 1 === 0) {
        return true
    }
}

if (isPrime === true) {
    console.log(`Число ${number} является простым`); 
} else {
    console.log(`Число ${number} не является простым`)
}
  
// Задание 3

let halfSumA = function sumA (a) {
    return function sumB (b) {
        console.log(a + b);
    }
}

let halfSumB = halfSumA(7);
halfSumB(3);

// Задание 4
function printNumbers(first, last) {
    let current = first;

    const intervalId = setInterval(() => {
        console.log(current)
        if (current >= last) {
            clearInterval(intervalId);
        } 
        current++
    }, 1000);
}

printNumbers(5,15)

// Задание 5

const getRoot = (x, n) => {
    return Math.pow(x,n);
}

console.log(getRoot(2,3));