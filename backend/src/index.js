import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT  = process.env.PORT || 7000;

app.get("/", (req, res)=>{
    res.send("<h1>Home page</h1>")
})

app.listen(PORT, ()=>{
    console.log(`server listeing on http://localhost:${PORT}`);
})