import analyzeArray from "./analyzeArray";

test("Analyze1", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray(arr)).toEqual(object);
});

test("Analyze2", () => {
  const arr = [0, 8, 3, 4, 2, 6, 26];
  const object = {
    average: 7,
    min: 0,
    max: 26,
    length: 7,
  };
  expect(analyzeArray(arr)).toEqual(object);
});

test("Analyze3", () => {
  const arr = [0, 0, 0, 0];
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 4,
  };
  expect(analyzeArray(arr)).toEqual(object);
});
