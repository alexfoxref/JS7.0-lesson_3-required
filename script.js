'use strict'

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
            answerTotal = prompt("Во сколько обойдется?", "");
        
        if ( (typeof(answerExpenses)) === 'string' && (typeof(answerExpenses)) != null && (typeof(answerTotal)) != null 
            && answerExpenses != '' && answerTotal != '' && answerExpenses.length < 50 ) {
            console.log('done');
            appData.expenses[answerExpenses] = +answerTotal;
        } else {
            i--;
        }
    }
}
chooseExpenses();

// Расчет дневного бюджета и вывод на экран этого значения
function detectDayBudget(monthBudget) {
    let dayBudget = +( (monthBudget / 30).toFixed() );
    alert('Ежедневный бюджет: ' + dayBudget);
    return dayBudget;
}
appData.budgetPerDay = detectDayBudget(appData.budget);


// Расчетом уровня достатка
function detectLevel() {
    if (appData.budgetPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.budgetPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = +( (save / 100 / 12 * percent).toFixed(2) );
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    };
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0, n = 3; i < n; i++) {
        let answerOptExpenses = prompt("Статья необязательных расходов?", "");

        if ( answerOptExpenses != null && answerOptExpenses != '' ) {
            appData.optionalExpenses[i] = answerOptExpenses;
        } else {
            i--;
            n--;
        }
    }
}
chooseOptExpenses();