class Arrays {
  constructor() {
    this.arr = []
  }

  insert(value) {
    this.arr.push(value)
  }

  // 快速排序，为高级排序的一种，是排序算法中效率相对最高的
  quicksort() {
    // 获取数组的长度
    let length = this.arr.length

    // 调用递归函数
    this.recursion(0, length-1)
  } 

  // 递归交换数组
  recursion(left, right) {
    if(left>=right) return
    
    // 枢纽的位置
    let pivot = this.findPivot(left, right)

    // 定义两个迭代器，i寻找大于枢纽位置的数，k寻找小于枢纽位置的数
    let i = left+1
    console.log(i)
    let k = pivot-1

    // 开始一直寻找，在找到特定条件的值时会跳出
    while(true) {
      // 如果左边的迭代器小于枢纽位置的值则一直向右寻找
      while(this.arr[i] < this.arr[pivot]) {
        i++
      }

      // 如果右边的迭代器大于枢纽位置的值则一直向左寻找
      while(this.arr[k] > this.arr[pivot]) {
        k--
      }
      // 如果左边的迭代器和右边的迭代重合了或者大于了则退出循环
      if (i >= k) {
        break
      }

      // 如果两个都找到了对应的值，则让他们进行交换位置
      this.swap(i, k)
    }

    // 在枢纽找到合适的位置后，将枢纽左边和右边的数也按照同样的方法交换
    this.recursion(left, i-1)
    this.recursion(i+1, right)
  }

  // 寻找数组的枢纽，即数组位置最左边最右边最中间三个数的中位数
  findPivot(left, right) {
    // 记录数组中间位置
    let center = Math.floor((left + right)/2)

    // 如果最左边的数大于中间的数则交换位置
    if(this.arr[left] > this.arr[center]) {
      this.swap(left, center)
    }

    // 如果最中间的数大于右边的数则交换位置
    if(this.arr[center] > this.arr[right]) {
      this.swap(center, right)
    }

    // 如果最左边的数大于中间的数则交换位置
    if(this.arr[left] > this.arr[center]) {
      this.swap(left, center)
    }

    // 再将中位数和数组的倒数第二个位置交换,因为最后一个位置比枢纽的值大
    this.swap(center, right-1)

  
    // 返回枢纽的位置
    return right-1
  }

  // 定义交换位置的代码
  swap(a, b) {
    let k = this.arr[a]
    this.arr[a] = this.arr[b]
    this.arr[b] = k
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
test.quicksort()
console.log(test)



