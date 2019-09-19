'use strict'
let 
money = +prompt("Cколько ты зарабатываешь?"),
time = prompt("Введите дату в формате YYYY-MM-DD");
 
let appData =  {
byudjet: money,
timeData: time,
expenses:{},
optionalExpenses:{},
income: [],
saving:false   
};

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


};

appData.moneyPerDay = appData.byudjet/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay<=100){
    console.log("Минимальный денежный бюджет");
} else if(appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
    console.log("Средний денежный бюджет");
} else if(appData.moneyPerDay>2000){
    console.log("Максимальный денежный бюджет");
} else {
    console.log("Проверьте введенные данные");
}
