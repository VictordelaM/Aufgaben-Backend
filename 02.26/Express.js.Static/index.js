import express from 'express'
import fs from 'fs'

const app = express()
const PORT = 3010

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
})