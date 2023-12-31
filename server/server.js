import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-type"],
  },
});
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("BD CONNECTION ERROR", err));
app.use(express.json({ limit: "Smb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: [process.env.CLIENT_URL] }));
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
io.on("connect", (socket) => {
  //console.log("SOCKET>IO", socket.id);
  socket.on("new-post", (newPost) => {
    socket.broadcast.emit("new-post", newPost);
  });
});
const port = process.env.PORT || 8000;
http.listen(port, () => console.log(`SERVER RUNNING ON PORT ${port}`));
