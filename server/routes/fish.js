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

router.post('/new', (req, res) => {
  const newFish = {
    name: req.body.name
  }
  const fishDetail = {
    description: req.body.description,
    image: req.body.image,
    links: req.body.links,
    video: req.body.video
  }
  const fishLevel = {
    level: req.body.level
  }
  const fishMethod = {
    method: req.body.method
  }
  fish.createFish(newFish, fishDetail, fishLevel, fishMethod)
    .then(() => {
      res.redirect('/')
    })
})


module.exports = router
