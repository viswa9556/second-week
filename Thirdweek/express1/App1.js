const express = require('express');
const app = express();

app.listen(3000);
app.use((req,res,next)=>{
    console.log("Middleware checking")
    next();
})

app.get('/home',(req,res)=>{
    res.status(200).sendFile('./home.html',{root:__dirname});
})

app.get('/first',(req,res)=>{
    res.status(200).sendFile('./first.html',{root:__dirname});
})
app.get('/second',(req,res)=>{
    res.status(200).sendFile('./second.html',{root:__dirname});
})
app.get('/third',(req,res)=>{
    res.status(200).sendFile('./third.html',{root:__dirname});
})

app.get('/1',(req,res)=>{
    res.redirect('/first');
})

app.use((req,res)=>{
    res.status(404).sendFile('./notfound.html',{root:__dirname});
})


