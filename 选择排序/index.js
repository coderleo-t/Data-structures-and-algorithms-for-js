class Arrays {
  constructor() {
    this.arr = []
  }

  insert(value) {
    this.arr.push(value)
  }

  // 选择排序
  choosesort() {
    // 记录数组的长度
    let length = this.arr.length

    // 初始化最小数的下标
    let miniIndex = 0

    // 循环比较
    for(let i = 0; i<length-1; i++) {

      // 循环比较，如果有更小的数则将更小的数的下标储存到变量中
      for(let k = i; k<length-1; ++k) {
        if(this.arr[k] > this.arr[k+1]) {
          miniIndex = k+1
        }
      }
      // 找到最小值的下标值与第一个值交换,交换次数相比较与冒泡排序变少了一半
      let temp = this.arr[i] 
      this.arr[i] = this.arr[miniIndex]
      this.arr[miniIndex] = temp
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
test.choosesort()
console.log(test)