const Engineer = require("../lib/Engineer");
test("Check engineer object", () => {
  const engineer = new Engineer(1, "fasika", "fasika@gmail.com", "fasikaWalle");
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.github).toBeDefined();
});
test("Gets engineer github ", () => {
  const engineer = new Engineer(1, "fasika", "fasika@gmail.com", "fasikaWalle");
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});
test("Gets engineer role", () => {
  const engineer = new Engineer(1, "fasika", "fasika@gmail.com", "fasikaWalle");
  expect(engineer.getRole()).toBe(engineer.constructor.name);
});
