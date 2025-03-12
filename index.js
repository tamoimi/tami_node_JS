const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
  const {name} = req.params
  if(name === "dog"){
    res.json('Woof!')
  }else if(name === "cat"){
    res.json('Meow!')
  }else if(name === "pig"){
    res.json('Oink!')
  }else {
    res.json('Sound not found.')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})