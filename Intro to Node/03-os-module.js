// Working with Built-in Modules

const os = require('os');

//Info about current user
const user = os.userInfo() ;
console.log(user);

//Returns the System uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    releaseDate: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem() 
}
console.log(currentOS);