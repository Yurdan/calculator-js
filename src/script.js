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
   
    function block() {
        let login;
        login = prompt('login', '');
        if (login === 'админ') {
            function inerBlock() {
            let pass = prompt('Пароль', '');
            if (pass === 'черный властелин') {
                alert('Добро пожаловать');
            } else if (pass == undefined) {
                alert('Вход отменен');
            } else {
                 let yesNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
                 if (yesNot == true) {
                     inerBlock();
                 } else {
                alert('Досвидания');
                }
            }
        }
        inerBlock();
        }
        else if (login == undefined) {
            alert('Вход отменен');
        }
        else {
            let yesOrNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
            if (yesOrNot == true) {
                block();
            }
            else {
                alert('Досвидания');
            }
        }
    }  
    
 