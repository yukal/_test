/**
 * Searchin the number that occurs the most
 * @param {Array} items An array with numbers
 * @returns number|bool
 */
function findLuckyNumber(items) {
  const hashmap = {};
  let luckyMatches = 0;
  let luckyNumber;

  items.forEach((number) => {
    if (!hashmap.hasOwnProperty(number)) {
      hashmap[number] = 1;
    } else {
      hashmap[number] += 1;

      // The ">" strategy will save only first matched lucky number
      // The ">=" strategy will identify the last matched lucky number
      if (hashmap[number] >= luckyMatches) {
        luckyMatches = hashmap[number];
        luckyNumber = number;
      }
    }
  });

  return luckyNumber ?? false;
}

const cases = [
  [1, 2, 2, 3, 4],
  [2, 3, 4, 5],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1],
  [2, -1, -1, 5, -2, -2],
];

cases.forEach((items) => {
  const luckyNumber = findLuckyNumber(items);
  console.log(luckyNumber);
});
