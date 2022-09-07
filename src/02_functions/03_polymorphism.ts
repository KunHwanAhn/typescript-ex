// without Generic
// type SuperPrint = {
//   (arr: number[]): void
//   (arr: boolean[]): void
//   (arr: string[]): void
//   (arr: (number|boolean)[]): void
// };

// with Generic
type SuperPrint = {
  <T>(arr: T[]): T
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i));

  return arr[0];
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(['a', 'b', 'c']);
superPrint([1, 2, true, false]);
