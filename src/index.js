const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {  
  res.send('Hello World!')
})

app.get('/goodbye', (req, res) => {
  res.send('Goodbye!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})