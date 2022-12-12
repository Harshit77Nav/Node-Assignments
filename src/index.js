const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
   
    let sum = Number(req.body.num1) + Number(req.body.num2);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Invalid data types"
        })
    } else if(req.body.num1 < -1000000 || req.body.num2 < -1000000) {
        return res.json({
        "message": "underflow"
        })
    } else if(sum > 1000000) {
        return res.json({
            "message": "overflow"
        })
    }
    
    // res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the sum of given two numbers `,
        "result": sum
    }
    )

})

app.post("/sub", (req, res) => {
   
    let sub = Number(req.body.num1) - Number(req.body.num2);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Invalid data types"
        })
    } else if(req.body.num1 < -1000000 || req.body.num2 < -1000000) {
        return res.json({
        "message": "underflow"
        })
    } else if(sub > 1000000) {
        return res.json ({
            "message": "overflow"
        })
    }
    // res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the sum of given two numbers`,
        "result": sub
    }
    )
})

app.post("/multiply", (req, res) => {
    
    let mul = Number(req.body.num1) * Number(req.body.num2);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Invalid data types"
        })
    } else if(req.body.num1 < -1000000 || req.body.num2 < -1000000) {
        return res.json({
        "message": "underflow"
        })
    } else if(mul > 1000000) {
        return res.json({
            "message": "overflow"
        })
    }
    // res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the product of given two numbers `,
        "resutl": mul
    }
    )
})

app.post("/divide", (req, res) => {
    let div = Number(req.body.num1) / Number(req.body.num2);
    if(isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Invalid data types"
        })
    } else if(req.body.num2 == 0) {
        return res.json({
            "message": "Cannot divide by zero"
        })
    } else if(req.body.num1 < -1000000 || req.body.num2 < -1000000) {
        return res.json({
        "message": "underflow"
        })
    } else if(div > 1000000) {
        return res.json({
            "message": "overflow"
        })
    }
    // res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the division of given two numbers`,
        "result": div
    }
    )
})

app.get('/' , (req, res) => {
    res.send("ok");
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;