//  JavaScript is Synchronous Language or Single Threaded
//  That means it runs code line by line.
//  but by using setTimeout or Async functions (callback, async await)
//  we can offload certain block of code to execute it at the end.

console.log(`This is First File`);

setTimeout(()=>{
    console.log(`This is Second file with timeOut 0 sec.`);
}, 0);

console.log(`This is Third file.`);

//  in this example, setTimeout is set to be 0 sec
//  still it runs after synchonous code is completely executed.