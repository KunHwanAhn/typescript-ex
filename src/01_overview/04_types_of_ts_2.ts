const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(5);

const names: readonly string[] = ['a', 'b'];
names.push('c');

// 타입 3개를 명시했기에 최소한 3개의 배열이어야 함.
// const foo: [string, number, boolean] = [];
const foo: [string, number, boolean] = ['nico', 1, true];
foo[0] = 1;

const bar: readonly [string, number, boolean] = ['nico', 1, true];
bar[0] = 1;

const undefinedA: undefined = undefined;
const nullB: null = null;

const anyA: any[] = [];
const anyB: any = true;
const anyC = a + b;
