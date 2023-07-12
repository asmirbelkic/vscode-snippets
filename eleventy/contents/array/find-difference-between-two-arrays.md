---
layout: layouts/post.njk
title: Find the difference between two arrays
category: Array
---

**JavaScript version**

```js
const difference = (a, b) => {
  const set = new Set(b);
  return a.filter((item) => !set.has(item));
};
```

**Example**

```js
difference([1, 2, 3, 4, 5], [1, 2, 4]);
// [3, 5]
```
