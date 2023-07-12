---
layout: layouts/post.njk
title: Calculate the elapsted time since a given date and return the result
category: Date Time
---

**JavaScript version**

```js
const timeSince = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const days = Math.floor(diffInSeconds / 86400);
    if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(diffInSeconds / 3600) % 24;
    if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const minutes = Math.floor(diffInSeconds / 60) % 60;
    if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    return 'Just now';
};

```

**Examples**

```js
const date = new Date('2023-07-10T12:30:00');
console.log(timeSince(date));  // output will depend on current time and date
```
