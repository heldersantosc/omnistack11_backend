const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId.js");

module.exports = {
  /** lista todos os cadastros */
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  /** cria novos dados na tabela */
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = await generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
