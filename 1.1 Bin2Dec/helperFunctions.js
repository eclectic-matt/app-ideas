/*

  Helper functions to support
  The Binary to Decimal conversion

*/


// Simple version - using parseInt
// By including the 2nd parameter, you can parse binary inputs
// So parseInt(binaryValue,2) will convert for you
function parseIntConvert(num){
  return parseInt(num, 2);
}

// Manually convert the number
function manualConvert(num){
  // Start with exponent, result and the current bit of 0
  // Then work from right to left through the number
  let exponent = 0;
  let result = 0;
  let thisBit = 0;
  // While the number being processed is above 0
  while (num > 0){
    // Get the right most (least significant) bit
    thisBit = getRightMostBit(num);
    // When multiplied by 2^0, 2^1 etc this gives
    // the converted value for this bit
    result += thisBit * Math.pow(2, exponent);
    // Subtract this bit from the full value
    num -= thisBit;
    // Then divide by 10 to get the next bit
    num /= 10;
    // Increase the exponent by 1 (giving 1,2,4,8 etc)
    exponent++;
    console.log(num,thisBit,exponent);
  }
  return result;
}

// Get the left most (most significant) bit/digit for a number
function getLeftMostBit(num){
  // Set the exponent to 0 (= 10^0 = 1)
  let exponent = 0;
  // The value to check against is 10^exponent
  let checkVal = Math.pow(10,exponent);
  // While the number is greater than this power
  while (num > checkVal){
    // Increase the exponent by 1
    exponent++;
    // Recalculate the check value
    checkVal = Math.pow(10,exponent);
  }
  // Now the number is greater than the check value
  // Divide by the previous check value (exponent - 1)
  checkVal = Math.pow(10, exponent - 1);
  // The leftmostbit is the floored result
  // of dividing by the previous check value
  let lmb = Math.floor(num / checkVal);
  return lmb;
}

// Get the right most (least significant) bit/digit for a number
function getRightMostBit(num){
  // Divide the number by 10
  let tenth = num / 10;
  // Floor this number (remove the decimal part)
  let floorTenth = Math.floor(tenth);
  // Subtract the floored value from the tenth value
  // and use toFixed to prevent rounding errors
  let onlyTenth = (tenth - floorTenth).toFixed(1);
  // Then multiply back by 10 to get the end bit
  let rmb = Math.floor(onlyTenth * 10);
  return rmb;
}
