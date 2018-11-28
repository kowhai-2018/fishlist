const request = require('supertest')

const server = require('../../server/server')

test('/auth/login fails if username not provided', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/auth/login')
    .send({ password: 'password' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.error).toMatch(/username/)
    })
})

test('/auth/login fails if password not provided', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/auth/login')
    .send({ username: 'username' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.error).toMatch(/password/)
    })
})

test('/auth/register fails if username not provided', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/auth/register')
    .send({ password: 'password' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.error).toMatch(/username/)
    })
})

test('/auth/register fails if password not provided', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/auth/register')
    .send({ username: 'username' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.error).toMatch(/password/)
    })
})

test('/auth/register fails if email not provided', () => {
  expect.assertions(2)
  return request(server)
    .post('/api/v1/auth/register')
    .send({ username: 'username', password: 'password' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.error).toMatch(/email/)
    })
})

