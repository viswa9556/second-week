const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request');
    console.log(req.url);
    console.log(req.method);
    
    res.setHeader('Content-Type','text/html');
    res.write("<h1>This would check the server response<h1>");
    res.write("<h4>this is the second line viswa<h4>");
    res.end();

});

server.listen(3000,'localhost',()=>{
    console.log("serverlistening");
})

