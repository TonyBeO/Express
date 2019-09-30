const express = require('express');
const app = express();
let arreglo = [];
var personas = {};

app.get("/", ( req,res) =>{
	res.send("Hellow world");
});

app.listen(3000, () => {
	console.log("Server is running...");
});

app.get("/:id", (req,res)=>{
    arreglo.push(req.params.id);
    console.log(arreglo);
});

app.get("/:nombre/:edad",(nombre,))=>{
	personas.nombre = (nombre,edad)
};