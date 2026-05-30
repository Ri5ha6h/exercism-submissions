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
  let count = 0;
  count += getPrice(pizza);
  const pizzaArr = [...extras];
  if(pizzaArr.length > 0){
    for(let pizz of pizzaArr){
      count += getPrice(pizz);
    }
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
  if(pizzaOrders.length > 0){
    pizzaOrders.map((item) => {
      count += getPrice(item.pizza);
      if(item.extras.length > 0){
        for(let ext of item.extras){
          count += getPrice(ext);
        }
      }
    })
  }
  return count;
}
