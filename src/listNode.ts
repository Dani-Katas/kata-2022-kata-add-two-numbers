export class ListNode {
  constructor(private readonly value: number, private readonly next?: ListNode) {
    if (this.value >= 10) {
      const valueAdditionString = String(this.value)
      const secondDigitNumber = Number(valueAdditionString[1])
      const firstDigitNumber = Number(valueAdditionString[0])

      this.value = secondDigitNumber
      this.next = new ListNode(firstDigitNumber)
    }
  }

  private getNext(): ListNode {
    return this.next ?? new ZeroNode()
  }

  private hasNext() {
    return this.next == null
  }
  add(listToAdd: ListNode): ListNode {
    const additionOfValues = this.value + listToAdd.value
    if (this.hasNext() && listToAdd.hasNext()) {
      return new ListNode(additionOfValues)
    }

    const restOfTheList = this.getNext().add(listToAdd.getNext())

    return new ListNode(additionOfValues, restOfTheList)
  }
}

export class ZeroNode extends ListNode {
  constructor() {
    super(0)
  }
}
