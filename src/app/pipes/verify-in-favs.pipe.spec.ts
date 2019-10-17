import { VerifyInFavsPipe } from './verify-in-favs.pipe';

describe('VerifyInFavsPipe', () => {
  it('create an instance', () => {
    const pipe = new VerifyInFavsPipe('trigger!');
    expect(pipe).toBeTruthy();
  });
});
