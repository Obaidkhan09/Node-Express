const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const path = './test/first.txt';

const getText = (path) => {
    return new Promise((reject, resolve) => {
        fs.readFile(path, 'utf-8', (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}

const start = async() => {
    try {
        const first = await getText(path);
        console.log(first);
    }
    catch (error) {
        console.log(error);
    }
}
start ();
// getText(path)
//     .then((result) => console.log('result'))
//     .catch((err) => console.log(err));