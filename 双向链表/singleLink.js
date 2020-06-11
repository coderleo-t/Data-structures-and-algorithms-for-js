export class Link {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(value) {
    if(this.head === null) {
      this.head = value
      ++this.length
    } else {
      let current = this.head

      while(current.next) {
        current = current.next
      }
      current.next = value
      ++this.length
    }
  }

  isEmpty() {
    if(!this.head) {
      return true
    }
    return false
  }

  insertElement(position,element) {
    if(position<0 || position>this.length) return false
    let previous = null
    let current = this.head
    let i = 0
    if(position === 0) {
      this.head = element
      this.head.next = current
      ++this.length
      return
    }
    while(i<position) {
      previous = current
      current = current.next
      ++i
    }
    previous.next = element
    element.next = current
    ++this.length
  }

  remove(position) {
    if(this.isEmpty()) return false
    let i = 0
    let current = this.head
    let previous = null
    while(i<position) {
      previous = current
      current = current.next
      ++i
    }
    previous.next = current.next
    --this.length
    return current.element
  }

}

export class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}


// const test = new Link()

// test.append(new Node('小红'))
// test.append(new Node('小黑'))
// test.append(new Node('小紫'))
// test.append(new Node('小黄'))
// test.insertElement(2, new Node('小兰'))
// test.remove(1)
// test.insertElement(4, new Node('小名'))
// test.insertElement(0, new Node('小刚'))
// test.insertElement(1, new Node('小王'))
// test.insertElement(0, new Node('小绿'))


// console.log(test)
