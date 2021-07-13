/* --------------------------------------------------- */
/*         DEPLOYING EXPRESS JS                        */
/* --------------------------------------------------- */
const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");       //for unique room URL and ID
const io = require("socket.io")(server);      //utilizing web sockets to deploy real time communications


/* --------------------------------------------------- */
/*         PEER SERVER                                 */
/* --------------------------------------------------- */
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/peerjs", peerServer);

//redirects the user to the required Room_ID
app.get("/", (req, rsp) => {
  rsp.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

/* --------------------------------------------------- */
/*         CONNECTION OF PARTICIPANTS                  */
/* --------------------------------------------------- */
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);

    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);         //creates a message that a participant has joined the room
    });
  });
});

//port services
server.listen(process.env.PORT || 3030);



