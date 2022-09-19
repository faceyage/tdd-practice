import reverseStr from "./reverseStr";

test("Reverse String 1", () => {
  expect(reverseStr("odin")).toBe("nido");
});

test("Reverse String 2", () => {
  expect(reverseStr("Thor")).toBe("rohT");
});

test("palindrome", () => {
  expect(reverseStr("aka")).toBe("aka");
});

test("Empty String", () => {
  expect(reverseStr("")).toBe("");
});
