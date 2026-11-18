// File system

const fs = require('fs');
// import fs from 'fs';

if( ! fs.existsSync('./newfile')){
    fs.mkdir('./newfile',(err)=>{
        if(err){
            console.log(err.message);
        }
        else(
            console.log("file created successfully")
        )
    })

}

/* fs.writeFile('./newfile/writefl.txt','This is created by code',(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("file written");
    }
})

if(fs.existsSync('./newfile/writefl.txt')){
    fs.readFile('./newfile/writefl.txt',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data.toString());
        }
    })
}

if(fs.existsSync('./newfile/writefl')){
    fs.unlink('./newfile/writefl',(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("file deleted");
        }
    })
}
 */
   /*  if(fs.existsSync('./newfile')){
        fs.rm('./newfile',{ recursive: true, force: true},(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("folder deleted");
            }
        })
    } */


    