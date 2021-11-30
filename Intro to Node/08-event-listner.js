const EventEmitter = require ('events');
//  this module returns class
//  EventEmitter is a class, we can make instances frrom it.

const customEmitter = new EventEmitter();

//  .on -> is used to add a callback function that's going to be executed when the event is triggered.
//  .on -> first parameter as str, is an event name, will be on in emit to to trigger the event.
//  .emit -> is used to trigger an event, first para string i.e. event name, and oother are parameters to callback.

customEmitter.on('response', (name, course) => {
    console.log(`My name is ${name} & I'm learning ${course}.`);
});
customEmitter.on('response', () => {
    console.log('Simple Example of EventEmitter.');
});

customEmitter.emit('response', 'Obaid Ur Rahman', 'NodoJS');

//  .on is like defining a function
//  .emit is like calling the function, in this case function -> event.