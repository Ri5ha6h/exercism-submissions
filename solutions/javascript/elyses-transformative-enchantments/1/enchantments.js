// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((item) => item * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let updatedDeck = [];
  deck.map((item, index) => {
    if(item === 3 && deck.length === 1){
      updatedDeck = [...updatedDeck, 3, 3, 3];
    }else if(item === 3 && deck[index - 1] !== 3 && deck[index + 1] !== 3){
      updatedDeck = [...updatedDeck, 3, 3, 3];
    }else{
      updatedDeck.push(item);
    }
  })

  return updatedDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleDeck = [];
  const d = (deck.length / 2);
  middleDeck.push(deck[d - 1]);
  middleDeck.push(deck[d]);

  return middleDeck;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const halfLen = (deck.length / 2);
  const remainingPart = deck.splice(halfLen, halfLen);
  const deckHalf = remainingPart.splice(remainingPart.length - 1, 1)
  const [a, ...rest] = deck;
  const newDeck = [...rest, ...deckHalf, a, ...remainingPart];

  return newDeck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((item) => item === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => {return a - b});
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  if(deck.length === 0){
    return [];
  }
  
  const len = deck.length;

  for(let i = 1; i < len/2; i++){
    const a = deck[i - 1];
    const b = deck[len - i];
    deck[i-1] = b;
    deck[len - i] = a;
  }

  return deck;
  
}
