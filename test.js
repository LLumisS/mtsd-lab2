/* eslint-disable no-undef */
'use strict';

const { List } = require('./list.js');

const list = new List();

//APPEND
test('append test', () => {
  try {
    list.append(1);
  } catch (error) {
    expect(error.message).toBe('Invalid value');
  }

  try {
    list.append('12');
  } catch (error) {
    expect(error.message).toBe('Invalid value');
  }
  list.append('a');
  expect(list.getAll()).toStrictEqual(['a']);
  list.append('b');
  expect(list.getAll()).toStrictEqual(['a', 'b']);
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
  expect(list.getAll()).toStrictEqual(['a', 'b', '1']);
  list.insert('2', 2);
  expect(list.getAll()).toStrictEqual(['a', 'b', '2', '1']);
});

//DELETE
test('delete test', () => {
  try {
    list.delete(10);
  } catch (error) {
    expect(error.message).toBe('Invalid index');
  }
  
  expect(list.delete(2)).toBe('2');
});

//DELETE ALL
test('delete all test', () => {
  list.append('a');

  list.deleteAll('a');
  expect(list.getAll()).toStrictEqual(['b', '1']);
});

//GET
test('get test', () => {
  list.insert('a', 0);

  expect(list.get(1)).toStrictEqual('b');
});

//CLONE
test('clone test', () => {
  expect(list.clone().getAll()).toStrictEqual(['a', 'b', '1']);
});

//LENGTH
test('length test', () => {
  expect(list.length()).toBe(3);
});

//REVERSE
test('reverse test', () => {
  list.reverse();
  expect(list.getAll()).toStrictEqual(['1', 'b', 'a']);
});

//FIND FIRST
test('find first test', () => {
  list.append('b');
  expect(list.findFirst('b')).toBe(1);
  expect(list.findFirst('a')).toBe(2);
  expect(list.findFirst('2')).toBe(-1);
});

//FIND LAST
test('find last test', () => {
  expect(list.findLast('b')).toBe(3);
  expect(list.findLast('a')).toBe(2);
  expect(list.findFirst('2')).toBe(-1);
});

//EXTEND
test('extend test', () => {
  const newList = new List();
  for(let i = 0; i < 5; i++) newList.append(i.toString());
  list.extend(newList);
  expect(list.getAll()).toStrictEqual(['1', 'b', 'a', 'b', '0', '1', '2', '3', '4']);
});

//CLEAR
test('clear test', () => {
  list.clear();
  expect(list.getAll()).toStrictEqual([]);
  expect(list.length()).toBe(0);
});
