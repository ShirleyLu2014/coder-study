class ArrayStack<T> {
  private data: T[] = [];
  push(element: T): void {
    this.data.push(element);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  isEmpty(): boolean {
    if (this.data.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  size(): number {
    return this.data.length;
  }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
export default ArrayStack;
