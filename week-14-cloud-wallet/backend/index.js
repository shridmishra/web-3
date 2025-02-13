const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/v1/signup", (req,res) => {
    res.json({
        message: "signup"
    })
})

app.post("/api/v1/signin", (req,res) => {
    res.json({
        message: "signin"
    })
})

app.post("/api/v1/txn/sign", (req,res) => {
    res.json({
        message: "signup"
    })
})

app.post("/api/v1/txn", (req,res) => {
    res.json({
        message: "signup"
    })
})


app.listen(3000)