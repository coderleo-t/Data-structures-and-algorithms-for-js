class Arrays {
  constructor() {
    this.arr = []
  }

  insert(value) {
    this.arr.push(value)
  }

  // 冒泡排序
  bubblesort() {
    if (this.arr.length === 0) return

    // 记录数组的长度
    let length = this.arr.length

    // 循环比较
    for (let i = 0; i < length-1; ++i) {

      // 进行两两比较
      for(let k = 0; k<length-i-1; ++k) {

        // 谁大就将谁放到后面去
        if(this.arr[k] > this.arr[k+1]) {
          let temp = this.arr[k]
          this.arr[k] = this.arr[k+1]
          this.arr[k+1] = temp
        }
      }
    }
  }
}

const test = new Arrays()
test.insert(2)
test.insert(7)
test.insert(111)
test.insert(55)
test.insert(66)
test.insert(160)
test.insert(12)
test.insert(1)
test.insert(333)
test.bubblesort()
console.log(test)