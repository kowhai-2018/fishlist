const express = require('express')

const fish = require('../db/fish')

const fishDetails = require('../db/fishDetails')

const router = express.Router()

router.get('/', (req, res) => {
  fish.get()
    .then(fish => res.status(200).json(fish))
})

router.get('/:id', (req, res) => {
  const fishId = (Number(req.params.id))
  fishDetails.getFishDetail(fishId)
    .then(fishDetail => res.status(200).json(fishDetail))
})


module.exports = router
