import express  from "express";
import fs from 'fs/promises'
import cors from 'cors'

const PORT = 3010
const dbPath = "./db.json"
const app = express()

app.use(cors({origin: "http://localhost:5173"}))


const readDbFile =async () => JSON.parse(await fs.readFile(dbPath, {encoding: 'utf-8'}))

console.log(await readDbFile())

app.get('/todos', async (req,res)=>{
    const items = await readDbFile()
    res.json(items)  
})

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})