let input = document.getElementById('data');  /* принимает значение окна ввода */
let dataStore = {};

//очистить поле ввода
function clearInput() {
	input.value = ''; /* очищает строку */ 
	keepFocus();   /* сохраняет фокус на окне ввода */
}
// =========================================

// фокус
function keepFocus() {
	input.focus();    /* чтобы фокус не терялся перед вводом второго числа */
}
// ==========================================

//добавить первое значение в объект
function addFirstNumber() {
	dataStore.firstNumber = +input.value; /* в объект добавляем ключ со значением первого числа  */
	clearInput(); /* чистим окно */
}
// ===========================================

//добавить второе значение в объект
function  addSecondNumber() {
	dataStore.secondNumber = +input.value;  /* добавляем второй ключ со значением */
	clearInput(); /* чистим строку */
}
// ===========================================

// функция сложения
function sumTwoNumbers(x, y) {
	return x + y;
}

// ложим функцию сложения в объект
function calcSum() {
	addFirstNumber();
	dataStore.value = sumTwoNumbers;
}
// =========================

//функция вычитания
function subtraction(x, y) {
	return x - y;
}

// ложим функцию вычитания в объект
function calcSubtraction() {
	addFirstNumber();
	dataStore.value = subtraction;
}
// =======================

// функция умножения
function multiplication(x, y) {
	return x * y;
}

// ложим функцию умножения в объект
function calcMultiplication() {
	addFirstNumber();
	dataStore.value = multiplication;
}
// ============================

// функция деления
function divide(x, y) {
	return x / y;
}

// ложим функцию деления в объект
function calcDivide() {
	addFirstNumber();
	dataStore.value = divide;
}
// ============================


// результат функции которую ложили в объект
function getTotal() {
	input.value = dataStore.value(dataStore.firstNumber, dataStore.secondNumber); /* dataStore.value  = функции фрифметики, мы это сделали выше */
}
// ============================


// функция равно
function assignmentTotal() {
	addSecondNumber(); /* сохранить второе значение */
	getTotal(); /* вызов функции расчета и вывода результата */
}
// =============================


    
    










// function hello() {
//     prompt('how are you?', 'i am fine');
//     let mood = 'welcome to our site';
//     document.write(mood);
// }
// ;(function () {
//     let a = 0;
//     while ( a < 3 ) { /* пока а < 3 будет идти проверка */
//     alert( a );
//     a++; 
// }
// }) ();

// ;(function () {
//     let a = 0;
//     do { /* пока а < 3 будет идти проверка */
//     alert( a );
//     a++; 
// }
// while ( a < 3 );
// }) ();

// let sum = 0;
// let value = 0;
// while (true) {
//     if (!value) break;
//     sum += value;
// }
// alert(sum);

// 
// var string = 'check it out';




// alert(string.substring(0)); // 'che'
// alert(string.substr(2, 6)); // 'che'

// alert(string.substring(1)); // 'heck it out'
// alert(string.substr(1)); // 'heck it out'

    // alert( null || 2 || undefined );
//  !!!!!!!!!!! first home work !!!!!!!!!!!  
/*  function enter() {
     let login;
     login = prompt('Login', '');
     if (login === 'админ') {
         function adminPass() {
         let pass = prompt('Пароль', '');
         if (pass === 'черный властелин') {
             alert('Добро пожаловать');
         } else if (pass == undefined) {
             alert('Вход отменен');
         } else {
              let yesNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
              if (yesNot == true) {
                 adminPass();
              } else {
             alert('Досвидания');
             }
         }
     }
     adminPass();
     }
     else if (login == undefined) {
         alert('Вход отменен');
     }
     else {
         let yesOrNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
         if (yesOrNot == true) {
             enter();
         }
         else {
             alert('Досвидания');
         }
     }
 }   */
    //!!!!!!!!!!!!!!!! first home work END !!!!!!!!!!!!!!!!! 






