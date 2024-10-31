import test from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js";

test("sum function test suite", async (t) => {
  await t.test("should return correct sum for positive numbers", () => {
    assert.equal(sum(2, 3), 5);
    assert.equal(sum(0, 0), 0);
    assert.equal(sum(10, 20), 30);
  });

  await t.test("should return 0 for negative numbers", () => {
    assert.equal(sum(-1, 5), 0);
    assert.equal(sum(5, -1), 0);
    assert.equal(sum(-1, -1), 0);
  });

  await t.test("should return 0 for non-number inputs", () => {
    assert.equal(sum("2", 3), 0);
    assert.equal(sum(2, "3"), 0);
    assert.equal(sum(null, undefined), 0);
    assert.equal(sum([], {}), 0);
  });
});
