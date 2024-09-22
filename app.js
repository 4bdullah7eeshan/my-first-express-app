const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello, world"));
//app.post("/messages", (req, res) => res.send("This is where you can see any messages."));
// app.get("/messages", (req, res) => res.send("This is where you can see any messages."));

// app.get("*", (req, res) => {
//     res.send("* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.");
// });
app.get("/:username/messages", (req, res) => {
     console.log(req.params);
     res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
    console.log(req.params);
    res.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`My first Express app, listening on port: ${PORT}!`));
