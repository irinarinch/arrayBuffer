import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../converter';

const converter = new ArrayBufferConverter();

test('testing converter', () => {
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
