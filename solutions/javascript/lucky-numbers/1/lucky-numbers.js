// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let str1 = "";
  let str2 = "";
  for(let num of array1){
    str1 += num;
  }
  for(let num1 of array2){
    str2 += num1;
  }
  return Number(str1) + Number(str2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  if(value < 0){
    return false;
  }

  let actualNum = value;
  let reversedNum = 0;
  
  while(actualNum > 0){
    const reminder = actualNum % 10;
    reversedNum = (reversedNum * 10) + reminder; 
    actualNum = actualNum / 10;
    actualNum = Math.floor(actualNum);
  }
  
  return value === reversedNum;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return "Required field";
  }else if(Number(input)){
    return "";
  }else{
    return "Must be a number besides 0";
  }
}
