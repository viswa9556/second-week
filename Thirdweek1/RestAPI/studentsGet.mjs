import express from "express"

const app = express();

const students = [
    { id: 1, name: "Arun", age: 21, course: "BBA", city: "Madurai" },
    { id: 2, name: "Bala", age: 22, course: "BCA", city: "Chennai" },
    { id: 3, name: "Karthik", age: 20, course: "BBA", city: "Coimbatore" },
    { id: 4, name: "Ravi", age: 23, course: "BCom", city: "Madurai" },
    { id: 5, name: "Suresh", age: 21, course: "BCA", city: "Trichy" },
    { id: 6, name: "Priya", age: 22, course: "BBA", city: "Chennai" },
    { id: 7, name: "Divya", age: 20, course: "BSc", city: "Madurai" }
];
const PORT = 3000
app.listen(PORT,()=>{
    console.log("port is listening");
})

app.get("/api/students/:id",(req,res)=>{
    // const id = req.param.id;
    console.log(req.params);
    const id = parseInt(req.params.id)
    console.log(id)
    if(isNaN(id)){
       return  res.send("Invalid Id")
    }
     const user = students.find((x)=>{
        return x.id === id;
     })
     if(user){
        return res.send(user)
     }
     res.send("Students not found")
})

app.get('/api/students/city/:city',(req,res)=>{
    const {city} = req.params;
    const cities = students.filter((x)=>{
      return x.city.toLowerCase() === city
    })
      if(cities.length > 0){
        return res.send(cities)
      }
      res.send('no students found in this city');
    })

    app.get("/api/students",(req,res)=>{
        const {course,age,city} = req.query

        const result = students.filter((x)=>{
 
          return  (!course || x.course.toLowerCase() === course.toLowerCase()) &&
                  (!age || x.age === Number(age)) &&
                  (!city || x.city.toLowerCase() === city.toLowerCase());
        })
        if(result.length > 0){
            return res.send(result);
        }
        res.send("Invalid");


    })