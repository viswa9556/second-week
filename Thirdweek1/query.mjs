import express from 'express'

const app = express();

const PORT = 3100;

app.listen(PORT,()=>{
    console.log("port is running")
})

const products = [
    {productName : 'Iphone16'},
    {productName : 'samsung'},
    {productName : 'iphone15'},
    {productName : 'realme'},
    {productName : 'vivo'},
    {productName : 'undefined'},
]

app.get("/products",(req,res)=>{
    console.log(req.query);
    const {filter,value} = req.query
    console.log(filter,value)

    if(filter && value){
    res.status(200).send(products.filter((product)=>product[filter].toLowerCase().includes(value)))
    }
    res.send(products)

})