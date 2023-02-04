// ЗАДАЧИ НА СООБРОЗИТЕЛЬНОСТЬ

// 2 задание

// Ответ:

// 7 5 6
// 10 9 4
// 3 8 11

// Возможны разные варианты решения т.к. диагональ можно ставить в произвольном порядке 

// 3 задание 

// Ответ: 2500

// Используем бинаный поиск, но так как всего два предмета можем сократить только до 2500 экспереметов
// При не ограниченном колличестве предметов можно справиться максимуму за 12 эксперементов

// 4 задание 

// Ответ: 60

// 2 + 3 + 8 = 13 - дополнительные пирожки 

// 1/5 + 1/4 + 1/5 ≈ 0,783 - части без дополнительных пирожков

// 1 - 0,783 = 0,217 - часть состовляющая дополнительные пирожки

// 13	Х
// 0,217	0,783

// 13 * 0,783 / 0,217 ≈ 46,907 округляем до 47 - все остольные пирожки

// 13 + 47 = 60 - всего пирожков

// ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ

// Задача 1 - 17 минут

let str = "",
    arr = ['Москва', 'Санкт-Петербург', 'Воронеж', 'Орел', 'Белгород'];

function returnString() {
    arr.forEach ((item, i) => {
        if (i == arr.length -1){
            str += `${item}.`;
        } else if (i < arr.length)  {
            str += `${item}, `;
        }
    });
    console.log(str);
}

returnString();

// Задача 2 - 5 минут

function roundTo5(num) {
    return Math.round(num/5)*5;
}

// Задача 3 - 15 минут

for (let i = 0; i < 1000; i++){
    if (i % 10 == 1){
        console.log(`${i} компьютер`);
    } else if ((i % 10 == 2 || i % 10 == 3 || i % 10 == 4) && i > 20 || i < 10 ){
        console.log(`${i} компьютера`);
    }else{
        console.log(`${i} компьютеров`);
    }
}

// Задача 4 - 15 минут

function test(n){

  if (n == 1) {
    console.log(`${n} не является простым`);
  }
  else if (n == 2) {
    console.log(`${n} является простым`);
  } else {
    for (let i = 2; i < n; i++) {
      if(n % i == 0)
      {
        console.log(`${n} не является простым`);
      } else {
        console.log(`${n} является простым`);
        }
    }
      
  }
}

test(2);

// Задача 5 - 20 минут

let arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23],
    arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1],
    arr3 = [...arr1, ...arr2],
    repeatElements = [];
for (let i=0;i<arr3.length;i++){
    for(let j=1+i; j<arr3.length;j++){
        if (arr1[i]===arr3[j]){
            repeatElements.push(arr3[i]);
        }

}
}

let arr4 = [...new Set(repeatElements)];
console.log(arr4);

// Задача 6 20 - минут

function multiplicationTable(value) {
    let table = '';
  
    for (let i = 1; i <= value; i++) {
      let tableString = '';

      for (let j = 1; j <= value; j++) {
        tableString += ' ' + (i * j) + ' ';
      }
  
      tableString += '\n';
      table += tableString;

    } 
  
    return table;
}

console.log(multiplicationTable(5));