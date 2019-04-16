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


const question = prompt ('Укажите, пожалуйста, страну доставки!');
let value;
const CHINA_COST = 100;
const AMERICA_COST = 250;
const AUSTRALIA_COST = 170;
const INDIA_COST = 80;
const YAMAIKA_COST = 120;


if (question !== null) {
    const questionLowerCase = question.toLowerCase ();
    

    switch(questionLowerCase) {
        case 'китай':
        console.log(`Доставка в ${questionLowerCase} будет стоить ${CHINA_COST} кредитов`)
        break;
        case 'южная америка':
        console.log(`Доставка в ${questionLowerCase} будет стоить ${AMERICA_COST} кредитов`)
        break;
        case 'австралия':
        console.log(`Доставка в ${questionLowerCase} будет стоить ${AUSTRALIA_COST} кредитов`)
        break;
        case 'индия':
        console.log(`Доставка в ${questionLowerCase} будет стоить ${INDIA_COST} кредитов`)
        break;
        case 'ямайка':
        console.log(`Доставка в ${questionLowerCase} будет стоить ${YAMAIKA_COST} кредитов`)
        break;
        default: console.log('В вашей стране доставка не доступна')
        break;
    }
        
    } else {
        console.log('Ждем вас снова');
    }
    


    

    










