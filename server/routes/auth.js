const express = require('express')

const router = express.Router()

router.post('/login', validateLogin, checkUser, issueToken)
router.post('/register', validateRegistration, createUser, issueToken)

function checkUser (req, res, next) {
}

function createUser (req, res, next) {
}

function issueToken (req, res, next) {
}

function login (req, res, next) {
}

function register (req, res, next) {
}

function validateLogin (req, res, next) {
}

function validateRegistration (req, res, next) {
}

module.exports = {
  login,
  register
}
