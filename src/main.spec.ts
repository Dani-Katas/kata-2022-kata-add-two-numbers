import { describe, expect, it } from "vitest"
import { ListNode } from "./listNode.js"
import { addNumbers } from "./addNumbers.js"

describe("add two numbers", () => {
  it("returns zero with zero lists", () => {
    const l1 = new ListNode(0)
    const l2 = new ListNode(0)

    const result: ListNode = addNumbers(l1, l2)

    expect(result).toEqual(new ListNode(0))
  })

  it("sums two one digit lists", () => {
    const l1 = new ListNode(3)
    const l2 = new ListNode(1)

    const result: ListNode = addNumbers(l1, l2)

    expect(result).toEqual(new ListNode(4))
  })

  it("converts to two linked lists when the results is of two digits", () => {
    const l1 = new ListNode(5)
    const l2 = new ListNode(5)

    const result: ListNode = addNumbers(l1, l2)

    const expectedResult = new ListNode(0, new ListNode(1))
    expect(result).toEqual(expectedResult)
  })

  it("adds two digit lists", () => {
    const firstList = new ListNode(0, new ListNode(1))
    const secondList = new ListNode(0, new ListNode(1))

    const result: ListNode = addNumbers(firstList, secondList)

    const expectedResult = new ListNode(0, new ListNode(2))
    expect(result).toEqual(expectedResult)
  })

  it("adds three digit lists", () => {
    const firstList = new ListNode(0, new ListNode(1, new ListNode(2)))
    const secondList = new ListNode(0, new ListNode(1, new ListNode(2)))

    const result: ListNode = addNumbers(firstList, secondList)

    const expectedResult = new ListNode(0, new ListNode(2, new ListNode(4)))
    expect(result).toEqual(expectedResult)
  })

  it("adds lists with different number of digits", () => {
    const firstList = new ListNode(0, new ListNode(1, new ListNode(2)))
    const secondList = new ListNode(1)

    const result: ListNode = addNumbers(firstList, secondList)

    const expectedResult = new ListNode(1, new ListNode(1, new ListNode(2)))
    expect(result).toEqual(expectedResult)
  })
})
