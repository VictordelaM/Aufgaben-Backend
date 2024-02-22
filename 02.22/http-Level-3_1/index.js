import http from "http"
import fs from "fs"

const sendFile = (path, res) =>{
    fs.readFile(path,(err,data)=>{
        if (err){
            res.writeHead(404)
            res.end("Notfound")
        }
        else{
            res.end(data)
        }
    })
}

const server = http.createServer((req, res) =>{
    if (req.url === "/"){
        sendFile("./index.html", res)
    }
    else{
        sendFile(`./${req.url}`, res)
    }
})

server.listen(3000, ()=>{
    console.log("listening on 3000")
})