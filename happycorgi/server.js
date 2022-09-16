const express = require("express")
const app = express()

app.listen(3002, () => {
  console.log("app listening on port 3002")

})

app.get('/', (request, response) => {
    response.send('Happy Corgi')
  })
  