---
layout: layouts/post.njk
title: Check if a string is valid JSON
category: String
---

**JavaScript version**

```js
const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
};
```

**Examples**

```js
isValidJSON('{"name":"John","age":30}');
// true
isValidJSON('{name:"John",age:30}');
// false
```
