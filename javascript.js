'use strict'
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
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


startBtn.addEventListener('click', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD");
        money = +prompt("Cколько ты зарабатываешь?");
        while(isNaN(money) || money == "" || money == null){
            money = +prompt("Cколько ты зарабатываешь?"); 
    } 
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for(let i=0;i<expensesItem.length;i++){
        let a = expensesItem[i].value,
           b = expensesItem[++i].value
           if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
             appData.expenses[a]=b;
                sum += +b;
    } else {
         i=i-1;
     }
     expensesValue.textContent = sum;
     }

});

optexpensesBtn.addEventListener('click', function(){

    for(let i=0;i<optexpensesItem.length;i++) {
        let questioOptExpenses = optexpensesItem[i].value;
        appData.optionalExpenses[i] = questioOptExpenses;
        optexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } 
    
});

countBtn.addEventListener('click', function(){

    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget- +expensesValue.textContent)/30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay<=100) {
            levelValue.textContent = "Минимальный денежный бюджет";
        } else if(appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
            levelValue.textContent = "Средний денежный бюджет";
        } else if(appData.moneyPerDay>2000){
            levelValue.textContent = "Максимальный денежный бюджет";
        } else {
            levelValue.textContent = "Проверьте введенные данные";
        }
    } else {
        daybudgetValue.textContent = "Проверьте введенные данные";
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});
checkbox.addEventListener('click', function(){
    if(appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});
chooseSum.addEventListener('input', function(){
    if(appData.saving == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;
        appData.monthInCome = sum/100/12*percent;
        appData.yearInCome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
    }

});

choosePercent.addEventListener('input', function(){
    if(appData.saving == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;
        appData.monthInCome = sum/100/12*percent;
        appData.yearInCome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
    }

});


let appData =  {
budget: money,
timeData: time,
expenses:{},
optionalExpenses:{},
income: [],
saving:false,
};


