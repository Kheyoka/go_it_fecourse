'use strict' 


// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch


let question = prompt ('Укажите, пожалуйста, страну доставки!');
let value;
let country = 'китай';
let questionLowerCase = question.toLowerCase ()


if (questionLowerCase !== null) {
    

    switch(questionLowerCase) {
        case 'китай':
        country = 'китай'
        value = '100'
        break;
        case 'южная америка':
        country = 'южная америка'
        value = '250'
        break;
        case 'австралия':
        country =  'австралия'
        value = '170'
        break;
        case 'индия':
        country = 'индия'
        value = '80'
        break;
        case 'ямайка':
        country = 'ямайка'
        value = '120'
        break;
        // default: alert ('В вашей стране доставка не доступна')
    }
    if (questionLowerCase === country) {
    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
    }
    else {
        alert ('В вашей стране доставка не доступна');
    }
}
    else {
        alert('Ждем вас в следующий раз!');
    }

    console.log(typeof country); 

    