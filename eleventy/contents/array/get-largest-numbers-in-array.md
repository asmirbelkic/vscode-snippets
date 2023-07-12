---
layout: layouts/post.njk
title: Get the largest numbers in an array
category: Array
---

**JavaScript version**

```js
const maxNumbers = (arr, number = 1) =>
  [...arr].sort((x, y) => y - x).slice(0, number);
```

**Example**

```js
maxNumbers([1, 2, 3, 4, 5]);
// [5]
maxNumbers([7, 8, 9, 9], 2);
// [9, 9]
```
