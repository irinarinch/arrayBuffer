export default class ArrayBufferConverter {
  load(buffer) {
    this.load = new Uint16Array(buffer);
  }

  toString() {
    let str = '';

    for (let i = 0; i < this.load.length; i += 1) {
      str += String.fromCharCode(this.load[i]);
    }

    return str;
  }
}
