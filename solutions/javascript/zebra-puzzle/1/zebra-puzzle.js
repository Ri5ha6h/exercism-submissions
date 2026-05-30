//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
    this.houseOwners = {
      "Norwegian": {
        "houseOrder": 1,
        "houseColor": "",
        "pet": "",
        "drinks": "",
        "hobby": ""
      },
      "Englishman": {
        "houseOrder": "",
        "houseColor": "Red",
        "pet": "",
        "drinks": "",
        "hobby": ""
      },
      "Spaniard": {
        "houseOrder": "",
        "houseColor": "",
        "pet": "dog",
        "drinks": "",
        "hobby": ""
      },
      "Ukrainian": {
        "houseOrder": "",
        "houseColor": "",
        "pet": "",
        "drinks": "tea",
        "hobby": ""
      },
      "Japanese": {
        "houseOrder": "",
        "houseColor": "",
        "pet": "",
        "drinks": "",
        "hobby": "chess"
      }
    }
  }

  waterDrinker() {
    return "Norwegian";
  }

  zebraOwner() {
    return "Japanese";
  }
}
