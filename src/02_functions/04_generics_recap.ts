type SuperPrint = {
  <T, V>(arr: T[], arr2:V): T
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i));

  return arr[0];
}

superPrint([1, 2, 3, 4], 'x');
superPrint([true, false, true], 1);
superPrint(['a', 'b', 'c'], true);
superPrint([1, 2, true, false], 'x');
