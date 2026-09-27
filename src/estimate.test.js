import assert from "node:assert/strict";
import test from "node:test";
import { estimateRange } from "./estimate.js";

test("estimate range scales by room size and finish", () => {
  assert.deepEqual(
    estimateRange("Kitchen", "Medium", "Standard Laminate"),
    [162000, 207000],
  );
  assert.ok(
    estimateRange("Full Home", "Large", "Premium PU Finish")[0] >
      estimateRange("Bedroom", "Small", "Standard Laminate")[1],
  );
});
