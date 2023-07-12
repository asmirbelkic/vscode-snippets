---
layout: layouts/post.njk
title: Create an array of key-value pairs from an object
category: Object
---

**JavaScript version**

```js
const keyValuePairsToArray = (object) =>
  Object.keys(object).map((key) => [key, object[key]]);
```

**Examples**

```js
keyValuePairsToArray({ JavaScript: 1, Playground: 2 });
// [ ['JavaScript', 1], ['Playground', 2] ]

keyValuePairsToArray({ x: 1, y: 2, z: 3 });
// [ ['x', 1], ['y', 2], ['z', 3] ]
```