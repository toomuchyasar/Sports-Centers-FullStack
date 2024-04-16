import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }))
app.use(cors());



app.use("/posts",postRoutes)

const PORT = 5000;

const CONNECTION_URL = 
"mongodb+srv://yasarmuslu:yumak2019@cluster.pfhpy5m.mongodb.net/?retryWrites=true&w=majority"

mongoose
.connect(CONNECTION_URL, {
   
})
.then(()=> {
    app.listen(PORT, ()=> {
        console.log(`server is running on port : ${PORT}`)
    })
})
.catch((error) => {
    console.error(error.message)
})