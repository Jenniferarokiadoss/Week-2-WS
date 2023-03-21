const express = require("express")
const res = require("express/lib/response");
const app= express();
const add= (n1,n2) => {
    return n1+n2;
}
const sub= (n1,n2) => {
    return n1-n2;
}
const mul= (n1,n2) => {
    return n1 * n2;
}
const div= (n1,n2) => {
    return n1/n2;
}

app.get("/add", (req,res) =>{
   try{
    const n1= parseFloat(req.query.n1);
    const n2= parseFloat(req.query.n2);
    if(isNaN(n2)){
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)){
        throw new Error ("n2 incorrectly defined");
    }
    const result = add(n1,n2);
    res.status(200).json({statuscode:200,data: result});
   } catch(error){
    console.error(error)
    res.status(500).json({statuscode:500, msg:error.toString()})
   }
});
app.get("/sub", (req,res) =>{
    try{
     const n1= parseFloat(req.query.n1);
     const n2= parseFloat(req.query.n2);
     if(isNaN(n1)){
         throw new Error("n1 incorrectly defined");
     }
     if(isNaN(n2)){
         throw new Error ("n2 incorrectly defined");
    }
     const result = sub(n1,n2);
     res.status(201).json({statuscode:200,data: result});
    } catch(error){
     console.error(error)
     res.status(502).json({statuscode:500, msg:error.toString()})
    }
});
app.get("/mul", (req,res) =>{
    try{
     const n1= parseFloat(req.query.n1);
     const n2= parseFloat(req.query.n2);
    if(isNaN(n1)){
         throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)){
         throw new Error ("n2 incorrectly defined");
    }
     const result = mul(n1,n2);
     res.status(200).json({statuscode:200,data: result});
    } catch(error){
     console.error(error)
     res.status(401).json({statuscode:500, msg:error.toString()})
    }
});
app.get("/div", (req,res) =>{
    try{
     const n1= parseFloat(req.query.n1);
     const n2= parseFloat(req.query.n2);
    if(isNaN(n1)){
         throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)){
         throw new Error ("n2 incorrectly defined");
    }
     const result = div(n1,n2);
     res.status(200).json({statuscode:200,data: result});
    } catch(error){
     console.error(error)
     res.status(400).json({statuscode:400, msg:error.toString()})
    }
});

const port = 3010;
var a = add('5','8');
var b = sub('9','3');
var c = mul('8','3');
var d = div('10','5');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
app.listen(port,()=>{
    console.log("hello I am listening to port " + port)
})