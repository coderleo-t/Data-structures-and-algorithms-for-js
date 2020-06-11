/*
  二叉搜索树：binary search tree：BST
  特点：左边节点总是小于根节点，右边节点总是大于根节点
*/

// 创建一个创造节点的类
class Node {
  constructor(key) {
    this.key = key
    this.leftNode = null
    this.rightNode = null
  }
}

class Tree {
  constructor() {
    this.rootNode = null
    this.count = 0
  }

  // 向BST里面放入节点
  insert(key) {
    let node = new Node(key)
    if (this.rootNode == null){
      this.rootNode = node
      this.count++
    } else {
      this.insertNode(this.rootNode, node)
    }
  }

  // 递归方法调用
  insertNode(rootNode, node) {
    // 当根节点的值大于新插入节点的值时向左边插入
    if(rootNode.key > node.key) {

      // 如果根节点的左边没有值，则将新值插入根节点的左边
      if(rootNode.leftNode == null) {
        rootNode.leftNode = node
        this.count++
      } else {

        // 否则将根节点的左边节点作为根节点递归
        this.insertNode(rootNode.leftNode, node)
      }
    } else {
    // 当根节点的值小于新插入节点的值时向右边边插入
    // 如果根节点的右边没有值，则将新值插入根节点的右边
      if(rootNode.rightNode == null) {
        rootNode.rightNode = node
        this.count++
      } else {
        // 否则将根节点的右边节点作为根节点递归
        this.insertNode(rootNode.rightNode, node)
      }
    }
  }

  // 利用先序遍历
  preorderTraverse() {
    this.preorderRecursiveTraverse(this.rootNode)
  }

  // 先序遍历的递归方式
  preorderRecursiveTraverse(rootNode) {
    if (rootNode == null) return
    // 先打印每棵树根节点的值，然后打印其左节点最后打印其右节点
    console.log(rootNode.key)
    this.preorderRecursiveTraverse(rootNode.leftNode)
    this.preorderRecursiveTraverse(rootNode.rightNode)
  }

  // 利用中序遍历
  inorderTraverse() {
    this.inorderRecursiveTraverse(this.rootNode)
  }

  // 中序遍历的递归方式
  inorderRecursiveTraverse(rootNode) {
    if (rootNode == null) return
    // 先打印每棵树左节点的值，然后打印其根节点最后打印其右节点
    this.inorderRecursiveTraverse(rootNode.leftNode)
    console.log(rootNode.key)
    this.inorderRecursiveTraverse(rootNode.rightNode)
  }

  // 利用后序遍历
  postorderTraverse() {
    this.postorderRecursiveTraverse(this.rootNode)
  }

  // 后序遍历的递归方式
  postorderRecursiveTraverse(rootNode) {
    if (rootNode == null) return
    // 先打印每棵树左节点的值，然后打印其右节点最后打印其根节点
    this.postorderRecursiveTraverse(rootNode.leftNode)
    this.postorderRecursiveTraverse(rootNode.rightNode)
    console.log(rootNode.key)
  }

  // 获取树中的最大值
  maxValue() {
    let currentNode = this.rootNode
    if (currentNode == null) return
    // 因为二叉搜索树的最大值一定在最右边所有一直往右找
    while (currentNode.rightNode) {
      currentNode = currentNode.rightNode
    }
    return currentNode.key
  }

  // 获取树中的最小值
  minValue() {
    let currentNode = this.rootNode
    if (currentNode == null) return
    // 因为二叉搜索树的最小值一定在最左边所有一直往左找
    while (currentNode.leftNode) {
      currentNode = currentNode.leftNode
    }
    return currentNode.key
  }
  
  // 搜索数值
  search(key) {
    let currentNode = this.rootNode
    return this.searchRecursive(currentNode, key)
  }

  // 定义递归搜索
  searchRecursive(currentNode, key) {
    if(currentNode == null) return false
    if (currentNode.key > key) {
      // 把返回的值返回
      return this.searchRecursive(currentNode.leftNode, key)
    } else if (currentNode.key < key){
      //把返回的值返回
      return this.searchRecursive(currentNode.rightNode, key)
    } else {
      return true
    }
  }

  // 任何递归都是转化为循环，利用循环实现搜索
  search(key) {
    let currentNode = this.rootNode
    return this.searchRecursive(currentNode, key)
  }

  // 定义循环搜索
  searchRecursive(currentNode, key) {
    while(currentNode) {
      if(currentNode.key > key) {
        currentNode = currentNode.leftNode
      } else if (currentNode.key < key){
        currentNode = currentNode.rightNode
      } else {
        return true
      }
    }
    return false
  }

  /*
     删除操作，删除操作为树当中最难的操作，因为考虑的点比较多，分多种情况，
     最简单的情况为删除叶子节点，只用让其父节点指向删除节点的边指向空就行，
     但是如果要删除树当中较中间的层，且此结点既有左节点又有右结点，则需要
     重构要删除节点下面的内容。这时候又可以很多情况重构。为了避免混乱可以
     寻找某个特定有规律的值代替要删除的节点，它们分别为前驱和后继。比删除
     节点的值要小一点点的叫前驱，比删除节点要大一点点的叫后继，只需要找其
     中某一个值替代删除的节点就可以了。
  */
  remove(key) {
    // 定义三个变量保存要删除的节点和删除节点的父节点和判断删除节点是否在父节点左边
    let currentNode = this.rootNode
    let previousNode = null
    let isLeftNode = true
    while (currentNode.key !== key) {
      previousNode = currentNode
      if(currentNode.key > key) {
        // 向左找的时候并把 isLeftNode设为true
        isLeftNode = true
        currentNode = currentNode.leftNode
      } else {
        // 向右找的时候并把 isLeftNode设为false
        isLeftNode = false
        currentNode = currentNode.rightNode
      }
    }

    // 如果没找到要删除的节点则返回false
    if(currentNode === null) return false


    // 如果要删除的节点只有右节点
    if(currentNode.leftNode === null) {
      // 判断删除的节点是否为根节点
      if(currentNode.key == this.rootNode.key) {
        this.rootNode = this.rootNode.rightNode
      }

      // 判断删除的节点是否在其父节点的左边
      else if(isLeftNode) {

        // 将要删除节点的父节点的左节点指向要删除节点的右节点
        previousNode.leftNode = currentNode.rightNode
      } else {

        // 将要删除节点的父节点的右节点指向要删除节点的右节点
        previousNode.rightNode = currentNode.rightNode
      }
    } 

    // 如果要删除的节点只有左节点
    else if(currentNode.rightNode === null) {
      // 判断删除的节点是否为根节点
      if (currentNode.key == this.rootNode.key) {
        this.rootNode = this.rootNode.leftNode
      }

      else if(isLeftNode) {

        // 将要删除节点的父节点的左节点指向要删除节点的左节点
        previousNode.leftNode = currentNode.leftNode
      } else {

        // 将要删除节点的父节点的右节点指向要删除节点的左节点
        previousNode.rightNode = currentNode.leftNode
      }
    }

    // 如果要删除的节点为叶子节点
    else if (currentNode.rightNode === null && currentNode.rightNode === null) {
      // 如果只有一个根节点
      if(currentNode.key = this.rootNode.key) {
        this.rightNode = null
      }
      else if(isLeftNode) {
        previousNode.leftNode = null
      } else {
        previousNode.rightNode = null
      }
    }

    // 如果要删除的节点既有左节点又有右节点，那么需要寻找其前驱或者后继
    else {
      let successor = this.fundSuccessor(currentNode)
      if(currentNode.key == this.rootNode.key) {
        let left = this.rootNode.leftNode
        this.rootNode = successor
        successor.leftNode = left
      } else {
        if(isLeftNode) {
          previousNode.leftNode = successor
        } else {
          previousNode.rightNode = successor
        }
      }
    }

    // 不管哪个删除了都把总数减一
    this.count--
    return true
    
  }

  // 寻找后继节点函数
  fundSuccessor(removeNode) {
    // 定义后继节点
    let successor = removeNode

    // 定义后继节点的父节点
    let parentSuccessor = removeNode

    // 定义当前一层层往下寻找的节点
    let currentNode = removeNode.rightNode

    // 当寻找的节点不为空时,则继续向下寻找，直到找到删除节点的右节点最小的值
    while (currentNode !== null) {
      parentSuccessor = successor
      successor = currentNode

      // 因为寻找的节点为后驱，所以最靠近删除节点的值一定会在删除节点右节点的最左节点
      currentNode = currentNode.leftNode
    }

    // 找到后驱节点后并把后驱节点放到删除节点的位置
    // 判断后驱是否为删除节点的右节点
    if(removeNode.rightNode !== successor) {
      // 如果后驱节点的右节点不为空
      if(successor.rightNode !== null) {
        parentSuccessor.leftNode = successor.rightNode
        successor.rightNode = removeNode.rightNode
      } else {
        parentSuccessor.leftNode = null
        successor.rightNode = removeNode.rightNode
      }
    }

    // 将删除替换成的后驱节点返回，且后驱节点后面的节点排序已经完成
    return successor
  }
 

  
}

const test = new Tree()
test.insert(11)
test.insert(7)
test.insert(15)
test.insert(5)
test.insert(3)
test.insert(9)
test.insert(8)
test.insert(10)
test.insert(13)
test.insert(12)
test.insert(14)
test.insert(20)
test.insert(18)
test.insert(25)
test.insert(6)
// console.log(test)
// test.preorderTraverse()
// test.inorderTraverse()
// test.postorderTraverse()
// console.log(test.maxValue())
// console.log(test.minValue())
// console.log(test.search(11))
test.remove(8)
test.inorderTraverse()
console.log(test)


