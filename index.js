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

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map((elem) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = elem;
  ingredientEl.classList.add("item");

  return ingredientEl;
});

ingredientsListEl.append(...ingredientsEl);
