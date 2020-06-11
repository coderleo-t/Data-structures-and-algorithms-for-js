class Queue {
  constructor() {
    this.queue = []
  }

  append(value) {
    this.queue.push(value)
  }

  remian(excludeValue) {
    while(!(this.queue.length === 1)) {
       for (let i = 0; i < excludeValue; ++i) {
         this.queue.push(this.queue.shift())
       } 
       this.queue.shift()
    }
    return this.queue[0]
  }
}

const test = new Queue()
test.append('小红')
test.append('小名')
test.append('小刚')
test.append('小李')

console.log(test.remian(4))