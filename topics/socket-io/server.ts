import { Server } from "socket.io";
const io = new Server(3000);

io.on("connection", (socket) => {
  socket.on("join", (room) => socket.join(room));
  socket.on("message", ({ room, text }) => {
    io.to(room).emit("message", text);
  });
});
