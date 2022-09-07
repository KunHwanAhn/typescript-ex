// function superPrint<V>(arr: V[]) {
//   return arr[0]
// }
const superPrint = <V>(arr: V[]): V => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([1, 2, true, false]);


type Player<V> = {
  name: string;
  extraInfo:V
};

const lynn: Player<null> = {
  name: 'lynn',
  extraInfo: null,
}

type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player<NicoExtra>

const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'kimchi',
  }
}

type ArrNumbers = Array<number>;
const arrNumbers: ArrNumbers = [1, 2, 3, 4];
const printAllNumbers = (arr: ArrNumbers) => {
  arr.forEach((i) => console.log(i));
}
