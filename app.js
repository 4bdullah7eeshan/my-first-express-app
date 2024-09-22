const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello, world"));
//app.post("/messages", (req, res) => res.send("This is where you can see any messages."));
app.get("/messages", (req, res) => res.send("This is where you can see any messages."));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`My first Express app, listening on port: ${PORT}!`));
