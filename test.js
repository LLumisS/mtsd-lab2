/* eslint-disable no-undef */
'use strict';

const { List } = require('./list.js');

const list = new List();

//APPENT
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

//INSERT
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

//DELETE
test('insert test', () => {
  try {
    list.delete(10);
  } catch (error) {
    expect(error.message).toBe('Invalid index');
  }
  
  expect(list.delete(2)).toBe('2');
});

//DELETE ALL
test('delete all test', () => {
  list.appent('a');

  list.deleteAll('a');
  expect(list.getAll()).toBe('b 1');
});

//GET
test('get test', () => {
  list.insert('a', 0);

  expect(list.get(1)).toBe('b');
});
