// -----------------------------1. Стрелочные функции


// •	Преобразуйте обычную функцию в стрелочную функцию.

let names = 'Helen';
function greet(names) {
    return `Hello, ${names}!`;
}
greet(names)
console.log(greet(names))

const greets = (names) => {
    return `Hello, ${names}!`;
}
greets(names)
console.log(greet(names))

// •	Используйте стрелочную функцию в методе массива (constnumbers = [1, 2, 3, 4])map для
//  преобразования массива чисел в массив их квадратов.

const numbers = [1, 2, 3, 4]
const newArrayNumb = numbers.map(elem => elem ** 2);
console.log(newArrayNumb);
// •	Создайте стрелочную функцию без аргументов, которая возвращает строку "Hello, World!".

const world = (word = "Hello, World!") => {
    return word;
}
world(names)
console.log(world())

//--------------------- 2. Функции с аргументом по умолчанию


// •	Напишите функцию с аргументом по умолчанию, которая принимает имя и приветствует человека.
//  Если имя не передано, используйте "Гость".

const hello = (guest = "Гость") => {
    if (guest === "Гость") {
        console.log(`Уважаемый ${guest}, мы рады приветствовать Вас на нашем сайте!`);
        
    }
    else {
        console.log(`${guest},приветствеуем Вас на нашем сайте!`);
        console.log(guest)
    }
};
hello("Helen");

// •	Создайте функцию для вычисления стоимости заказа с учетом скидки. Скидка должна быть 
// аргументом по умолчанию.

const sale = (salePrice, sale = 500) => {
    let pSale = document.querySelector('.sale');
    console.log(pSale)
    if (salePrice >= 1500) {
        let newPrice = salePrice - sale;
        console.log(`стоимости заказа с учетом скидки = ${newPrice}руб.`)
        pSale.append(`стоимости заказа с учетом скидки = ${newPrice}руб.`)
    }
}
sale('4700');

// •	Разработайте функцию для подсчета объема цилиндра с аргументом по умолчанию для высоты
// (Сама формула расчета Math.PI * radius * radius * height).
const celinder = (radius, height = 30) => {

    let volumeCelindr = Math.PI * radius * radius * height;
    console.log(volumeCelindr)
    console.log(height)

}
celinder('20');

// -------------------------3. Функции с неопределённым числом аргументов


// •	Создайте функцию, которая принимает неопределенное количество чисел и возвращает их сумму.
//  Используйте метод reduce()
let number = [1, 7, 9, 78, 25, 5, 6, 32];
const sum = (num) => {
    let allSum = num.reduce(function (sum, elem) {
        return sum + elem;
    }, 0)
    console.log(allSum)
}
sum(number);

// •	Напишите функцию для объединения нескольких строк в одну с использованием разделителя, который 
// также передается в функцию.
const str = ['Привет', 'меня', 'зoвут', 'Елена.']

const volumeStr = (str, i) => {
    let hi = str.join(i)
    console.log(hi)
}
volumeStr(str, ' ');
// •	Функция для нахождения максимального числа из произвольного количества аргументов.
// Метод Math.max()

let num = [1, 7, 9, 78, 25, 105, 6, 32];

const find = (num) => {
    let bigNum = Math.max.apply(null, num)
    console.log(bigNum)
}
find(num);
// •	Функция для создания объекта, где каждый аргумент представляет собой пару ключ-значение.
// Метод Object.fromEntries
// При вызове функции — разбивает массив

const style = [
    ['position:', 'absolute;'],
    ['min-width:', '100%;'],
    ['min-height:', '100%;'],
    ['height:', '810px;']];

const styleObj = (elem) => {
    let objStyle = Object.fromEntries(elem);
    console.log(objStyle);
};
styleObj(style);

//------------------------- 4. Object.keys, Object.values, Object.entries


// •	Используйте Object.keys для получения списка всех ключей объекта и выведите его в консоль.
// const obj = { a: 1, b: 2, c: 3 };

const obj = { a: 1, b: 2, c: 3 };
const objKeys = Object.keys(obj);
console.log(objKeys)

// •	С помощью Object.values создайте массив всех значений свойств объекта.

const objValues = Object.values(obj);
console.log(objValues)
// •	Используйте Object.entries для итерации по объекту и вывода пар ключ-значение.

const objEntries = Object.entries(obj)
console.log(objEntries)
// •	Напишите функцию, которая принимает объект и возвращает объект, где ключи и значения 
// поменяны местами, используя Object.entries и Object.fromEntries

const reverce = (elem) => {
    const reversReturn = Object.fromEntries(Object.entries(elem).map(([key, value]) => [value, key]));
    console.log(reversReturn)
}
reverce(obj);