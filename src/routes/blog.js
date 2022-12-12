const router = require("express").Router();
const Blog = require("../models/Blog");

// Your routing code goes here

// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })

router.get("/blog/:id", async (req, res) => {
  try {
    const result = await Blog.find({ _id: req.params.id });

    res.json({
      status: "Success",
      result,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});
router.post("/blog", async (req, res) => {
  try {
    const result = await Blog.create({
      topic: req.body.topic,
      description: req.body.description,
      posted_at: req.body.posted_at,
      posted_by: req.body.posted_by,
    });
    res.json({
      status: "Success",
      result,
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});

router.put("/blog/:id", async (req, res) => {
  try {
    const result = await Blog.updateOne(
      { _id: req.params.id },
      {
        topic: req.body.topic,
        description: req.body.description,
        posted_at: req.body.posted_at,
        posted_by: req.body.posted_by,
      }
    );
    res.json({
      status: "Success",
      result,
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});
router.delete("/blog/:id", async (req, res) => {
  try {
    const result = await Blog.deleteOne({ _id: req.params.id });
    res.json({
      status: "Success",
      result,
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});

module.exports = router;

app.put('/blog/":id', async (req,res) =>{
  try{
    const data = await Blog.updateOne({},{
      
    })
  }
  catch{

  }
})