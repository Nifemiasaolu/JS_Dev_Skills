'use strict';

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX THE BUG
//     value: Number(prompt('Degrees celsius')),
//     value: 10,
//   };

// //   B) FIND THE BUG
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY THE BUG
// console.log(measureKelvin());

///////////////////
// CODE CHALLENGE

// 1) Understanding the problem
// - Array transformed to String, separated by ...
// - What is the X days? Answer: index + 1

// 2) Break up into sub-problem
// -Transform array into string
// -Transform each element into string with ºC
// -Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
printForecast(data2);
