// Задача 1
// function loadingXl(){
//     window.timeShower = window.setInterval(buttonClickZl, 3000);
// }
// function buttonClickZl(){
//     window.scrollTo(0, 500);
// }
// Задача 3
// let btn = document.getElementById('button');//находим кнопку по id
// btn.addEventListener('click', function (event) {//привязываем обработчик события click
// event.preventDefault(); //ддя того, чтобы страница не обновлялась при каждом нажатии
// let form = document.getElementsByTagName('input');//записываем все инпуты в переменную
// let sum = 0;//счетчик
//    for (let i = 0; i < form.length; i++ ){
//         sum += Number(form[i].value)//цикл for прибавляет каждое значение инпута к sum
//     }
// alert(sum)//вывод суммы
// });

// Задача 5
// let ol = document.getElementById('parent');
// let li = document.createElement('li');
// li.innerHTML = 'second';
// ol.appendChild(li);

// Задача 6
// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener('mouseover', func);
// }
// function func() {
//   this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// }

// Задача 7
// document.querySelectorAll('p').forEach(p => {
//     p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   })
  
// Задача 8
// let count = 0;//счетчик
// let btn = document.getElementById('btn')
// function btnClick(){//при нажатии
//     count +=1;//увеличивается
//     btn.innerHTML = count//записывается значение счетчика в кнопку
// }

// Задача 9
// element.closest()
// var ul = document.getElementById("ul");
// ul.addEventListener("click", function func(event) {
// 	var li = event.target.closest("li");
// 	if (li) {
// 		li.innerHTML +="!"; //добавляем "!"" в li
// 	}
// });
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", function() {
// var liElem = document.createElement("li");
// liElem.innerHTML = "пункт";
// ul.appendChild(liElem);
// });