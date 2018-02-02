var events = require('events');
var eventEmitter = new events.EventEmitter();
var heardscream = function(){
    console.log('I heard a scream!');
}
eventEmitter.on('scream', heardscream);
var heardcry = function(){
    console.log('I heard someone cried.');
}
eventEmitter.on('cry',heardcry);
eventEmitter.emit('scream');
eventEmitter.emit('cry');