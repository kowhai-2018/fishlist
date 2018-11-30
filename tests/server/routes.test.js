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