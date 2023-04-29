'use strict';

const measureKelvin = function () {
      const measurement = {
        type: 'temp',
        unit: 'celsius',
    
        C) FIX THE BUG
        value: Number(prompt('Degrees celsius')),
        value: 10,
      };
    
      B) FIND THE BUG
      console.table(measurement);
    
      const kelvin = measurement.value + 273;
      return kelvin;
    };
    
    A) IDENTIFY THE BUG
    console.log(measureKelvin());