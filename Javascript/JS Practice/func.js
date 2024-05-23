// Task 1
function CountDown(number) {
    for(let i = number; i >= 1;  --i) {
        console.log(i);
    }
}

CountDown(5);

//Task 2
function getPercents(percent, number) {
    return number / 100 * percent; 
}

alert( getPercents(30, 200) );

//Task 3
function repeatWord(word, count) {
    let words = ""
    for(let i = count; i > 0; --i ) {
        words += word;
    }
    return words
}

repeatWord('elephant', 5)

//Task 4
let adder = function createAdder() {
    return function addA(a,b) {
        return a + b;
    }
}

//Task 5
//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. 
// Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.