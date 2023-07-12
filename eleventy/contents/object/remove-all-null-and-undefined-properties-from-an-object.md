---
layout: layouts/post.njk
title: Remove all null and undefined properties from an object
category: Object
---

**JavaScript version**

```js
const removeNullUndefined = (obj) => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

// Or
const removeNullUndefined = (obj) =>
    Object.entries(obj)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

// Or
const removeNullUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
```

**TypeScript version**

```ts
const removeNullUndefined = <T extends Record<string, any>>(obj: T) =>
	Object.entries(obj).reduce((a: any, [k, v]) =>
		(v == null ? a : ((a[k] = v), a)), {}) as {
		[K in keyof T as T[K] extends null | undefined ? never : K]: T[K]
	};

// Or
const removeNullUndefined = <T extends Record<string, any>>(obj: T) =>
	Object.entries(obj)
		.filter(([_, v]) => v != null)
		.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}) as {
		[K in keyof T as T[K] extends null | undefined ? never : K]: T[K]
	};

// Or
const removeNullUndefined = <T extends Record<string, any>>(obj: T) =>
	Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null)) as {
		[K in keyof T as T[K] extends null | undefined ? never : K]: T[K]
	};
```

**Examples**

```js
removeNullUndefined({
    foo: null,
    bar: undefined,
    fuzz: 42,
}); // { fuzz: 42 }
```
