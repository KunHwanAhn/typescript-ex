// JavaScript는 되지만 Typescript에서 허용하지 않는 에러들
// 케이스 1
const conan = {
  nickname: 'conan',
};
conan.hello();

// 케이스 2
[1, 2, 3, 4] + false;

// 케이스 3
function divide(a, b) {
  return a / b;
}
divide('foo');
