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
let calTax = (income) => {
  let tax = 0;
  // if (income <= 150000) {
  //   tax = 0 * income;
  // }
  if (income > 150000) {
    if (income >= 300000) tax += (5 / 100) * (300000 - 150000);
    else tax += (5 / 100) * (income - 150000);
  }
  if (income > 300000) {
    if (income >= 500000) tax += (10 / 100) * (500000 - 300000);
    else tax += (10 / 100) * (income - 300000);
  }
  if (income > 500000) {
    tax += (15 / 100) * (income - 500000);
  }
  return tax;
};
// const income = +prompt("Enter your income");
//console.log(income);
console.log(calTax(1000000));
console.log(calTax(475000));
console.log(calTax(298564));
console.log(calTax(400000));
console.log(calTax(360000));

console.log(calTax(138900));
console.log(calTax(300000));
console.log(calTax(200000));
console.log(calTax(500000));
