'use strict'
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optexpensesValue = document.getElementsByClassName('optionalexpenses'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start(){ 
    money = +prompt("Cколько ты зарабатываешь?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Cколько ты зарабатываешь?");
    }
    
} 
start();

let appData =  {
byudjet: money,
timeData: time,
expenses:{},
optionalExpenses:{},
income: [],
saving:true,
chooseExpenses: function(){
    for(let i=0;i<2;i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
           b = prompt("Во сколько обойдется?", '');
         if(typeof(a)==='string'  && typeof(a) != null && typeof(b) != null
            && a.length<50 && b.length<50 && a != '' && b != ''){
         console.log("done");
             appData.expenses[a]=b;
    } else {
          console.log("bad result");
         i--;
     }
     }
},
    detectDayBudget: function(){
        appData.moneyPerDay = appData.byudjet/30;
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay<=100) {
            console.log("Минимальный денежный бюджет");
        } else if(appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
            console.log("Средний денежный бюджет");
        } else if(appData.moneyPerDay>2000){
            console.log("Максимальный денежный бюджет");
        } else {
            console.log("Проверьте введенные данные");
        }
    },
    checkSavings: function(){
        if(appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
            appData.monthInCome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита:" + appData.monthInCome +" руб.");
        }
    },
    chooseOptExpenses: function(){
        for(let i=0;i<3;i++) {
            let questioOptExpenses = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questioOptExpenses;
            console.log(appData.optionalExpenses);
    
        } 
    },
    chooseIncome: function(){
        for(let i=0;i<1;i++){
       let items = prompt("Что принесет дополнительный доход? (Напишитие через запятую)","");
       if(items != '' && typeof(items) != null && typeof(items)==='string'){
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
       }else{
           i--;
       }

}
appData.income.forEach(function(itemmassive,i){   
    console.log("Способы доп. заработка: " + (i+1) + ': '+ itemmassive);
});
}
};
for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


