/**
 * @desc get all properties of an object, including inherited properties. Walks up the prototype chain.
 * @try properties(fetch)
 */
export function properties(original) {
    let current = original
    const all_properties = [];
    while (current !== null) {
        all_properties.push(...Object.getOwnPropertyNames(current));
        current = Object.getPrototypeOf(current);
    }
    return (console.log(all_properties), all_properties);
}