import collection.mutable

class CharMark {
  private val indexes = mutable.ArrayBuffer.fill(260)(-1)

  def get(char: Char): Option[Int] = {
    val found = indexes(char)
    if (found != -1) {
      Some(found)
    } else {
      None
    }
  }

  def put(char: Char, index: Int): Unit = {
    indexes(char) = index
  }

  def remove(char: Char): Unit = {
    indexes(char) = -1
  }
}

class SubstringLengthIterator(s: String) extends Iterator[Int] {
  private val chars = s.toCharArray
  private val found = new CharMark

  private val _length = s.length
  private var _startIndex = 0
  private var _endIndex = -1

  override def hasNext: Boolean = {
    _startIndex != _length && _endIndex != _length - 1
  }

  override def next: Int = {
    _endIndex += 1
    val curChar = chars(_endIndex)
    val occurrence = found.get(curChar)
    if (occurrence.isEmpty) {
      found.put(curChar, _endIndex)
      _endIndex - _startIndex + 1
    } else {
      Range(_startIndex, occurrence.get).foreach { index =>
        val toRemove = chars(index)
        if (toRemove != curChar) {
          found.remove(toRemove)
        }
      }
      found.put(curChar, _endIndex)
      _startIndex = occurrence.get + 1
      _endIndex - _startIndex + 1
    }
  }
}

object Solution {
  def lengthOfLongestSubstring(s: String): Int = {
    if (s.isEmpty) {
      0
    } else {
      val it = new SubstringLengthIterator(s)
      it.max
    }
  }
}
