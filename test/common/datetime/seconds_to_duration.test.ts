import { assert, describe, it } from "vitest";

import secondsToDuration from "../../../src/common/datetime/seconds_to_duration";

describe("secondsToDuration", () => {
  it("works", () => {
    assert.strictEqual(secondsToDuration(0), null);
    assert.strictEqual(secondsToDuration(65), "1:05");
    assert.strictEqual(secondsToDuration(3665), "1:01:05");
    assert.strictEqual(secondsToDuration(39665), "11:01:05");
    assert.strictEqual(secondsToDuration(932093), "258:54:53");
    assert.strictEqual(secondsToDuration(59), "59");
    assert.strictEqual(secondsToDuration(3600), "1:00:00");
    assert.strictEqual(secondsToDuration(3660), "1:01:00");
    assert.strictEqual(secondsToDuration(60), "1:00");
    assert.strictEqual(secondsToDuration(61), "1:01");
  });
});
