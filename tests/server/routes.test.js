const index = require('../../server/db/index')
const server = require('../../server/server')
const request = require('supertest')

test('/', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})

test('/:id', (done) => {
  request(server)
    .get('/:id')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})

test('/api/v1/auth', (done) => {
  request(server)
    .get('/api/v1/auth')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})
