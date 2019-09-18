'use strict'
let money;
let time;
money = prompt("Cколько ты зарабатываешь?");
time = prompt("Введите дату в формате YYYY-MM-DD");
 
let appData =  {
byudjet: money,
timeData: time,
expenses:{},
optionalExpenses:{},
income: [],
saving:false   
};

let 
question1_1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
question1_2 = prompt("Во сколько обойдется?", ''),
question2_1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
question2_2 = prompt("Во сколько обойдется?", '');

appData.expenses.question1_1 = question1_2;
appData.expenses.question2_1 = question2_2;

alert(appData.byudjet/30);

