---
layout: layouts/post.njk
title: Convert an array to CSV
category: Array
---

**JavaScript version**

```js
const arrayToCSV = (arr, delimiter = ",") =>
  arr.map((row) => row.map((value) => `"${value}"`).join(delimiter)).join("\n");
```

**Example**

```js
arrayToCSV([
  ["one", "two"],
  ["three", "four"],
]);
// '"one","two"\n"three","four"'
```
