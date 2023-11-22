// helpers.js
class IdGenerator {
  constructor() {
    this.counter = {};
  }

  getId = (param = 'key') => {
    if (!this.counter[param]) {
      this.counter[param] = 1;
    }
    return `${param}_${this.counter[param]++}`;
  };
}

const idGenerator = new IdGenerator();

export default idGenerator;