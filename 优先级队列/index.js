class Queue {
  constructor() {
    this.queue = []
  }

  push(value) {
    this.queue.push(value)
  }

  // 不用splice的实现方式
  appendPriority(value) {
    if(this.queue.length === 0) {
      this.queue.push(value)
      return
    } else {
      if (value.priority > this.queue[this.queue.length - 1].priority) {
        this.queue[this.queue.length] = value
      }
      for(let i=0; i<this.queue.length; ++i) {
        if(this.queue[i].priority>value.priority) {
          let length = this.queue.length  
          let k = length - i   
          while(k) {
            this.queue[length] = this.queue[length-1]
            --k
            --length
          }
          this.queue[i] = value
          return
        } 
      }
    }
  }

  // 用splice的实现方式
  appendPriority(value) {
    let k = false

    for(let i=0; i<this.queue.length; ++i) {
      if (this.queue[i].priority > value.priority) {
        this.queue.splice(i, 0, value)
        return
      }
    }
  
    if(!k) this.queue.push(value)
  }

}

class PriorityQueue {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

const test = new Queue()
test.push(new PriorityQueue('小明', 1))
test.push(new PriorityQueue('小红', 4))
test.push(new PriorityQueue('小刚', 6))
test.push(new PriorityQueue('小黑', 7))
test.push(new PriorityQueue('小蓝', 9))

test.appendPriority(new PriorityQueue('小紫', 2))
test.appendPriority(new PriorityQueue('小粉', 11))
test.appendPriority(new PriorityQueue('小黄', 8))
console.log(test)



