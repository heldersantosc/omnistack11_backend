const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.json({
    evento: "semana online ",
    aluno: "Node"
  });
});

app.listen(3333);
