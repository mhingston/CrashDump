# crashdump

Do something before the main node process terminates

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
```