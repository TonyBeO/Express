const express = require('express');
const app = express();
let arreglo = [];

app.get("/", ( req,res) =>{
	res.send("Hellow world");
});

app.listen(3000, () => {
	console.log("Server is running...");
});

app.get("/:nombre /:edad", (req,res)=>{
    arreglo.push(req.params.id);
    console.log(arreglo);
});