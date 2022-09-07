// 추상 클래스
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  abstract sayHi(name: string): string
  abstract getFullName(): string
}

class Player extends User {
  sayHi(name: string): string {
    return `Hi ${name}`;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 인터페이스
interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  getFullName(): string;
}

interface Human {
  health: number;
  getHealth(): number;
}

class Player2 implements User2, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}

  sayHi(name: string): string {
    return `Hi ${name}`;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getHealth(): number {
    return this.health;
  }
}

// interface도 type처럼!
const makeUser = (user: User2): string => {
  return 'hi';
}
makeUser({
  firstName: 'nico',
  lastName: 'las',
  sayHi: () => 'hi',
  getFullName: () => 'fullname'
})
