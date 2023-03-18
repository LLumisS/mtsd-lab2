'use strict';

class Element {
  constructor(value) {
    if (typeof value === 'string' && value.length) throw 'invalid value';
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

  insert() {}

  delete() {}

  deleteAll() {}

  get() {}

  clone() {}

  reverse () {}

  findFirst() {}

  findLast() {}

  clear() {}

  extend() {}
}

exports.List = List;
