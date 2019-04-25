// let input;
// let numberInput = Number(input);
// const numbers = [];
// let total = 0;

// do {
//     input = prompt ("Введите число");
    
//     if (input !==null && !isNaN(input)) {
//         numbers.push(Number(input));
//     } 
//     else { 
//         alert ("Было введено не число, попробуйте еще раз");
//     }
// } while (input !== null) 
// for (let i of numbers) {
//     if (numbers.length > 0) {
//     total += Number(i)
//     }
// }    console.log(`Общая сумма чисел равна ${total}`);


// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attemptsLeft = 3;
// let inputPasswords;

//         while (attemptsLeft > 0) {
//         inputPasswords = prompt ('Введите пароль');
        
//         if (passwords.includes(inputPasswords) && inputPasswords !== null) {
//             alert ('Добро пожаловать!');
//             break;
//         } else {
//                 attemptsLeft --;
//                 alert (`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);     
//             } 
//         if (attemptsLeft === 0) {
//                 alert ('У вас закончились попытки, аккаунт заблокирован!');
                
//             } 
//          } 

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let inputPasswords;

        while (attemptsLeft) {
        inputPasswords = prompt ('Введите пароль');
        if (inputPasswords === null) break;
        if (passwords.includes(inputPasswords)) {
            alert ('Добро пожаловать!');
            break;
        } else {
                attemptsLeft --;
                alert (`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);     
            } 
        if (attemptsLeft === 0) {
                alert ('У вас закончились попытки, аккаунт заблокирован!');
                
            } 
         } 