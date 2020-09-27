let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
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
      }
    },
    detectDayBudget: function() {       //Расчёт дневного бюджета
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert("Ежедневный бюджет : " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {           //Расчёт уровня достатка
      if (appData.moneyPerDay < 100) {
        alert ("Низкий уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert ("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
        alert ("Высокий уровень достатка"); 
      } else {
        alert("Ошибка!!");
      }
    },
    checkSavings: function() {          // Определение накоплений
      if (appData.savings == true) {
        let save = +prompt ('Какова сумма накоплений?', '');
        let percent = +prompt ('Под какой процент?', '');
    
        appData.monthIncome = save/100/12*percent;
        alert ("Доход в месяц с вашего депозите:" + appData.monthIncome);
      }
    },
    chooseOptExpenses: function() {    // Определение необязательных расходов
      for (let i; i <= 3; i++) {
        let questionOptExpenses = prompt ('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
      }
    },
    chooseIncome: function() {
      let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)","");
      appData.income = items.split(', ');
      appData.income.push(prompt("Может что-то ещё?"));
      appData.income.sort();

      for (let i = 0; i < 1; i++) {
      if ( typeof(items) === string && typeof(items) != "" 
          && typeof(items) != null) {
           appData.income = items;
          } else {
            i = i - 1;
          }
      }
    }
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