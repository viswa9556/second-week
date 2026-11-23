const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log("listening");
});

app.get('/send',(req,res)=>{
    res.send('This would show how the text as how the express works')
})

app.use((req,res)=>{
    res.send("Erorrrr");
})