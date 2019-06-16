/*Задание 1.
Написать код, реализующий следующий функционал:
● запрос имени пользователя (всплывающее окно)
● проверка имени пользователя на содержание цифр
● при отсутствии цифр выводить имя задом наперёд
● при наличии цифр в имени переводить буквы и цифры через символ к верхнему или нижнему регистру
● разместить всё это в js- файл, подключенный к созданной пустой html - странице
*/
let name = prompt("Введите имя");	// We are looking for in this line.
let target = /\d+/g;	// Search target (numbers 0 through 9).
let counter;	// Conditional counter.
counter = target.exec(name); // Search.

if (counter !== null) {
	let i = 0; 
	let countSymbol = name[0].toLowerCase();
	while(++i < name.length)  {
		countSymbol += i % 2 ? name[i].toUpperCase(): 
		name[i].toLowerCase();
	}
	alert(countSymbol);
	}	// display the user name with a variable case of characters.
	else {
		alert(name.split("").reverse().join(""));
	} // output user name back to front.