/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function getPrice(pizza){
  switch(pizza.toLowerCase()){
    case "margherita":
      return 7;
    case "caprese":
      return 9;
    case "formaggio":
      return 10;
    case "extrasauce":
      return 1;
    case "extratoppings":
      return 2;
    default:
      return 0;
  }
}
export function pizzaPrice(pizza, ...extras) {
  if(extras.length > 0){
    return getPrice(pizza) + pizzaPrice(...extras);
  }else{
    return getPrice(pizza);
  }
  return count;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let count = 0;
  for(let pizz of pizzaOrders){
    count += pizzaPrice(pizz.pizza, ...pizz.extras);
  }
  return count;
}
