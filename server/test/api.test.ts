import request from 'supertest'
import app from '../src/app'

describe('GET /test', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/test')
      .expect(200)
  })
})
