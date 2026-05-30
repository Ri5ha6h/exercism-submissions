//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function getColorValue(color){
  switch(color.toLowerCase()){
    case "black":
      return 0;
    case "brown":
      return 1;
    case "red":
      return 2;
    case "orange":
      return 3;
    case "yellow":
      return 4;
    case "green":
      return 5;
    case "blue":
      return 6;
    case "violet":
      return 7;
    case "grey":
      return 8;
    case "white":
      return 9;
  }
}

export const decodedValue = (colorArr) => {

  if(colorArr.length < 2){
    return;
  }

  let str = "";
  for(let i = 0; i < colorArr.length; i++){
    if(i === 0 || i === 1){
      str += getColorValue(colorArr[i]);
    }
  }

  return +(str);
  
};
