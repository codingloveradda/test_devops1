import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
 

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});


export default app;