const request = require('supertest');
const app = require('../app');

describe('/hello', () => {
  test('GET', async () => {
    const res = await request(app).get('/hello');
    expect(res.body).toBe('hello!');
    expect(res.statusCode).toBe(200);
  });
  
  describe('POST', () => {
    it('should return 400 when firstName is foo', async () => {
      const res = await request(app).post('/hello').send({ firstName: 'foo' });
      expect(res.statusCode).toBe(400);
      expect(res.text).toBe('"foo não pode ser!"');
      expect(res.type).toBe('text/plain');
    });
  
    it('should return 200 when firstName is NOT foo', async () => {
      const res = await request(app).post('/hello').send({ firstName: 'baz' });
      expect(res.type).toBe('application/json');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'outros firstNames funcionam' });
    });
  });
});
