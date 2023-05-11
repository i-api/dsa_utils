import {Deque} from '../Library/Deque.js';

/**
 * 
 */
function main() {
    unit_test_1();
    unit_test_2();
}
function unit_test_1() {
    const deque = new Deque();
    deque.push(1);
    deque.push(2);
    deque.push(3);
    deque.push_left(0);
    deque.push_left(-1);
    deque.push(4);
    
    let expected = JSON.stringify([ -1, 0, 1, 2, 3, 4 ]);
    const actual = JSON.stringify(deque.__repr__());
    console.log("unit_test_1, all assertions passed:", expected === actual);
}
function unit_test_2() {
    const deque = new Deque([-1, 0, 1, 2, 3, 4]);
    let passed0 = (deque.shift().data === -1);
    if (passed0 === false) throw Error("unit_test_2 failed");

    let expected = JSON.stringify([ 0, 1, 2, 3, 4 ]);
    const actual = JSON.stringify(deque.__repr__());
    console.log("unit_test_2, all assertions passed:", expected === actual);
}
import { fileURLToPath } from "url"; 
if (process.argv[1] === fileURLToPath(import.meta.url)) { main(); } // if fileIsRunDirectly