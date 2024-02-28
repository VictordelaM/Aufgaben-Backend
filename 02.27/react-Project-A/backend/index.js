import express from "express";
import fs from "fs";
import cors from "cors";

const PORT = 3000;
const app = express();
const url = 'http://localhost:5173'

app.get('/api',(req, res) =>{
    res.json({"ToDos":["kochen", "essen"]})
})

app.listen(3000, () =>{console.log("listen port 3000")})