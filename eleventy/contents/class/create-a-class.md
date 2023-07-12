---
layout: layouts/post.njk
title: Create a class with constructor
category: Class
---

**JavaScript version**

```js
class ClassName {
  constructor(param1, param2) { // constructor method for initializing new objects
    this.property1 = param1;
    this.property2 = param2;
  }

  method1() { // instance method
    // logic for method1
  }

  method2() { // instance method
    // logic for method2
  }

  static staticMethod() { // static method
    // logic for staticMethod
  }
}
```

**Examples**

```js
const obj = new ClassName('value1', 'value2'); // Create new instance
obj.method1(); // Call an instance method
ClassName.staticMethod(); // Call a static method
```
