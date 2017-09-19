# flatten-array

## Running tests
    npm install
    npm run build && npm run test

## Usage
    const flattenArray = require('flatten-array');
    let flattened = flattenArray([[1,2,[3]],4]); // -> [1,2,3,4]
