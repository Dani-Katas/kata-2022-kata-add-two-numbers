import { ListNode } from "./listNode.js"

export function addNumbers(firstList: ListNode, secondList: ListNode) {
  const firstListValue = firstList.val
  const secondListValue = secondList.val

  return new ListNode(firstListValue + secondListValue)
}
