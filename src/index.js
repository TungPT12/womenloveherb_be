const express = require("express");
const cors = require("cors");
const detectTongueRouter = require("./routers/image");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", detectTongueRouter)

app.listen(4000, () => {
    console.log("Running...")
})