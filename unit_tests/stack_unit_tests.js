import {Stack, Node} from '../Library/Stack.js';
/**
 * @run npm run test
 * @run node stack_unit_tests.js
 */
function main() {
    unit_test_1();
    unit_test_2();
    unit_test_3();
}
function unit_test_1() {
    const stak = new Stack();
    stak.push(1);
    stak.push(2);
    stak.push(3);
    console.assert(stak.pop().data === 3, "top of the stack should be 3");
    console.assert(stak.pop().data === 2);
    console.assert(stak.pop().data === 1);
    console.log("unit_test_1, all assertions passed:", true);
}
function unit_test_2() {
    const stak = new Stack([1, 2, 3, "String1"]);
    console.assert(stak.get_length() === 4, "length should be 4");
    console.assert(stak.peek().data === "String1");
    console.log("unit_test_2, all assertions passed:", true);
}
function unit_test_3() {
    const stak = new Stack([1, 2, 3]);
    stak.pop(); if (String(stak.__repr__()) != String([ 1, 2 ])) throw Error("unit_test_3 failed");
    stak.pop(); if (String(stak.__repr__()) != String([ 1 ])) throw Error("unit_test_3 failed");
    stak.pop(); if (String(stak.__repr__()) != String([])) throw Error("unit_test_3 failed");
    console.log("unit_test_3, all assertions passed:", true);
}
import { fileURLToPath } from "url"; 
if (process.argv[1] === fileURLToPath(import.meta.url)) { main(); } // if fileIsRunDirectly