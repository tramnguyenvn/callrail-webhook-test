import express from "express";
import bodyParser from 'body-parser';

const app = express();

// Parse req body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Testing Webhooks: Express on Vercel App"));

app.post("/post-interactions", (req, res) => {
    console.log(req.body);
    res.status(200).send("Post form succesfully");
})

app.listen(3002, () => console.log("Server ready on port 3000."));

module.exports = app;
