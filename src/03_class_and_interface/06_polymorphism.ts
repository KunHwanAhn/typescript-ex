interface SStorage<T> {
  [key: string]: T;
}

class LocalSStorage<T> {
  private storage: SStorage<T> = {}

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalSStorage<string>();
stringStorage.set('key', 'value');
stringStorage.get('key');

const booleanStorage = new LocalSStorage<boolean>();
booleanStorage.set('true', true);
booleanStorage.get('true');
