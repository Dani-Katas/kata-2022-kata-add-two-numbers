export class ListNode {
  private readonly value: number
  private next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next

    if (this.value >= 10) {
      const valueAdditionString = String(this.value)
      const secondDigitNumber = Number(valueAdditionString[1])
      const firstDigitNumber = Number(valueAdditionString[0])

      this.value = secondDigitNumber
      this.next = new ListNode(firstDigitNumber)
    }
  }

  add(listToAdd: ListNode): ListNode {
    if (this.next === null && listToAdd.next === null) {
      const valueAddition = this.value + listToAdd.value
      if (valueAddition < 10) return new ListNode(this.value + listToAdd.value)

      return new ListNode(valueAddition)
    }

    const a = this.next?.add(listToAdd.next ?? new ListNode(0)) ?? new ListNode(0)

    return new ListNode(0, a)
  }
}
