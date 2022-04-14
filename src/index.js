const express = require("express");

const app = express();
app.use(express.json());

app.get("/materias", (req, res) => {
  //Query.params=> Paginação/filtro
  const query = req.query;
  console.log(query);
  return res.json(["matematica", "geografia", "Portugues"]);
});
app.post("/materias", (req, res) => {
  //Body Params => os objetos inserção/alteração (JSON)
  const body = req.body;
  console.log(body);
  return res.json(["matematica", "geografia", "Portugues", "História"]);
});

//PUT altera uma Informação
app.put("/materias/:id", (req, res) => {
  // params serve para editar/deletar ou buscar algo especifico...
  const params = req.params;
  console.log(params);
  return res.json(["fisica", "geografia", "Portugues", "História"]);
});

//PATCH altera uma informação especifica
app.patch("/materias/:id", (req, res) => {
  return res.json(["fisica", "ed.fisica", "Portugues", "História"]);
});

app.delete("/materias/:id", (req, res) => {
  return res.json(["ed.fisica", "Portugues", "História"]);
});

app.listen(3333);
