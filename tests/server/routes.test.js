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
