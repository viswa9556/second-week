import express from 'express'

const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Port is running for post")
})


const students = [
    { id: 1, name: "Arun", age: 21, course: "BBA", city: "Madurai" },
    { id: 2, name: "Bala", age: 22, course: "BCA", city: "Chennai" },
    { id: 3, name: "Karthik", age: 20, course: "BBA", city: "Coimbatore" },
    { id: 4, name: "Ravi", age: 23, course: "BCom", city: "Madurai" },
    { id: 5, name: "Suresh", age: 21, course: "BCA", city: "Trichy" },
    { id: 6, name: "Priya", age: 22, course: "BBA", city: "Chennai" },
    { id: 7, name: "Divya", age: 20, course: "BSc", city: "Madurai" }
];
// GET

app.get('/api/studentspost',(req,res)=>{
    res.send(students)

})

// POST

app.use(express.json());

app.post('/api/studentspost',(req,res)=>{
    console.log(req.body)
    const {body} =req
    const newUser = {id:students[students.length-1].id +1 ,...body}
    students.push(newUser)
    res.send(newUser);
})

// PUT

app.put("/api/studentsput/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).send("Invalid Id");
    }
    const user = students.findIndex((x)=>{
        return x.id === id; 
    })
        const {body} = req;
    if(user === -1){
       return res.status(200).send("Invalid")
    }
     students[user] = { id : id , ...body}
        return res.status(200).send({msg:"updated"});

})

// PATCH

app.patch("/api/studentspatch/:id",(req,res)=>{
    const id = parseInt( req.params.id);


if(isNaN(id)){
    return res.status(400).send("INvalid ID")
}
const user = students.findIndex((x)=>{
    return x.id === id;
})
const {body} = req;
if(user === -1){
    return res.status(200).send("ID not found")
}

students[user] = {...students[user],...body};
res.send("updated");
})

// delete

app.delete("/api/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).send("NOt a number")
    }
    const index = students.findIndex((x)=>{
        x.id === id
    })

    students.splice(students[index],1);
res.send("deleted");

})