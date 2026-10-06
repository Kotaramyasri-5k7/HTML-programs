const express = require("express");
const app = express();
app.use(express.json());
let students=[
    {id:"25WH1A05K7",name:"Ramyasri",age:18},
    {id:"5R6",name:"Keerthana",age:19}
];

//Get-Read all students
app.get("/students",(req,res)=>{
    res.json(students);
});

//POST-Add a students
app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send("Students added successfully");
});

//PUT-Update a student
app.put("/students/:id",(req,res)=>{
    let student = students.find(s=>s.id === req.params.id);
    if(student){
        student.name = req.body.name;
        student.age = req.body.age;
        res.send("Student updated successfully");
    }else{
        res.send("Student not found");
    }
});

//DELETE-Delete a student
app.delete("/students/:id",(req,res)=>{
    students = students.filter(s=>s.id !== req.params.id);
    res.send("Student deleted successfully");
});

app.listen(3001,()=>{
    console.log("Server running on port http://localhost:3001");
});