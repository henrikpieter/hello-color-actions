const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from a cold Utrecht, The Netherlands!");
  });
});
