const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.jsd");

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined(); // eslint-disable-line
});
