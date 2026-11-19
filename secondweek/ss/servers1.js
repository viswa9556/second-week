const http = require('http');
const fs = require('fs');


let server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
    
    if(fs.existsSync('./basic.html')){
        fs.readFile('./basic.html',(err,data)=>{
            if(err){
                console.log(err)
                res.end()
            }
            else{
                res.write(data);
                res.end();
            }

        })
    }


})

server.listen(3000,'localhost',()=>{
    console.log("server is running");
})

    