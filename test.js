function findLucky(items) {
  const length = items.length;
  const matches = {};
  let max = 0;

  for (let n = 0; n < length; n++) {
    const num = items[n];

    if (!matches.hasOwnProperty(num)) {
      matches[num] = 1;
    } else {
      matches[num] += 1;

      if (matches[num] > max) {
        max = matches[num];
      }
    }
  }

  return max > 1 ? max : -1;
}

const cases = [
  [1, 2, 2, 3, 4],
  [2, 3, 4, 5],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1],
];

cases.map((items) => {
  const luckyNumber = findLucky(items);
  console.log(luckyNumber);
});
