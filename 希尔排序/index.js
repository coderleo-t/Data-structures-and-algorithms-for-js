class Arrays {
  constructor() {
    this.arr = []
  }

  insert(value) {
    this.arr.push(value)
  }

  // shell(希尔)排序，为高级排序的一种
  shellsort() {
    // 记录数组的长度
    let length = this.arr.length

    // 记录分组的间隔，这里我设置为原长的一半，注意只能向下取整，不然除为0.x就会一直为1
    let gap = Math.floor(length/2)

    // 当间隙大于等于1时
    while(gap>=1) {
      for(let i = gap; i<length; i++) {
        // 将间隔的值复制出来
        let copyValue = this.arr[i]

        // 记录间隙位置的
        let j = i

        // 当间隔的前面的数大于后面的数时则交换位置,且当已经出现交换过的数时,并前面交换的数大于
        // 后面复制的数，则向前继续循环.会出现每三个数的比较循环
        while (this.arr[j - gap] > copyValue && j>=gap) {
          this.arr[j] = this.arr[j-gap]
          j -= gap
        }
        this.arr[j] = copyValue
      }
      gap = Math.floor(gap/2)
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
test.shellsort()
console.log(test)
