/**
 * @param fn
 * @returns fn
 */
export function memoize(fn) {
    const IDs = new Map()
    const cache = {}
    function unique_ID(POJO) {
        if (!IDs.has(POJO)) IDs.set(POJO, IDs.size)
        return IDs.get(POJO)
    }
    return function(...args) {
        let key = args.map((arg)=>unique_ID(arg)).join()
        if (!(key in cache)) cache[key] = fn(...args)
        return cache[key]
    }   
}