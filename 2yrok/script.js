let money = +prompt("Ваш бюджет на місяць?", ''),
	time = prompt('Введіть дату в форматі YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


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
appData.moneyPerDay = appData.budget / 30;

alert("Щоденний бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("мінімальний рівень достатку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("середній рівень достатку");
} else if (appData.moneyPerDay > 2000){
    console.log("високий рівень достатку");
} else {
    console.log("виникла помилка");
}


// let i = 0;
// while (i < 2) {
//     let a = prompt("Введіть обов'язкову статтю розходів на місяць", ''),
//     b = prompt("В яку сумму вона обійдеться?", ''); 

//     if ((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) !=0 &&
//     a != "" && b != "" && a.length<50){
//         console.log ("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log ("bad result");
//     }
// }
// i++;

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("В яку сумму вона обійдеться?", '');
    

//     if  ( typeof(a) == 'string' && typeof(a) != null && (typeof(b)) !=0 &&
//      a != "" && b != "" && a.length<50 ){
//          console.log ("done");
//          appData.expenses[a] = b;
//      } else {
//          console.log ("bad result");
//         i--;
//      }
//      i++;
// } while(i<2);