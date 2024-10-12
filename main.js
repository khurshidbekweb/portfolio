import express from 'express';
import path from "path"

const app = express()

app.use(express.static(path.join(process.cwd())))

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"))
    return ;
})

app.listen(8000, () => {
    console.log(`Server running on port ${8000}`)
})