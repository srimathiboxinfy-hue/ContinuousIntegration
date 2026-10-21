// calculator.test.js

// 1. Import the calculator function we want to check
const { add } = require("./calculator");

// 2. Define our test suite grouping
describe("Calculator Math Checks", () => {
  // 3. Define the specific test case
  it("should successfully add two positive integers together", () => {
    // Act: Run the real code function
    const result = add(2, 3);

    // Assert: Verify using a Jest assertion statement
    expect(result).toBe(5);
  });
});
