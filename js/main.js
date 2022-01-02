// let elForm = document.getElementById("form");
// let elResult = document.getElementById("result");
// let elFormInput = document.getElementById("form-input");
// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let InputValue = elFormInput.value;
//   console.log(InputValue);
//   let number = parseFloat(elFormInput.value.trim(), 10);
//   if (number % 3 === 0 && number % 5 === 0) {
//     elResult.textContent = "FIIZZZZBIIIIZZZ";
//   } else if (number % 5 === 0) {
//     elResult.textContent = "FIZZ";
//   } else if (number % 3 === 0) {
//     elResult.textContent = "BIZZ";
//   } else {
//     elResult.textContent = `${number}`;
//   }
// });

// const day = Number(prompt("kunni kiriting"));
// if (day === 1) {
//   alert("Monday");
// } else if (day === 2) {
//   alert("Tuesday");
// } else if (day === 3) {
//   alert("Wednesday");
// } else if (day === 4) {
//   alert("Thursday");
// } else if (day === 5) {
//   alert("Friday");
// } else if (day === 6) {
//   alert("Saturday");
// } else if (day === 7) {
//   alert("Sunday");
// } else if (typeof day === "string") {
//   alert("Iltimos son kiriting");
// }

// function calAge(birthYear = 2003) {
//   const age = 2022 - birthYear;
//   return age;
// }
// // console.log(calAge());

// // experetion
// const calAge2 = function (birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// };

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let InputValue = elFormInput.value;
//   console.log(InputValue);
// const age = calAge2(2003);
// console.log(age);
//   uyishi - 9
let goFooot = 3.6;
let onVelo = 20.1;
let onCar = 70;
let onPlane = 800;
let elForm = document.getElementById("form");
let elFormInput = document.getElementById("form-control");
let elResult = document.getElementById("card-text");
let elResultVelo = document.getElementById("card-velo");
let elResultCar = document.getElementById("card-car");
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let InputValue = elFormInput.value;
  elResult.textContent = InputValue / goFooot + `soatda`;
  elResultVelo.textContent = InputValue / onVelo + "soatda";
  elResultCar.textContent = InputValue / onCar + "soatda";
});
