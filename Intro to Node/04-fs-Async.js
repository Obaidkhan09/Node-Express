//  Working with built-in modules FileSystem (fs) sync.

const fs = require('fs');
fs.readFile(
    './test/first.txt',
    'utf8',
    (err, resolve) => {
        if (err) {
            console.log(err);
            return;
        }
        //  resolve run following code / callback
        const first = resolve;
        fs.readFile(
            ('./test/subTest/test file.txt'),
            'utf8',
            (err, resolve) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const second = resolve;
                console.log(first, second);
                //  instead of consle.log we can run fs.writeFile(), but didn't run just to avoid creating extra files.
                //  if we call writeFile function, there will be another callbaack added in the sequence.
            })
    }
)