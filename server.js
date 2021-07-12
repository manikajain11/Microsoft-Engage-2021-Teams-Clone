const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
//enabling TURN/STUN server
const configuration = {
  iceServers: [{   
    urls: [ "stun:bn-turn1.xirsys.com" ]}, {   
      username: "cGWtB0oCXpelZRG2qHeb7kjCMDzBh_0ou-vJnlodd4DiQ9Bz297BXKt8iBJ9x5H9AAAAAGDsU5htYW5pa2FqYWluMTE=",   
      credential: "a52324b0-e31e-11eb-86f2-0242ac140004",   
      urls: [       "turn:bn-turn1.xirsys.com:80?transport=udp"   ]}]
}
// Peer

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/peerjs", peerServer);

app.get("/", (req, rsp) => {
  rsp.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);

    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
  });
});

server.listen(process.env.PORT || 3030);
