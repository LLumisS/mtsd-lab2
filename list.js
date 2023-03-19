'use strict';

class List {
  constructor() {
    this.array = [];
  }

  checkElement(element) {
    if (typeof element !== 'string' || element.length !== 1) 
      throw new Error('Invalid value');
  }
  checkIndex(index) {
    if(index < 0 || index > this.length())
      throw new Error('Invalid index');
  }

  length() {
    return this.array.length;
  }

  append(element) {
    this.checkElement(element);

    this.array.push(element);
  }

  insert(element, index) {
    this.checkIndex(index);
    this.checkElement(element);

    this.array.splice(index, 0, element);
  }

  delete(index) {
    this.checkIndex(index);

    let result = this.array[index];
    this.array.splice(index, 1);
    return result;
  }

  deleteAll(element) {
    this.array = this.array.filter(value => value !== element);
  }

  get(index) {
    this.checkIndex(index);

    return this.array[index];
  }

  clone() {
    const list = new List();

    for (let i = 0; i < this.length(); i++) {
      list.append(this.array[i]);
    }

    return list;
  }

  reverse () {
    let temp = null;
    for (let i = 0; i < this.length() / 2; i++) {
      temp = this.array[i];

      this.array[i] = this.array[this.length() - 1 - i];
      this.array[this.length() - 1 - i] = temp;
    }
  }

  findFirst(element) {
    for (let i = 0; i < this.length(); i++) {
      if (this.array[i] === element) return i;
    }
    return -1;
  }

  findLast(element) {
    for (let i = this.length() - 1; i > -1; i--) {
      if (this.array[i] === element) return i;
    }
    return -1;
  }

  clear() {
    this.array.length = 0;
  }

  extend(list) {
    for (let i = 0; i < list.length(); i++) {
      this.array.push(list.array[i]);
    }
  }

  getAll() {
    return this.array;
  } 
}

exports.List = List;
