type Words = {
  [key: string]: string
}

class Word {
  constructor(
    public term: string,
    public def: string,
  ) {}
}

class Dict {
  private words: Words

  constructor() {
    this.words = {};
  }

  static hello() {
    return 'hello';
  };

  add(word: Word): void {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string): string {
    return this.words[term];
  }
}

const dict = new Dict();

const kimchi = new Word('kimchi', '한국의 음식');
dict.add(kimchi);
console.log(dict.def('kimchi'));
