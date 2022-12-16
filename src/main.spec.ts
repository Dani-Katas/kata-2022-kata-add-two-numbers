import { describe, it, expect } from "vitest"
// import { myFunction } from "./main.js"

class ListNode {
  constructor(number: number) {}
}

function addNumbers(l1: ListNode, l2: ListNode) {
  return new ListNode(0)
}

describe("add two numbers", () => {
  it("should work", () => {
    const l1 = new ListNode(0)
    const l2 = new ListNode(0)

    const result: ListNode = addNumbers(l1, l2)

    expect(result).toEqual(new ListNode(0))
  })
})
