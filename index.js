// let obj = {};
// obj["name"] = "Sonter";
// obj["surname"] = "Pakorn";

// console.log(obj);

// obj["newsurname"] = obj["surname"];
// obj["name"] = "Boy";

// console.log(obj);

// delete obj["name"];

// console.log(isEmpty(obj));
// console.log(isEmpty({}));
// function isEmpty(iobj) {
//   let check = 0;
//   for (key in iobj) {
//     check++;
//   }
//   if (check !== 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function sumSalary(iobj) {
//   let sum = 0;
//   for (key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }
// console.log(sumSalary(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj, times) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * times;
//     }
//   }
// }
// multiplyNumeric(menu, 2);
// console.log(menu);
// let user = {
//   name: "John",
// };
// let user1 = user;
// console.log(user);
// user = null;
// console.log(user);
// console.log(user1);
// console.log(user1);
// console.log(user);
// delete user1["name"];
// console.log(user1);

// let user = {
//   name: "Ohm",
//   age: 23,
// };
// console.log(user);
// user.sayHi = function () {
//   console.log("ieie ");
// };

// console.log(user);
// user.sayHi();
// console.log(user);

// user1 = {
//   sayHi: function () {
//     alert("Hi");
//   },
// };
// user2 = {
//   sayHi() {
//     alert("Hello");
//   },
// };

// let user = {
//   firstName: "Ilya",
//   arrow: () => {
//     alert(this.firstName);
//   },
// };

// user.arrow(); // Ilya

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);
//================================================
// let calculator = {
//   read: function () {
//     let a = +prompt();
//     let b = +prompt();
//     calculator.a = a;
//     calculator.b = b;
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
// };
//===============================================
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert(this.step);
//   },
// };

// function goose(name) {
//   this.name = name;
//   this.honkMyname = function () {
//     console.log(this.name);
//   };
// }
// const ohMyGoose = new goose("Ohm");
// ohMyGoose.honkMyname();

// function Calculator() {
//   this.read = function () {
//     this.num1 = +prompt();
//     this.num2 = +prompt();
//   };
//   this.sum = function () {
//     return this.num1 + this.num2;
//   };
//   this.mul = function () {
//     return this.num1 * this.num2;
//   };
// }

// let calculator = new Calculator();

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// function Accumulator(startingValue) {
//   this.value = Number(startingValue);
//   this.read = function () {
//     this.value += +prompt();
//   };
// }
// let accumulator = new Accumulator(5);

// const bmiO = calBmi(1.75, 55);
// console.log(bmiO);

// function calBmi(h, w) {
//   return h / w / w;
// }

// function for calculate TAX
// let calTax = (income) => {
//   let tax = 0;
//   // if (income <= 150000) {
//   //   tax = 0 * income;
//   // }
//   if (income > 150000) {
//     if (income >= 300000) tax += (5 / 100) * (300000 - 150000);
//     else tax += (5 / 100) * (income - 150000);
//   }
//   if (income > 300000) {
//     if (income >= 500000) tax += (10 / 100) * (500000 - 300000);
//     else tax += (10 / 100) * (income - 300000);
//   }
//   if (income > 500000) {
//     tax += (15 / 100) * (income - 500000);
//   }
//   return tax;
// };
// const income = +prompt("Enter your income");
//console.log(income);
// console.log(calTax(1000000));
// console.log(calTax(475000));
// console.log(calTax(298564));
// console.log(calTax(400000));
// console.log(calTax(360000));

// console.log(calTax(138900));
// console.log(calTax(300000));
// console.log(calTax(200000));
// console.log(calTax(500000));

// let num = 1.23456;
// alert(Math.floor(num * 100) / 100);

// // Ex Number 1
// const random = (num1, num2) => {
//   return Math.random() * (num2 - num1) + num1;
// };
// console.log(random(1, 5));

// // Ex String 1
// const ucFirst = (input) => {
//   return input[0].toUpperCase() + input.slice(1);
// };
// console.log(ucFirst("hello"));

// // Ex String 2
// const checkSpam = (input) => {
//   if (input.includes("xxx") || input.includes("viagra")) {
//     return true;
//   }
//   return false;
// };
// console.log(checkSpam("helxxxlo"));

// // Ex String 3
// const truncate = (str, length) => {
//   if (str.length > length) {
//     return str + "...";
//   }
//   return str;
// };
// console.log(truncate("Hi everyone!", 20));
// console.log(truncate("Wgat I'd like to tell on this topic is :", 20));

// // Ex String 4
// const extractCurrencyValue = (str, rate) => {
//   let dollar = parseInt(str.slice(1));
//   return dollar * rate;
// };
// console.log(extractCurrencyValue("$120", 30.5));

// let persons = [{ name: "Ohm" }, { name: "Jaja" }];
// persons.forEach();

// 1.1
let arr1 = [1, 2, 30, 400];
let arr2 = arr1.map(function (x) {
  return x * 2;
});
console.log(arr2);

// 1.2
arr1 = [1, 2, 3, 4];
arr2 = arr1.map(function (x) {
  return x.toString();
});
console.log(arr2);

//1.3
arr1 = [1, "1", 2, {}];
arr2 = arr1.map(function (x) {
  return typeof x;
});
console.log(arr2);

//1.4
arr1 = ["apple", "banana", "orange"];
arr2 = arr1.map(function (x) {
  return x.toUpperCase();
});
console.log(arr2);

//1.5
arr1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
arr2 = arr1.map((x) => {
  return x.name;
});
console.log(arr2);

//1.6
arr1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
arr2 = arr1.map((x) => {
  return x.age;
});
console.log(arr2);

//1.7
arr1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
arr2 = arr1.map((x) => {
  return `${x.name} ${x.surname}`;
});
console.log(arr2);

//1.8
arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = arr1.map((x) => {
  if (x % 2 === 0) return "even";
  else return "odd";
});
console.log(arr2);

//1.9
arr1 = [1, -3, 2, 8, -4, 5];
arr2 = arr1.map((x) => {
  return Math.abs(x);
});
console.log(arr2);

//1.10
arr1 = [100, 200.25, 300.84, 400.3];
arr2 = arr1.map((x) => {
  return x.toFixed(2);
});
console.log(arr2);

//1.11
arr1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
arr2 = arr1.map((x) => {
  x.age = 2019 - x.birth.slice(0, 4);
  return x;
});
console.log(arr2);

//1.12
arr1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

const reformatDate = (date) => {
  let day = date.split("-")[2];
  let month = date.split("-")[1];
  let year = date.split("-")[0];
  if (month == "01") {
    month = "Jan";
  }
  if (month == "02") {
    month = "Feb";
  }
  if (month == "03") {
    month = "Mar";
  }
  if (month == "04") {
    month = "Apr";
  }
  if (month == "05") {
    month = "May";
  }
  if (month == "06") {
    month = "Jun";
  }
  if (month == "07") {
    month = "Jul";
  }
  if (month == "08") {
    month = "Aug";
  }
  if (month == "09") {
    month = "Sep";
  }
  if (month == "10") {
    month = "Oct";
  }
  if (month == "11") {
    month = "Nov";
  }
  if (month == "12") {
    month = "Dec";
  }
  return `${day} ${month} ${year}`;
};
// หรือๆๆๆ
// const month_map = {
//   "01":"Jan"
//   "02":"Feb"
//   "03":"Mar"
//   "04":"Apr"
//   ...
// }
arr2 = arr1.map((x) => {
  let birth = reformatDate(x.birth);
  return `<tr> <td>${x.name}</td><td>${birth}</td> </tr>`;
});
console.log(arr2);

// filter
//2.1
arr1 = [1, 2, 30, 400];
arr2 = arr1.filter((x) => {
  return x > 10;
});
console.log(arr2);

// filter
//2.1
arr1 = [1, 2, 30, 400];
arr2 = arr1.filter((x) => {
  return x > 10;
});
console.log(arr2);
//2.3
arr1 = [1, "1", 2, {}];
arr2 = arr1.filter((x) => {
  return typeof x == "number";
});
console.log(arr2);

//2.6
arr1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
arr2 = arr1.filter((x) => {
  return x.age !== 32;
});
console.log(arr2);

//2.9
arr1 = ["peach", 1, -3, "2", {}, []];
arr2 = arr1.filter((x) => {
  return typeof x == "string";
});
console.log(arr2);

//2.10
arr1 = ["APPLE", "appLE", "PEACH", "PEach"];
arr2 = arr1.filter((x) => {
  return x === x.toUpperCase();
});
console.log(arr2);
