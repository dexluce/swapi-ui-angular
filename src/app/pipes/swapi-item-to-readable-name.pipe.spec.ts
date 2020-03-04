import { SwapiItemToReadableNamePipe } from './swapi-item-to-readable-name.pipe';

describe('SwapiItemToReadableNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SwapiItemToReadableNamePipe();
    expect(pipe).toBeTruthy();
  });
});
