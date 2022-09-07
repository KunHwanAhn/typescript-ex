abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string,
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  abstract getNickName(): string
}

class Player extends User {
  getNickName() {
    return this.nickname;
  }
}

const nico = new Player('nico', 'las', '니꼬');
nico.getFullName();
