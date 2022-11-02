const router = require("express").Router();
const post = require("./postData");
const { appendFile } = require("fs");


require("dotenv").config();
const url = process.env.JSONPOST_URL;

router.get("/post", async (req, res) => {
  try {
    const results = await post.getPostData(url);
    res.send(results);
  } catch (err) {
    console.log("asdadsas",err)
    res.send(err);
  }
});

module.exports = router;
