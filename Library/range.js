export function range(...args) {
    let [start, stop, step] = [0, null, 1];
    if (args.length < 1 || args.length > 3) throw Error("Wrong number of arguments");
    const all_elements_are_numbers = args.every((val) => typeof val === "number");
    if (!all_elements_are_numbers) throw Error("All arguments must be numbers");

    if (args.length === 1) { stop = args[0]; }
    if (args.length === 2) { start = args[0], stop = args[1]; }
    if (args.length === 3) { start = args[0], stop = args[1]; step = args[2]; }
    let ret = []
    for (let i = start; i < stop; i += step) { ret.push(i); }
    return ret;
}