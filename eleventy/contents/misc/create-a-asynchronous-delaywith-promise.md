---
layout: layouts/post.njk
title: Create a asynchronous delay in milliseconds
category: Array
---

**JavaScript version**

```js
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

```

**Examples**

```js
// Example: delay
delay(1000).then(() => {
  console.log("This runs after 1 second");
  return delay(1000);
}).then(() => {
  console.log("This runs 2 seconds after the first piece of code");
});
```
