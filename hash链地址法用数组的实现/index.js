/*
  当hash的长度为质数时，那么重复的位置就会变少，所以在选取长度时应该选择质数
*/

// 创建一个由三维数组实现的hash表
class HashMap {
  constructor() {
    // 最大长度
    this.limit = 7

    // 当前hash表存放的总个数
    this.count = 0

    // 创建一个hash表
    this.hashMap = []
  }

  // 向hashmap里面存放数据
  put(key, value) {
    const hashCode = this.setHash(key, this.limit)

    // 在计算后的hashcode数组位置的数组赋给bucket，也可以将bucket弄成链表
    let bucket = this.hashMap[hashCode]

    // 如果hashcode位置没有数组则创建一个新的数组,并把值变为数组放进去
    if(bucket === undefined) {
      bucket = []
      bucket.push([key, value])
      this.hashMap[hashCode] = bucket
      this.count++
      return true
    }

    // 循环判断是否有key相同的，如果有则将其数组覆盖
    for (let index = 0; index < bucket.length; index++) {
      let oldValue = bucket[index]
      if(oldValue[0] === key) {
        let replaceValue = oldValue[1]
        oldValue[1] = value
        return replaceValue
      }
    }

    // 如果即位置不为空也没相同的key则直接push进去
    bucket.push([key, value])
    this.count++
    return true
  }

  // 根据key获取value值
  getValue(key) {
    let hashcode = this.setHash(key, this.limit)
    if(this.hashMap[hashcode] === null) return false
    const bucket = this.hashMap[hashcode]
    for (let index = 0; index < bucket.length; index++) {
      let oldValue = bucket[index]
      if(oldValue[0] === key) return oldValue[1]
    }
    return false
  }
  
  // 设置hashcode
  setHash(key, maxLenght) {
    let hashCode = 0
    for (let index = 0; index < key.length; index++) {
      // 利用秦九韶算法得出hashcode，获得每个位置数ASC||码与前面的数字相加
      // 字符转ascii码：用charCodeAt();
      // ascii码砖字符：用fromCharCode();
      hashCode = 31 * hashCode + key.charCodeAt(index)
    }
    // hashCode此时为很大的值，所以需要保证它在最大数值之内
    hashCode %= maxLenght
    return hashCode
  }

  // 判断是否为质数
  isPrime(number) {
  // 由于不是质数的平方根以下的数如果有整除的那么绝对不是质数，所以取要判断质数的数的平方根减少计算
  let newNumber = Math.ceil(Math.sqrt(number))
  for (let index = 2; index < newNumber; index++) {

    // 当number的平方根以下都没有和number整除的话那就是质数
    if (number % index === 0) {
        return false
      }
    }
    return true
  }

  // 获取质数
  getPrime(number) {

  // 当不是质数时一直循环加一
  while (!isPrime(number)) {
      number++
    }
    return number
  }

  // 根据key删除value
  remove(key) {
    let hashCode = this.setHash(key, this.limit)
    if(this.hashMap[hashCode] === null) return false
    const bucket = this.hashMap[hashCode]
    for(let i = 0; i<bucket.length; i++) {
      let oldValue = bucket[i]
      if(oldValue[0] === key) {
        bucket.splice(i, 1)
      }
    }
  }

}

const test = new HashMap()

test.put('小刚', 19)
test.put('小红', 20)
test.put('小非', 22)
test.put('Bruno', 30)
test.put('Taylor', 22)
test.put('Taylor', 20)
console.log(test)
console.log(test.getValue('Taylor'))

