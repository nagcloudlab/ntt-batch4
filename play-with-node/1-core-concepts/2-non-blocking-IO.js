
//---------------------------------------------------------------------------------------------
//way-1: async programming via callback
//---------------------------------------------------------------------------------------------

// const fs=require('node:fs');

// fs.readFile("./menu.txt","utf-8",(err,menu)=>{ 
//     if(err) throw err;
//     console.log(menu);
// })
// console.log("do something else");

//---------------------------------------------------------------------------------------------
//way-2: async programming via promise
//---------------------------------------------------------------------------------------------
const fs=require('node:fs/promises');

async function readMenu(){
    const menu =await fs.readFile("./menu.txt","utf-8");
    console.log(menu);
}
readMenu();
console.log("do something else");