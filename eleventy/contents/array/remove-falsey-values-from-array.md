---
layout: layouts/post.njk
title: Remove falsey values from an array
category: Array
---

**JavaScript version**

```js
const compact = (arr) => arr.filter(Boolean);
```


**Example**

```js
compact([false, 5, "", 10, "b", "m" * 23, 0, NaN, "q", 1]);
// [ 5, 10, 'b', 'q', 1 ]
```
