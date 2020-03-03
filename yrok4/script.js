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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на один день складає " + appData.moneyPerDay + "грн.");
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("мінімальний рівень достатку");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("середній рівень достатку");
        } else if (appData.moneyPerDay > 2000){
            console.log("високий рівень достатку");
        } else {
            console.log("виникла помилка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Яка сума збережень?"),
            percent = +prompt("Під який процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Прибуток з вашого депозиту: "+ appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i<=3; i++){
            let questionOptExpenses = prompt("Стаття необов'язкових витрат?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
            }
    },
    chooseIncome: function(){
        let items = prompt("Що принесе додатковий дохід?(через кому)", "");
        
        if (typeof(items) != "sting" || items == "" || typeof(items) == null) {
            console.log("Ви ввели некоректні дані");
        } else { 
            appData.income = items.split(", ");
            appData.income.push (prompt("Може ви про щось забули?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способи додаткового заробітку: " + (i+1) + " - " + itemmassive);
        });
    }
};
for (let key in appData){
    console.log("ця програма вміщує в себе дані"+ key+ " - " +appData[key]);
}












