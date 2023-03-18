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

  list.delete(2);
  expect(list.getAll()).toBe('a b 1');
});
