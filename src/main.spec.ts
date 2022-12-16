import { describe, expect, it } from "vitest"
import { ListNode } from "./listNode.js"
import { addNumbers } from "./addNumbers.js"

describe("add two numbers", () => {
  it("should work", () => {
    const l1 = new ListNode(0)
    const l2 = new ListNode(0)

    const result: ListNode = addNumbers(l1, l2)

    expect(result).toEqual(new ListNode(0))
  })
})
