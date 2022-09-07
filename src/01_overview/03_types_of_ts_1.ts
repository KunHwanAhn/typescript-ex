const a = 1;  // const a: number = 1;
const a2 = [1, 2];  // const a2: number[] = [1, 2];

const b = 'i';  // const b: string = 'i';
const b2 = ['a', 'b'];  // const b2: string[] = ['a', 'b'];

const c = true; // const c: boolean = true;
const c2 = [true];  // const c2: boolean[] = [true];

// Object & Function

type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

// const player1: Player = {
//   name: 'player1',
// };

// const player2: Player = {
//   name: 'player2',
//   age: 12,
// };

// function playerMaker(name: string): Player {
//   return { name };
// }
const playerMaker = (name: string): Player => {
  return { name };
}

const player1 = playerMaker('player1');
player1.age = 12;
player1.name = 'new name';

const player2 = playerMaker('player2');
// age가 undefined가 될 수도 있기에 경고함.
if (player2.age < 10) {
}
