/**
 * @try protochain(fetch)
 */
export function protochain(obj) {
    const seenObjects = new Set();
    function printObject(obj, indent) {
      const keys = Object.getOwnPropertyNames(obj);
      const proto = Object.getPrototypeOf(obj);
      console.log(`${indent}Object ${obj.constructor.name}`);
      keys.forEach((key) => {
        if (key !== 'caller' && key !== 'callee' && key !== 'arguments') {
          console.log(`${indent}├─ ${key}: ${obj[key]}`);
        }
      });
      if (proto && !seenObjects.has(proto)) {
        seenObjects.add(proto);
        printObject(proto, `${indent}│  `);
      }
    }
    printObject(obj, '');
}

/* protochain(fetch)
Object AsyncFunction
├─ length: 1
├─ name: fetch
│  Object AsyncFunction
│  ├─ constructor: function AsyncFunction() { [native code] }
│  │  Object Function
│  │  ├─ length: 0
│  │  ├─ name: 
│  │  ├─ constructor: function Function() { [native code] }
│  │  ├─ apply: function apply() { [native code] }
│  │  ├─ bind: function bind() { [native code] }
│  │  ├─ call: function call() { [native code] }
│  │  ├─ toString: function toString() { [native code] }
│  │  │  Object Object
│  │  │  ├─ constructor: function Object() { [native code] }
│  │  │  ├─ __defineGetter__: function __defineGetter__() { [native code] }
│  │  │  ├─ __defineSetter__: function __defineSetter__() { [native code] }
│  │  │  ├─ hasOwnProperty: function hasOwnProperty() { [native code] }
│  │  │  ├─ __lookupGetter__: function __lookupGetter__() { [native code] }
│  │  │  ├─ __lookupSetter__: function __lookupSetter__() { [native code] }
│  │  │  ├─ isPrototypeOf: function isPrototypeOf() { [native code] }
│  │  │  ├─ propertyIsEnumerable: function propertyIsEnumerable() { [native code] }
│  │  │  ├─ toString: function toString() { [native code] }
│  │  │  ├─ valueOf: function valueOf() { [native code] }
│  │  │  ├─ __proto__: null
│  │  │  ├─ toLocaleString: function toLocaleString() { [native code] }
*/