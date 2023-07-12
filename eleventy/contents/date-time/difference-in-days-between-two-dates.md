---
layout: layouts/post.njk
title: Get the difference in days between two dates
category: Date Time
---

**JavaScript version**

```js
const getDaysDiffBetweenDates = (startDate, endDate) =>
  (endDate - startDate) / (1000 * 3600 * 24);
```

**Example**

```js
getDaysDiffBetweenDates(new Date("2022-12-13"), new Date("2022-12-22"));
// 9
```