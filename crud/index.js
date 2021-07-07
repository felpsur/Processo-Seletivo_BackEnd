const database = require('./app/models/db');
const Produto = require('./app/models/carro');
(async () => {
  const database = require('./app/models/db');
  const Produto = require('./app/models/carro');

  try {
      const resultado = await database.sync();
      //console.log(resultado);
  } catch (error) {
      console.log(error);
  } 
})();

const port = process.env.PORT || 8081;

const express = require('express')

const app = express()

app.use(express.json())
 
app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

//Definindo rotas
const pages = require("./app/routes/pages.js")
app.post("/newCar", pages.create);
app.get("/consulta", pages.get);
app.put("/atualizar/:id", pages.update);
app.delete("/deletar/:id", pages.delete);
app.get("/consulta/:id", pages.get);