const server = require('../../server/server')
const request = require('supertest')

test('/delete/:id', (done) => {
  request(server)
    .post('/api/v1/fish/delete/:id')
    .expect(400)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})

test('/delete/', (done) => {
  request(server)
    .post('/api/v1/fish/delete/:id')
    .expect(400)
    .end((err, res) => {
      expect(err).toBeNull()
      done()
    })
})