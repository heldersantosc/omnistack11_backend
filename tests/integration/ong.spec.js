const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  /** cria as tabelas do banco teste */
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  /** destroy a aplicacao após finalizar*/
  afterAll(async () => {
    await connection.destroy();
  });
  /** envia para o banco de teste os dados mockados */
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "EasyBuy",
        email: "heldersantos.c@gmail.com.br",
        whatsapp: "92991088095",
        city: "Manaus",
        uf: "AM"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
