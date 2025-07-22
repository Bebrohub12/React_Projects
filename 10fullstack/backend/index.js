import express from "express"

const app = express();
 

const users = [
  { id: 1, name: "Alice", age: 28, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 34, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" }
];


app.get("/v1/api",(req,res)=>{
    res.status(200).send(users)
})

app.listen(8000,()=>{
    console.log(`server is runing at 8000`);    
})