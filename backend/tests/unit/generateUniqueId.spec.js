const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID ', () => {
  it('it shoul generate unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});