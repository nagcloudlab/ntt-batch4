

// console.log(process.pid);
// while(true){}

// file system module

const fs=require('fs'); // node's core module

const menu=fs.readFileSync("./menu.txt","utf-8") // blocking IO // 3s
console.log(menu);
console.log("do something else");