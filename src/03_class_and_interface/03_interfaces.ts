// type Nickname = string;
// type HealthBar = 1 | 5 | 10;
// type Team = 'read' | 'blue' | 'yellow';
// type Friends = Array<Player>;

// interface Player {
//   nickname: Nickname,
//   healthBar: HealthBar,
//   team: Team,
// }

// const nico: Player = {
//   nickname: 'nico',
//   healthBar: 10,
//   team: "blue",
// }

// type Food = string;
// const kimchi: Food = 'delicious';

// Using Type
// type User = {
//   name: string;
// }

// type Player = User & {
//   nickname: string;
// }

// const nico: Player = {
//   name: 'nico',
//   nickname: '니꼬',
// }

// Using interface
interface User {
  name: string
}
interface User {
  heath: number
}

interface Player extends User {
  nickname: string
}

const nico: Player = {
  name: 'nico',
  heath: 10,
  nickname: '니꼬',
}
