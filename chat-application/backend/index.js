const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on('join', (data) => {
    console.log(data)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
