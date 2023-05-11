import {range} from '../Library/range.js';

/**
 * 
 */
function main() {
    unit_test_1();
    unit_test_2();
    unit_test_3();
}
function unit_test_1() {
    const expected = JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const actual = JSON.stringify(range(10))
    console.log("unit_test_1, all assertions passed:", expected === actual);
}
function unit_test_2() {    
    const expected = JSON.stringify([ 1,  3,  5,  7,  9, 11, 13, 15, 17, 19 ])
    const actual = JSON.stringify(range(1, 20, 2))
    console.log("unit_test_2, all assertions passed:", expected === actual);
}
function unit_test_3() {    
    const expected = JSON.stringify([ 12, 13, 14, 15, 16 ])
    const actual = JSON.stringify(range(12, 17))
    console.log("unit_test_3, all assertions passed:", expected === actual);
}
import { fileURLToPath } from "url"; 
if (process.argv[1] === fileURLToPath(import.meta.url)) { main(); } // if fileIsRunDirectly


