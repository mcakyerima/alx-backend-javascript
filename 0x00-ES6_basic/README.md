# ES6 Basics

This repository encompasses exercises aimed at mastering the fundamentals of ECMAScript 2015 (ES6).

## Tasks To Complete

### 0. Const or let?
`0-constants.js` comprises a script designed to reinforce the understanding of constants and variables in ES6.

For the code snippet below, adhere to the following adjustments:

- In the `taskFirst` function, utilize `const` to declare variables.
- In the `taskNext` function, employ `let` for variable instantiation.

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

### 1. Block Scope
`1-block-scoped.js` consists of a script emphasizing block scope in ES6.

For the function `taskBlock`, ensure variables within the conditional block are not overwritten.

```javascript
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
```
