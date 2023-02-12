const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/goodbye', (req, res) => {
  res.send('Goodbye!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/* https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam */