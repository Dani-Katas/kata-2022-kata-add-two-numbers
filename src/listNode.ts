export class ListNode {
  private readonly value: number
  private readonly next: ListNode | null
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

  getNext(): ListNode {
    return this.next ?? new ZeroNode()
  }

  private hasNext() {
    return this.next === null
  }

  private safeNext(listToAdd: ListNode): ListNode {
    return listToAdd.next ?? new ZeroNode()
  }

  add(listToAdd: ListNode): ListNode {
    const additionOfValues = this.value + listToAdd.value
    if (this.hasNext() && listToAdd.hasNext()) {
      return new ListNode(additionOfValues)
    }

    const restOfTheList = this.getNext().add(this.safeNext(listToAdd))

    return new ListNode(additionOfValues, restOfTheList)
  }
}

export class ZeroNode extends ListNode {
  constructor() {
    super(0, null)
  }
}
