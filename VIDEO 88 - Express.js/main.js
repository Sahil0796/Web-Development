
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))  // To make your code visible or not !


app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact here !')
})

app.get('/about', (req, res) => {
  res.send('Hello about us !')
})

app.get('/help', (req, res) => {
  res.send('Hello help !')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})