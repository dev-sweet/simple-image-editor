class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.length = 0;
  }
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.current = newNode;
      this.length++;
    }
    return this.current;
  }
  editUndo() {
    const prevNode = this.current.prev;
    if (prevNode) {
      this.current = prevNode;
      return prevNode;
    }
  }
  editRedo() {
    const nextNode = this.current.next;
    if (nextNode) {
      this.current = nextNode;
      return nextNode;
    }
  }
}

const list = new linkedList();
export default list;
