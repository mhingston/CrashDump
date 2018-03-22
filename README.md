# crashdump

Do something before the main node process terminates. You need to explicitly call `process.exit()` when your application completes or it won't exit as the `process.stdin.resume()` used by this module will keep the event loop busy.

## Installation

```
npm install mhingston/crashdump
```

## Usage

```javascript
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const myFunc = async () =>
{
    console.log('something bad happened... exiting.');
    const stuff =
    {
        foo: 'bar'
    }
    await fs.writeFile('dump.json', JSON.stringify(stuff));
}

require('crashdump')(myFunc);
throw new Error('http://knowyourmeme.com/memes/this-is-fine');
process.exit() // never reached
```
