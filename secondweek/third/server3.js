const http = require('http');
const fs = require('fs');



let server = http.createServer((req,res)=>{
   let path = './'
    
 if(req.url === '/gadegets'){
    path += 'gadegets.html'; 
}
else if(req.url === '/lap'){
    path += 'lap.html';
}
else if(req.url === '/mobile'){
    path += 'mobile.html';
}
else if(req.url === '/home'){
    path += 'home.html';
}
else{
    path += 'error.html';
    
}
res.setHeader('content-type','text/html')
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
        res.end()
    }
    else{
        res.write(data);
        res.end()
    }
})

 })




 

server.listen(3000,'localhost',()=>{
    console.log("server is listeningggg")
});