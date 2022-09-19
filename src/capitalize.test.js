import capitalize from "./capitalize";

test("capitalize1", () => {
  expect(capitalize("joe BIDEN")).toBe("Joe biden");
});

test("capitalize2", () => {
  expect(capitalize("trump")).toBe("Trump");
});

test("capitalize3", () => {
  expect(capitalize("trump")).toBe("Trump");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});
