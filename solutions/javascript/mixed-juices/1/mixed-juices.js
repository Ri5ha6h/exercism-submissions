// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name.toLowerCase()){
    case "pure strawberry joy":
      return 0.5;
    case "energizer":
      return 1.5;
    case "green garden":
      return 1.5;
    case "tropical island":
      return 3;
    case "all or nothing": 
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesSwitch(lime){
  switch(lime.toLowerCase()){
    case "small":
      return 6;
    case "medium":
      return 8;
    default:
      return 10;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  for(let i = 1; i <= limes.length; i++){
      if(wedgesNeeded !== 0){
        if(limesSwitch(limes[i - 1]) > wedgesNeeded){
          wedgesNeeded = 0;
        }else{
          wedgesNeeded = wedgesNeeded - limesSwitch(limes[i - 1]);
        }
        count = i;
      }
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let count = 0;
  let newOrderList = [];
  for(let i = 0; i < orders.length; i++){
    if(count < timeLeft){
      count += timeToMixJuice(orders[i]);
    }else{
      newOrderList.push(orders[i]);
    }
  }
  return newOrderList;
}
