const express = require('express')

const fish = require('../db/fish')

const fishDetails = require('../db/fishDetails')

const router = express.Router()

router.get('/', (req, res) => {
  fish.get()
    .then(fish => res.status(200).json({
      ok: true,
      fish
    }))
    .catch(err => res.status(500).json({
      ok: false,
      error: err.message
    }))
})

router.get('/:id', (req, res) => {
  const fishId = Number(req.params.id)
  fishDetails
    .getFishDetail(fishId)
    .then(fishDetail => res.status(200).json(fishDetail))
})

router.post('/', (req, res) => {
  if (req.body.name) {
    const {name, levelId, methodId, description, image, link, video} = req.body
    const newFish = {
      name,
      level_id: levelId,
      method_id: methodId
    }
    const fishDetail = {
      description,
      image,
      link,
      video
    }

    fish
      .createFish(newFish, fishDetail)
      .then(() => {
        res.json({Okay: true})
      })
      .catch((err) => res.json({Okay: false, error: err.message}))
  }
  else {
    res.json({Okay: false, error: 'Name field is required.'})
  }
})

router.post('/delete/:id', (req, res) => {
  const fishId = Number(req.params.id)
  fishDetails
    .deleteFishDetail(fishId)
    .then(()=> { 
      fish
        .deleteFish(fishId)
        .then(res.send(`deleted fish with id ${fishId}`))
        // .catch((err) => res.json({ Okay: false, error: err.message }))   
  })
})
   
module.exports = router
