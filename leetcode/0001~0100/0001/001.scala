import collection.mutable

object Solution {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    val map = new mutable.HashMap[Int, Int]()
    val iterator = nums.iterator.zipWithIndex
    while (iterator.hasNext) {
      val (value, index) = iterator.next()
      val found = map.get(target - value)
      if (found.exists(_ != index)) {
        return Array(index, found.get)
      }
      map(value) = index
    }
    Array.empty
  }
}
