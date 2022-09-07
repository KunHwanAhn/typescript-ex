// JavaScript는 되지만 Typescript에서 허용하지 않는 에러들
// 케이스 1
let a1 = 'hello';
a1 = 'bye';
a1 = 1;

// 케이스 2
let b1: boolean = 'x';

// 케이스 3
// let c = [1, 2, 3];
let c1: number[] = []; // 조금 더 명시적인 타입 지정
c1.push('4');

// 케이스 4
const player = {
  name: 'conan',
};
player.name = 1;
