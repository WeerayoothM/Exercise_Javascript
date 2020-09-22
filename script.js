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

let firstName = "Weerayooth";
console.log(firstName);
