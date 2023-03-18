/* eslint-disable no-undef */
'use strict';

const { List } = require('./list.js');

const list = new List();

//appent method test
test('append test', () => {
  try {
    list.appent(1);
  } catch (error) {
    expect(error.message).toBe('Invalid value');
  }

  try {
    list.appent('12');
  } catch (error) {
    expect(error.message).toBe('Invalid value');
  }
  list.appent('a');
  expect(list.getAll()).toBe('a');
  list.appent('b');
  expect(list.getAll()).toBe('a b');
});

//insert test
test('insert test', () => {
  try {
    list.insert(1, 2);
  } catch (error) {
    expect(error.message).toBe('Invalid value');
  }

  try {
    list.insert(1, 10);
  } catch (error) {
    expect(error.message).toBe('Invalid index');
  }

  list.insert('1', 2);
  expect(list.getAll()).toBe('a b 1');
  list.insert('2', 2);
  expect(list.getAll()).toBe('a b 2 1');
});

console.log(list);