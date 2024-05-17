object Solution {
  def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {
    val result = new ListNode(0, null)
    var (cur1, cur2, curSum, carry) = (l1, l2, result, 0)
    while (cur1 != null || cur2 != null) {
      val a = if (cur1 != null) cur1.x else 0
      val b = if (cur2 != null) cur2.x else 0
      val sum = a + b + carry
      curSum.next = new ListNode(sum % 10)
      if (cur1 != null) { cur1 = cur1.next }
      if (cur2 != null) { cur2 = cur2.next }
      curSum = curSum.next
      carry = sum / 10
    }
    if (carry > 0) {
      curSum.next = new ListNode(carry)
    }
    if (result.next != null) {
      result.next
    } else {
      result
    }
  }
}

object Solution2 {
  def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {
    addTwoNumbers(l1, l2, 0)
  }

  def addTwoNumbers(l1: ListNode, l2: ListNode, carry: Int): ListNode = {
    val (a, b) = if (l1 == null) (l2, l1) else (l1, l2)
    (a, b) match {
      case (null, null) =>
        if (carry != 0) new ListNode(carry) else null
      case (_, null) =>
        val sum = a.x + carry
        new ListNode(sum % 10, addTwoNumbers(a.next, null, sum / 10))
      case (_, _) =>
        val sum = a.x + b.x + carry
        new ListNode(sum % 10, addTwoNumbers(a.next, b.next, sum / 10))
    }
  }
}
