/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if(remainingTime === null || remainingTime === undefined){
    return "You forgot to set the timer.";
  }
  if(remainingTime === 0){
    return "Lasagna is done.";
  }
  return "Not done, please wait."
}

export function preparationTime(layers, averageTime){
  if(averageTime === undefined){
    return (layers.length * 2);
  }
  return (layers.length * averageTime);
}

export function quantities(layers){
  const noodles = 50;
  const sauce = 0.2;

  let totalNoodles = 0;
  let totalSauce = 0;

  for(let layer of layers){
    if(layer === "noodles"){
      totalNoodles = totalNoodles + noodles;
    }
    if(layer === "sauce"){
      totalSauce = totalSauce + sauce;
    }
  }

  return {noodles: totalNoodles, sauce: totalSauce};
}

export function addSecretIngredient(friendList, myList){
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, portion){
  if(portion === undefined){
    return recipe;
  }

  const actualPortion = portion / 2;

  const updatedRecipe = {};

  for(let item in recipe){
    const total = recipe[item] * actualPortion;
    updatedRecipe[item] = total;
  }

  return updatedRecipe;
}
















