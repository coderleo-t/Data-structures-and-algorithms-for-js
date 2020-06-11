import {Link, Node} from './singleLink.js'

class DoubeLink extends Link {
  constructor() {
    super()
    this.tail = null
  }

  append(value) {
    // 当链表为空的时候
    if(this.head === null) {
      this.head = value
      this.tail = value
      ++this.length
    } else {
      let current = this.tail
      this.tail = value
      current.next = value
      value.previous = current
      ++this.length
    }
  }

  insertElement(position, value) {
    // 如果插入的越界了
    if(position<0 || position>this.length) return false
 
    // 如果插入的链表是空或插入的位置为末尾时
    if (this.head === null || position === this.length) {
      this.append(value) 
      return true
    }

    // 当插入的位置为零时
    if(position === 0) {
      let current = this.head
      this.head = value
      value.next = current
      current.previous = value
      ++this.length
      return true
    } else {
      let i = 0
      let current = this.head
      while(i<position) {
        current = current.next
        ++i
      }
      current.previous.next = value
      value.previous = current.previous
      value.next = current
      current.previous = value
      ++this.length
      return true
    }
  }
}

class DoubleNode extends Node{
  constructor(element) {
    super(element)
    this.previous = null
  }
}

const test = new DoubeLink()

test.append(new DoubleNode('小红'))
test.append(new DoubleNode('小紫'))
test.append(new DoubleNode('小刚'))
test.insertElement(3, new DoubleNode('小明'))

console.log(test)
