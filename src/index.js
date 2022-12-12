const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const Data = require("./InitialData");
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here
// mongoose.connect("mongodb://localhost:27017/testDB");
// const stdSchema = mongoose.Schema({
//   name: String,
//   currentClass: Number,
//   division: String,
// });
let studentid = Data.length;

app.get("/api/student", (req, res) => {
  res.json({ Data });
});

app.get("/api/student/:id", (req, res) => {
  const index = Data.findIndex((element) => element.id == req.params.id);
  const student = Data[index];
  if (index == -1) {
    res.status(404).json({ status: "Failed", result: "Id is invalid" });
    // res.end();
  } else {
    res.json({ student });
  }
});

app.post("/api/student", (req, res) => {
  res.setHeader("POST", {
    "content-type": "application/x-www-form-urlencoded",
  });
  if (req.body.name && req.body.currentClass && req.body.division) {
    const stdId = studentid + 1;
    Data.push({
      id: stdId,
      name: req.body.name,
      currentClass: req.body.currentClass,
      division: req.body.division,
    });
    studentid += 1;
    res.json({ stdId });
  } else {
    res.status(400).json({ status: "Failed", result: "Incomplete Details" });
  }
});

app.put("/api/student/:id", (req, res) => {
  res.setHeader("POST", {
    "content-type": "application/x-www-form-urlencoded",
  });
  const index = Data.findIndex((element) => element.id == req.params.id);
  let updates = req.body;
  if (index !== -1) {
    if (req.body.name && req.body.division && req.body.currentClass && req.body.id) {
      
      Data[index] = updates;
      res.json(Data[index]);
    } else {
      res.status(400).json({ status: "Failed", result: "Invalid Data" });
    }
  } else {
    res.status(400).json({ status: "Failed", result: "Invalid Id" });
  }
});

app.delete("/api/student/:id", (req, res) => {
  const index = Data.findIndex((element) => element.id == req.params.id);
  if (index == -1) {
    res.status(400).json("Invalid Id");
  } else {
    const student = Data.splice(index, 1);
    res.json({ student });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
