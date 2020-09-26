let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько обойдется?","");

    if ( (typeof(a) ) === "string" && (typeof(a) ) != null && 
         (typeof(b) ) !=null && a != "" && b != "" && a.length < 50) {
            console.log("Ok");
            appData.expenses[a] = b;
          } else {
            console.log("bad");
            i--;
          }
};

appData.moneyPerDay = appData.budget / 30

alert("Ежедневный бюджет : " + appData.budget / 30);
              
if (appData.moneyPerDay < 100) {
    alert ("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    alert ("Высокий уровень достатка"); 
} else {
    alert("Ошибка!!");
};


/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько обойдется?","");

    if ( (typeof(a) ) === "string" && (typeof(a) ) != null && 
         (typeof(b) ) !=null && a != "" && b != "" && a.length < 50) {
            console.log("Ok");
            appData.expenses[a] = b;
          } else {
            console.log("bad");
            i--;
          }
          i++;
};
*/

/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько обойдется?","");

    if ( (typeof(a) ) === "string" && (typeof(a) ) != null && 
         (typeof(b) ) !=null && a != "" && b != "" && a.length < 50) {
            console.log("Ok");
            appData.expenses[a] = b;
          } else {
            console.log("bad");
            i--;
          }
          i++;
};
while (i < 2);
*/