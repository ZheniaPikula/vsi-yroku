let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingValue = document.getElementsByClassName("monthsaving-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"),

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],

    optionalExpensesItem = document.querySelectorAll("optionalexpenses-item"),
    sumValue = document.querySelector(".choose-sum"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"), 
    percentValue = document.querySelector(".choose-percent"),
    dayValue = document.querySelector(".month-day"),
    monthValue = document.querySelector(".month-value"),
    yearValue = document.querySelector(".year-value");



