/**
 * @try protochain_soft(fetch)
 */
export function protochain_soft(obj) {
    const seenObjects = new Set();
    function printObject(obj, indent) {
    const keys = Object.getOwnPropertyNames(obj);
    const proto = Object.getPrototypeOf(obj);
    console.log(`${indent}Object ${obj.constructor.name}`);
    keys.forEach((key) => {
        if (key !== 'caller' && key !== 'callee' && key !== 'arguments' && key === 'name') {
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

/* protochain_soft(fetch)
Object AsyncFunction
├─ name: fetch
│  Object AsyncFunction
│  │  Object Function
│  │  ├─ name: 
│  │  │  Object Object
*/