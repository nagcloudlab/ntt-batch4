
const http = require('node:http');
const fs = require('node:fs');

const httpServer=http.createServer(); //EventEmitter

httpServer.on('request',(req,res)=>{
    console.log("accepted new request..");
    res.writeHead(200,{'content-type':'application/pdf'});
    const fileData=fs.readFileSync('./PPT/all-levels node.pdf'); // blocking IO
    res.write(fileData);
    res.end();
    console.log("sent response..");
});

httpServer.listen(3000,()=>{
    console.log('server is ready at 3000');
});