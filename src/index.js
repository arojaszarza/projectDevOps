const express = require('express')
const app = express()
const port = 3000
let Elena = "te jodes y arreglas conflictos"

if (Elena === "te jodes y arreglas conflictos"){
  console.log("Es broma tronca no te lo tomes a mal")
} else {
  console.log("Que payasete soy, city of stars")
}

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})