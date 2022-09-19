import calculator from "./calculator";

test("Add1", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("Add2", () => {
  expect(calculator.add(12, 16)).toBe(28);
});

test("Add Floats", () => {
  expect(calculator.add(0.3, 0.2)).toBeCloseTo(0.5);
});

test("Subtract1", () => {
  expect(calculator.subtract(12, 6)).toBe(6);
});

test("Divide1", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test("Divide To Zero", () => {
  expect(() => {
    calculator.divide(10, 0);
  }).toThrow("Can't divide to 0");
});

test("Multiply1", () => {
  expect(calculator.multiply(10, 20)).toBe(200);
});
