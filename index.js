const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('server is running');
    const path = req.url;
    fs.appendFile('error.txt', ` ${Date.now()} - Hello from server - ${path}  \n `, (err) => {
        if(err) throw err;
    })
    res.end('hello from node js');
});

server.listen(2000, ()=>{
    console.log('server is running on port 2000');
});