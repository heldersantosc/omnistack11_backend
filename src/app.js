/*
* Tipos de Parâmetros
Query Params: parametros nomeados enviados após "?"
Route Params: parametros utilizados para identificar os recursos
Request body: corpo da requisição, criar alterar recursos
*/

/**
 * instalando o knex pra sqlite
 */
const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
