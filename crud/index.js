const database = require('./db');
const Produto = require('./carro');
(async () => {
  const database = require('./db');
  const Produto = require('./carro');

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

const pages = require("./pages.js")
app.post("/newCar", pages.create);
app.get("/consulta", pages.get);
app.put("/atualizar/:id", pages.update);
app.delete("/deletar/:id", pages.delete);
app.get("/consulta/:id", pages.get);