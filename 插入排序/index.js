class Arrays {
  constructor() {
    this.arr = []
  }

  insert(value) {
    this.arr.push(value)
  }

  // 插入排序
  insertsort() {
    // 记录数组长度
    let length = this.arr.length

    for(let i = 1; i<length; i++) {
      // 定义需要复制的值
      let copyValue = this.arr[i]

      // 保存刚开始复制的值的位置
      let j = i

      // 如果复制的数比前面的数小则和复制的值的前面一直比较
      while (j > 0 && copyValue < this.arr[j-1]) {
        // 将数向后移动覆盖掉复制的数
        this.arr[j] = this.arr[j-1]
        --j
      }

      // 找到合适的位置时，将赋值的值赋到合适的位置
      this.arr[j] = copyValue
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
test.insert(13)
test.insert(3)
test.insert(12)
test.insert(1)
test.insert(333)
test.insertsort()
console.log(test)