export class ListNode {
  private readonly value: number
  private next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }

  add(listToAdd: ListNode): ListNode {
    const valueAddition = this.value + listToAdd.value
    if (valueAddition < 10) return new ListNode(this.value + listToAdd.value)

    const valueAdditionString = String(valueAddition)
    const secondDigitNumber = Number(valueAdditionString[1])
    const firstDigitNumber = Number(valueAdditionString[0])
    return new ListNode(secondDigitNumber, new ListNode(firstDigitNumber))
  }
}
