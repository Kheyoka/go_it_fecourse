'use strict' 


//  ДОМАШНЯЯ РАБОТА  

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
let pricePerDroid = 3000;

let totalPrice = +prompt('Сколько дроидов выхотите купить?');
let finalPrice = pricePerDroid * totalPrice;
let numberCredits = credits - finalPrice;

if (totalPrice !== null) {
    if (finalPrice > credits) {
        alert ('Недостаточно средств на счету!');
    }
    else {
        alert (`Вы купили ${totalPrice}, на счету осталось ${numberCredits}`);
    }
}
  else {
      alert ('Отменено пользователем!');
  }












