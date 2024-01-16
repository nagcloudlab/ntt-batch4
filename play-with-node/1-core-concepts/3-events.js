


//-------------------------------------------------------
// door
//------------------------------------------------------

const { EventEmitter } = require("events");


class Door extends EventEmitter{
    open(){
        console.log('door is opened');
        this.emit('open',{number:2,floor:3});
    }
    close(){
        console.log('door is closed');
        this.emit('close',{number:2,floor:3});
    }
}


const door=new Door();


//-------------------------------------------------------
// light
//------------------------------------------------------

door.on('open',(e)=>{
    console.log('light is on',e);
})
door.on('close',(e)=>{
    console.log('light is off',e);
})

//-------------------------------------------------------
// fan
//------------------------------------------------------

door.on('open',(e)=>{
    console.log('fan is on',e);
})

door.on('close',(e)=>{
    console.log('fan is off',e);
})

//-------------------------------------------------------

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 2000);
}, 2000);