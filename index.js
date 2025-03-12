const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send({'sound': '멍멍'})
})

app.get('/cat', (req, res) => {
  res.send({'sound': '야옹'})
})

app.get('/user/:id', (req, res) => {
  const user = req.params
  console.log(user.id)

  res.json({'userId': user.id})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})