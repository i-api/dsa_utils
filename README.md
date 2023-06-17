# dsa_utils
A collection of data structures and utilities for JavaScript.
- Stack
    - Is implemented using a Doubly-Linked List.
    - Supports the following operations in O(1) Time
        - push()
        - pop()
        - peek()
        - get_length()
        - <div>__repr__ is implemented in O(n) time. </div>
- Deque 
    - Is implemented using a Doubly-Linked List.
    - Supports the following operations in O(1) Time, in addition to those supported by Stack
        - push_left()
        - shift()
        - peek_left()
- range()
    - Works exactly like Python's range() function.
- memoize(fn)
    - returns a cached/memoized version of fn
- properties 
    - find all properties of an object, including inherited properties
- protochain
    - walks up the protochain
- protochain_soft
    - same as protochain but only lists "name" properties on objects


# Installation and Usage: Deno
```bash
cat <<\EOF > main.js
import {Deque, Stack, range, memoize} from "https://deno.land/x/dsa_utils@v0.0.2.3/main.js"
console.log(Deque, Stack, range, memoize, properties, protochain, protochain_soft)
EOF
deno run main.js
```

# Installation and Usage: Node
``` zsh
mkdir my_project; cd my_project;
touch main.js
npm init -y; npm pkg set type="module";
npm pkg set scripts.test1="node main.js"
npm install dsa_utils

cat <<\EOF > main.js
import {Deque, Stack, range, memoize, properties, protochain, protochain_soft} from 'dsa_utils';
console.log(Deque, Stack, range, memoize, properties, protochain, protochain_soft);
EOF

node main.js
```

## Sympathizing with noobs:
- You must have node.js installed in order to use this package
- Install it via https://nodejs.org or via your favorite package manager, e.g. Homebrew

## Notes on Package Managers:
- A package manager is like Apple's "App Store", but for programmers. 
- https://brew.sh/ aka Homebrew, is a great package manager for Mac users
- Homebrew is similar to Apple's "App Store", but better in every way.
- There are generally two types of apps you can download, Command Line Tools, and GUI Apps.
- Command Line Tools, like git, node, npm, and gcc are used in the terminal.
- GUI Apps, like Chrome, Firefox, iMessage, etc. are used in the GUI.
- Homebrew calls Command Line Tools "formulae", and GUI Apps "casks".
- Good luck!


## Misc publish output:
``` zsh
bash-3.2$ npm publish

npm notice 
npm notice 📦  dsa_utils@1.0.3
npm notice === Tarball Contents === 
npm notice 1.7kB README.md          
npm notice 635B  deque_unit_tests.js
npm notice 3.4kB deque.js           
npm notice 101B  main.js            
npm notice 267B  package.json       
npm notice 1.2kB stack_unit_tests.js
npm notice 2.1kB stack.js           
npm notice === Tarball Details === 
npm notice name:          dsa_utils                               
npm notice version:       1.0.3                                   
npm notice filename:      dsa_utils-1.0.3.tgz                     
npm notice package size:  2.3 kB                                  
npm notice unpacked size: 9.3 kB                                  
npm notice shasum:        d269ce05bd695c3e08a8ce60f4af421fede39711
npm notice integrity:     sha512-wtKGLKKwQZZ68[...]3S894DLN3Apow==
npm notice total files:   7                                       
npm notice 
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
+ dsa_utils@1.0.3

bash-3.2$ 
```