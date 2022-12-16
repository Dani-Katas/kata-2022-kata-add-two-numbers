export class ListNode {
  private readonly value: number
  private next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }

  add(listToAdd: ListNode): ListNode {
    return new ListNode(this.value + listToAdd.value)
  }
}
