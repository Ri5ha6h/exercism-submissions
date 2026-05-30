//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  const giga = 1000000000 * 1000;
  const getTime = time.getTime();
  const add = getTime + giga;

  return new Date(add);
};
