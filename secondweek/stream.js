import fs from 'fs';
/* if(fs.existsSync('./sstream.txt')){
    fs.rmdir('./sstream.txt',(err)=>{
        if(err){
            console.log(error.message);
        }
        else{
            console.log("its deleted");
        }
    
    })    
} */

/* if(fs.existsSync('./newfile')){
    fs.rmdir('./newfile',(err)=>{
        if(err){
            console.log(error.message);
        }
        else{
            console.log("its deleted");
        }
    
    })    
} */

    const read = fs.createReadStream('./buffer/student.txt');

    read.on('data',(rdata)=>{
        console.log(rdata.toString());
    })

    /* const writess = fs.createWriteStream('./buffer/nextstudet.txt');

    read.on('data',(buffer)=>{
        writess.write(buffer);
    }) */

    const writess = fs.createWriteStream('./buffer/next2studet.txt');
    read.pipe(writess);