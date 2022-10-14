require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4500;
const roomsRouter = require("./routes/api/roomsRouter");
const filesRouter = require("./routes/route/filesRouter");

const path = require("path");

// middleware - Telling use filesRouter file for path /
app.use("/", filesRouter);

// use all the files(static) under the public folder like css, images etc.
app.use(express.static(path.join(__dirname, "public")));

app.use("/roomsList", roomsRouter);

// listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
