// unkown
let a3: unknown;
// unkown 이기에 허용하지 않음.
let b3 = a3 + 1;

if (typeof a3 === 'number') {
  let b = a3 + 1;
}

if (typeof a3 === 'string') {
  let b = a3.toUpperCase();
}

// void
function hello1(): void {
  console.log('hello');
}
const foo3 = hello1();
foo3.toUpperCase();

// never
function hello2(): never {
  return 'x';
}

function hello3(name: string|number): never {
  if (typeof name === 'string') {
    console.log(`${name}은 문자열`);
    throw new Error('return도, void도 안됨!')
  } else if (typeof name === 'number') {
    console.log(`${name}은 숫자`);
    throw new Error('return도, void도 안됨!')
  } else {
    console.log(`${name}은 never`);
    throw new Error('Error!!');
  }
}
