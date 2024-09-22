const express = require("express");
const authorsRouter = require("./routes/authorsRouter");

const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/authors", authorsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
