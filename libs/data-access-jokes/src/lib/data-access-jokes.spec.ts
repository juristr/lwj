import { dataAccessJokes } from './data-access-jokes';

describe('dataAccessJokes', () => {
  it('should work', () => {
    expect(dataAccessJokes()).toEqual('data-access-jokes');
  });
});
