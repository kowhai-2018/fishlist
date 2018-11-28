const express = require('express')

const fish = require('../db/fish')

const router = express.Router()

router.get('/', (req, res) => {
  fish.get()
    .then(fish => res.status(200).json(fish))
})

module.exports = router
