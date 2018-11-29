require('dotenv').config()

const server = require('./server')

const port = process.env.PORT || 3000

function fleef () {
  const meep = 2
}

fleef()
server.listen(port, () => console.log(`Listening on ${port}`))
