let money, time;
function start(){
    money = +prompt("Ваш бюджет на місяць?", '');
    time = prompt('Введіть дату в форматі YYYY-MM-DD', '');
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на місяць?", '');
    }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введіть обов'язкову статтю розходів на місяць", ''),
            b = prompt("В яку сумму вона обійдеться?", '');
           
        if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null &&   
            a != '' && b !='' && a.length<50){
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget (){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на один день складає " + appData.moneyPerDay + "грн.");
}

detectDayBudget();

function detectLevel (){
    if(appData.moneyPerDay < 100) {
        console.log("мінімальний рівень достатку");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("середній рівень достатку");
    } else if (appData.moneyPerDay > 2000){
        console.log("високий рівень достатку");
    } else {
        console.log("виникла помилка");
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Яка сума збережень?"),
        percent = +prompt("Під який процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Прибуток з вашого депозиту: "+ appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses(){
    for(let i = 1; i<=3; i++){
    let questionOptExpenses = prompt("Стаття необов'язкових витрат?");
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();


