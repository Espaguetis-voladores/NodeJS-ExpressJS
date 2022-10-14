const express = require('express')
const Handlebars = require("handlebars");
const app = express()
const port = 8080


const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

app.get('/', (req, res) => {
  res.send( {mensaje : 'Hello World!'} ) 
})

app.listen(port, () => {
  console.log(`La app esta escuchando al puerto ${port}`)
})
