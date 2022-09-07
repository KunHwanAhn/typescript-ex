///// type
type PlayerA = {
  name: string;
}
type PlayerAA = PlayerA & {
  lastName: string;
}

const playerA: PlayerAA = {
  name: 'nico',
  lastName: 'las',
}

///// interface
interface PlayerB {
  name: string;
}
interface PlayerB {
  lastName: string;
}
interface PlayerB {
  health: number;
}

const playerB: PlayerB = {
  name: 'nico',
  lastName: 'las',
  health: 10,
}
