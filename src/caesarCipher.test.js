import cipher from "./caeserCipher";

test("Cipher1", () => {
  expect(cipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("Cipher2", () => {
  expect(cipher("defend the east wall of the castle", 25)).toBe(
    "cdedmc sgd dzrs vzkk ne sgd bzrskd"
  );
});

test("Cipher3 | cipher with other characters", () => {
  expect(cipher("Hello, brother this is a big day!", 18)).toBe(
    "Zwddg, tjglzwj lzak ak s tay vsq!"
  );
});
