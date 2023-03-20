import IQueue from "./00-IQueue"
class ArrayQueue<T> implements IQueue<T> {
  private data : T[] = []
  enqueue(el: T) {
    this.data.push(el)
  }
  dequeue() : T | undefined{
    return this.data.shift()
  }
  peek() : T | undefined {
    return this.data[0]
  }
  isEmpty() : boolean{
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
}
const queue = new ArrayQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.peek())
export default ArrayQueue
