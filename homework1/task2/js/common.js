
var div_1 = document.getElementById("div_1");
var button_2 = document.getElementById("button_2");

button_2.onclick = removeAll;

function removeAll(){
	div_1.remove();
	document.body.innerHTML = "<header><p>Header</p></header>\
	<main>\
	<article>\
	<h1>Что такое Lorem Ipsum?</h1>\
	<p>Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне.\
	 Lorem Ipsum является стандартным текстом на латинице с начала XVI века. \
	 В то время некий безымянный печатник создал \
	 большую коллекцию 	размеров и форм шрифтов, \
	 используя Lorem Ipsum для распечатки образцов. \
	 Lorem Ipsum не только успешно пережил без \
	 заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>\
	 </article>\
	 <nav><p>Navigation</p></nav>\
	 <aside><p>Sidebar</p></aside>\
	 </main>\
	 <footer><p>Footer</p></footer>";
}