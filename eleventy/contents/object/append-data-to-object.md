---
layout: layouts/post.njk
title: Append data to object
category: Object
---

**JavaScript version**

```js
const appendDataToObject = (obj, newData) => Object.assign(obj, newData);
```

**Examples**

```js
// Example usage:
let obj = { prop1: 'Hello' };
appendDataToObject(obj, {test: 500});
```
