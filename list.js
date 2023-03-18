'use strict';

class Element {
  constructor(value) {
    if (typeof value !== 'string' || value.length !== 1) 
      throw new Error('Invalid value');
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  length() {
    return this.listLength;
  }

  appent(element) {
    const value = new Element(element);

    if(this.listLength !== 0) {
      value.prev = this.tail;
      this.tail.next = value;
      this.tail = value;
    } else {
      this.head = value;
      this.tail = value;
    }

    this.listLength++;
  }

  insert(element, index) {
    if(index < 0 || index > this.listLength)
      throw new Error('Invalid index');

    const value = new Element(element);

    let next = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = next;
      next = next.next;
      currentIndex++;
    }

    value.prev = prev;
    value.next = next;

    if(prev) prev.next = value;
    else this.head = value;

    if(next) next.prev = value;
    else this.tail = value;

    this.listLength++;
  }

  delete(index) {
    if(index < 0 || index > this.listLength)
      throw new Error('Invalid index');

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    if (prev) prev.next = current.next;
    else this.head = current.next;

    if (current.next) current.next.prev = prev;
    else this.tail = prev;

    current.prev = null;
    current.next = null;
    
    this.length--;

    return current.value;
  }

  deleteAll(element) {
    let prev = null;
    let current = this.head;
    let next = current.next;

    while (current) {
      if(current.value === element) {
        if (prev) prev.next = next;
        else this.head = next;
        if (next) next.prev = prev;
        else this.tail = prev;

        current.prev = null;
        current.next = null;
        
        this.listLength--;
      } 
      prev = current;
      current = next;
      if(next) next = next.next;
    }
  }

  get() {}

  clone() {}

  reverse () {}

  findFirst() {}

  findLast() {}

  clear() {}

  extend() {}

  getAll() {
    let current = this.head;
    let result = '';

    while(current) {
      result += current.value + ' ';
      current = current.next;
    }

    return result.slice(0, -1);
  }
}

exports.List = List;
