
/* <input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser(); */

let age = document.getElementById('age');
function showUser(name, surname){
    alert("Користувач " + surname + " " + name + ", вік " + this.value);
}
showUser.apply(age, ["Сахаров","Єгор"]);
