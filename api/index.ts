import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/post-interactions", (req, res) => {
    console.log(req.body);
    console.log(JSON.stringify(JSON.parse(req.body)));
    res.status(200).send("Post form succesfully");
})

app.listen(3002, () => console.log("Server ready on port 3000."));

module.exports = app;