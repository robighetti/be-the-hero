const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ONG ANA CSA",
        email: "emailz@email.com.br",
        whatsapp: "5519996846864",
        city: "Piracicaba",
        uf: "SP"
      });

    expect(response.type).toBe('application/json');
  });
});