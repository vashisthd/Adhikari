import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js'
// CommonJS syntax
// const app = require('./app'); 

dotenv.config({
    path: './.env'
})

app.get("/", (req, res) => {
    res.send("Welcome to the Social Media API");
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

