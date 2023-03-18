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

console.log(list);