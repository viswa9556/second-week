import express from 'express';

const app = express();

const PORT = 4000;

app.listen(PORT,()=>{
    console.log("port activated");
})

const users =[
    {"userid" : 1,"name":"raja"},
    {"userid" : 2,"name":"viswa"},
    {"userid" : 3,"name":"fasil"},
    {"userid" : 4,"name":"naresh"}
]

app.get("/api/users",(req,res)=>{
    res.send(users);
})

app.get("/api/users/:id",(req,res)=>{
    //  console.log(req.params)
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(404).send({msg : "invalid request"})
    }
    const user = users.find((x)=>{
        return  x.userid === id;
       
    })
    console.log(user);

    if(user){
        return res.send(user)
    }
    else{
        return res.status(404).send("user not found")
    }

})