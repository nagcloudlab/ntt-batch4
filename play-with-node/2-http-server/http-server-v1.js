
const http = require('node:http');

const httpServer=http.createServer(); //EventEmitter

httpServer.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('hello world');
    res.end();
});

httpServer.listen(3000,()=>{
    console.log('server is ready at 3000');
});