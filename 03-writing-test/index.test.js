import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "./index.js";

test("sum function should work correctly", (t) => {
  assert.equal(sum(2, 3), 5);
});
