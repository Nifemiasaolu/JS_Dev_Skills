// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// HOW TO SOLVE PROBLEMS

// PROBLEM
//  We work for a company building a smart home thermometer.O
//  Our most recent task is this: "Given an array of temperatures
// amplitude of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between
// highest and lowest temp.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and rturn it.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//     console.log(max, min);
//     return max - min;
//   }
// };
// const amplitude = calcTempAmplitude(temperature);
// console.log(amplitude);

//////////////
// PROBLEM 2

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays. should we implement functionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// -Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//     console.log(max, min);
//     return max - min;
//   }
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

///////////////////
// DEBUGGING (FIXING ERRORS)

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

    // C) FIX THE BUG
    // value: Number(prompt('Degrees celsius')),
  //   value: 10,
  // };

  // B) FIND THE BUG
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// A) IDENTIFY THE BUG
// console.log(measureKelvin());

///////////////////////
// Using a Debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([4, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);



