// Test 1

// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000
// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 2000

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// // 'Droid'

// console.log(pricePerItem);
// 2000

// Test 2

// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
//  Переопредели значения переменных pricePerItem и productName после их объявления.

// Переменная pricePerItem объявлена с помощью let
// При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem += 1500;

// **********************

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const refs = {
//   categories: document.querySelector("#categories"),
// };

// console.log("Number of categories: ", refs.categories.children.length);

// [...refs.categories.children].forEach((item) => {
//   //   console.dir(item);
//   const firstEl = item.firstElementChild.textContent;
//   const secondEl = item.lastElementChild.children.length;
//   console.log("Category:", firstEl);
//   console.log("Elements:", secondEl);
// });

//***************************** */

// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientsListEl = document.querySelector("#ingredients");

// const ingredientsEl = ingredients.map((elem) => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = elem;
//   ingredientEl.classList.add("item");

//   return ingredientEl;
// });

// ingredientsListEl.append(...ingredientsEl);

// ******** task 3 *******

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryEl = document.querySelector(".gallery");

// function createGalleryItem({ url, alt }) {
//   return `<li class="gallerey__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`;
// }

// const galleryMarkup = images.map(createGalleryItem).join("");

// galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

// ***************task 4*************

// const refs = {
//   counter: document.querySelector("#counter"),
//   decrementBtn: counter.querySelector("button[data-action='decrement']"),
//   incrementBtn: counter.querySelector("button[data-action='increment']"),
//   outputField: counter.querySelector("#value"),
// };

// let counterValue = 0;
// updateValue(counterValue);
// // console.log("🚀 ~ refs.outputField:", refs.outputField.textContent);
// // console.log("🚀 ~ decrementBtn:", refs.decrementBtn);
// // console.log("🚀 ~ incrementBtn:", refs.incrementBtn);

// refs.decrementBtn.addEventListener("click", () => {
//   counterValue -= 1;
//   updateValue(counterValue);
// });

// refs.incrementBtn.addEventListener("click", () => {
//   counterValue += 1;
//   updateValue(counterValue);
// });

// function updateValue(value) {
//   refs.outputField.textContent = value;
// }

// ************task5************

// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInput);

// function onInput(evt) {
//   let value = evt.currentTarget.value;

//   outputEl.textContent = !value ? "Anonymous" : value;
// }

// **********task 6***********

// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(evt) {
//   if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// }

// ************task 7*********

// const inputEl = document.querySelector("#font-size-control");
// const outputEl = document.querySelector("#text");
// console.log("🚀 ~ inputEl:", inputEl);

// inputEl.addEventListener("input", onInput);

// function onInput(evt) {
//   outputEl.style.fontSize = `${evt.currentTarget.value}px`;
// }

//------------task 8---------------

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const email = evt.target.elements.email.value;
//   const password = evt.target.elements.password.value;
//   if (!email || !password) {
//     alert("Всі поля форми мають бути заповнені");
//     return;
//   }
//   console.log({
//     email,
//     password,
//   });
//   evt.currentTarget.reset();
// }

// ---------------task 9 --------------
// const refs = {
//   btnChange: document.querySelector(".change-color"),
//   field: document.querySelector(".color"),
//   body: document.querySelector("body"),
// };

// refs.btnChange.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const randomColor = getRandomHexColor();

//   refs.field.textContent = randomColor;
//   refs.body.style.backgroundColor = randomColor;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// ------------task 10 -----------

// const refs = {
//   controls: document.querySelector("#controls"),
//   boxes: document.querySelector("#boxes"),
//   input: controls.querySelector("input"),
//   createBtn: controls.querySelector("button[data-create]"),
//   destroyBtn: controls.querySelector("button[data-destroy]"),
// };

// refs.createBtn.addEventListener("click", onCreateBtnClick);
// refs.destroyBtn.addEventListener("click", destroyBoxes);

// function onCreateBtnClick() {
//   createBoxes(refs.input.value);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   let markup = "";
//   for (let i = 0; i < amount; i += 1) {
//     markup += `<div style="width: ${30 + i * 10}px; height: ${
//       30 + i * 10
//     }px; background-color: ${getRandomHexColor()}"></div>`;
//   }

//   refs.boxes.innerHTML = markup;
// }

// function destroyBoxes() {
//   refs.boxes.innerHTML = "";
// }

// ---------------------------------

// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
// const people1 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Alex"],
//   },
// ];
// //Not found
// const people2 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ];

// // jhon
// const people3 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ];

// function findNarthiss(people) {
//   let isKnown = "not found";
//   for (let i = 0; i < people.length; i++) {
//     const currentPerson = people[i];

//     if (currentPerson.know.length) {
//       continue;
//     }

//     const isFind = people.every(({ name, know }) => {
//       return know.includes(currentPerson.name) || currentPerson.name === name;
//     });

//     if (isFind) {
//       return currentPerson.name;
//     }
//   }
//   return isKnown;
// }

// console.log(findNarthiss(people3));

// --------------------------------------------------------------------------------------------------------//

// // Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься,
// // але в масиві(genreIDs) тільки ID цих фільмів.
// // Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься.
// // Після чого відрендерити список фільмів як наведено в прикладі нижче(Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів,
// // а всі інші замінюємо на "Others".
// // Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// // //Object example
// // {
// //     title: "Interceptor",
// //     genreIDs: [
// //         28,
// //         53,
// //         12,
// //     ],
// //     genreNames: [
// //         "Action",
// //         "Thriller",
// //         "Adventure"
// //     ]
// // }

// ////  Expected result
// // Films list:
// // 1. 'Interceptor: Action, Thriller, Others.'
// // 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// // 3. 'Last Seen Alive: Action, Thriller.'
// // 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

// function renderFilms(films) {
//   {
//     console.log("Films list:");
//     return films.map(({ title, genreNames }, i) => {
//       const renderedGenres = genreNames.slice(0, 2);
//       if (genreNames.length > 2) renderedGenres.push("Others");

//       console.log(`${i + 1}. '${title}: ${renderedGenres.join(", ")}...'`);
//     });
//   }
// }

// const films = [
//   {
//     title: "Interceptor",
//     genreIDs: [28, 53, 12],
//   },
//   {
//     title: "Fantastic Beasts: The Secrets of Dumbledore",
//     genreIDs: [14, 12, 28],
//   },
//   {
//     title: "Last Seen Alive",
//     genreIDs: [28, 53],
//   },
//   {
//     title: "Jurassic World Dominion",
//     genreIDs: [878, 28, 12, 53],
//   },
// ];

// const genresInfo = {
//   genres: [
//     {
//       id: 28,
//       name: "Action",
//     },
//     {
//       id: 12,
//       name: "Adventure",
//     },
//     {
//       id: 14,
//       name: "Fantasy",
//     },
//     {
//       id: 878,
//       name: "Science Fiction",
//     },
//     {
//       id: 53,
//       name: "Thriller",
//     },
//     {
//       id: 10752,
//       name: "War",
//     },
//     {
//       id: 37,
//       name: "Western",
//     },
//   ],
// };

// const filmsWithGenres = addGenres(films);
// console.log("🚀 ~ filmsWithGenres:", filmsWithGenres);
// renderFilms(filmsWithGenres);

// function addGenres(films) {
//   return films.map((film) => {
//     return {
//       ...film,
//       genreNames: film.genreIDs.map((id) =>
//         findGenreById(id, genresInfo.genres)
//       ),
//     };
//   });
// }

// function findGenreById(id, genres) {
//   return genres.find((genre) => genre.id === id).name;
// }

// //     .

// --------------------------------------------------------------------------------------------------------//

// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // name приватна властивість (ім'я, успадковується від User),
// // surname приватна властивість (прізвище, успадковується від User),
// // year (рік вступу до вузу).
// // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     const result = `${this.#name} ${this.#surname}`;
//     console.log(result);
//     return result;
//   }
// }

// class Student extends User {
//   static Current_YEAR = new Date().getFullYear();
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     const course = Student.Current_YEAR - this.year;
//     const result = course > 5 ? "Випускник" : course;
//     console.log(result);
//     return result;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse(); //поверне 3 (третій курс)
