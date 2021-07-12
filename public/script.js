/* ---------------------------------------------- */
/*         GLOBAL VARIABLES/CONSTANTS             */
/* ---------------------------------------------- */
const socket = io("/");                      //rendering web socket.io in the application
const chatInputBox = document.getElementById("chat_message");         //chat feature
const allTextMessages = document.getElementById("allTextMessages");         //all text messages
const mainChatWindow = document.getElementById("mainChatWindow");        //main chat window
const videoGrid = document.getElementById("video-grid");          //display video
const myVideo = document.createElement("video");                  //on-screen video
//enabling TURN/STUN server
const configuration = {
  iceServers: [{   
    urls: [ "stun:bn-turn1.xirsys.com" ]}, {   
      username: "cGWtB0oCXpelZRG2qHeb7kjCMDzBh_0ou-vJnlodd4DiQ9Bz297BXKt8iBJ9x5H9AAAAAGDsU5htYW5pa2FqYWluMTE=",   
      credential: "a52324b0-e31e-11eb-86f2-0242ac140004",   
      urls: [       "turn:bn-turn1.xirsys.com:80?transport=udp"   ]}]
}
myVideo.muted = true;

/* --------------------------------------------------- */
/*         ADDING PARTICIPANTS/PEERS                   */
/* --------------------------------------------------- */
//ADDING NEW PEER USING PEERJS LIBRARY
var peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "3030",
});

let myVideoStream;           //to stream video of the participant

//USER MEDIA OPTIONS
var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

//VIDEO AND AUDIO TOGGLING OPTIONS
navigator.mediaDevices
  .getUserMedia({
    video: true,            //renders the video as ON by default
    audio: true,            //renders the audio as ON by default
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

    peer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");

      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

/* --------------------------------------------------- */
/*         CHECKING CONNECTIVITY                       */
/* --------------------------------------------------- */
    socket.on("user-connected", (userId) => {            //when a new user/participant connects
      connectToNewUser(userId, stream);
    });

/* --------------------------------------------------- */
/*        IN-BUILT CHAT FEATURE                        */
/* --------------------------------------------------- */
    document.addEventListener("keydown", (e) => {        //renders the chat features for the new user
      if (e.which === 13 && chatInputBox.value != "") {
        socket.emit("message", chatInputBox.value);
        chatInputBox.value = "";
      }
    });

    //MAIN CHAT WINDOW USAGE
    socket.on("createMessage", (msg) => {               
      console.log(msg);
      let li = document.createElement("li");
      li.innerHTML = msg;
      allTextMessages.append(li);
      mainChatWindow.scrollTop = mainChatWindow.scrollHeight;
    });
  });

//VIDEO RENDERING FOR MULTIPLE PARTICIPANTS
  peer.on("call", function (call) {
  getUserMedia(
    { video: true, audio: true },
    function (stream) {
      call.answer(stream);                      // Answers the call with an A/V stream.
      const video = document.createElement("video");
      call.on("stream", function (remoteStream) {
        addVideoStream(video, remoteStream);
      });
    },
    function (err) {
      console.log("Failed to get local stream", err);   //condition if the video fails to load
    }
  );
});

//RENDERING UNIQUE ROOM-ID
peer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

/* --------------------------------------------------- */
/*         CONNECTING TO A NEW USER                    */
/* --------------------------------------------------- */
const connectToNewUser = (userId, streams) => {
  var call = peer.call(userId, streams);
  console.log(call);
  var video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    console.log(userVideoStream);
    addVideoStream(video, userVideoStream);
  });
};

//streaming video
const addVideoStream = (videoEl, stream) => {             
  videoEl.srcObject = stream;
  videoEl.addEventListener("loadedmetadata", () => {
    videoEl.play();
  });

  //appending to the video grid of the application
  videoGrid.append(videoEl);
  let totalUsers = document.getElementsByTagName("video").length;
  if (totalUsers > 1) {
    for (let index = 0; index < totalUsers; index++) {
      document.getElementsByTagName("video")[index].style.width =
        100 / totalUsers + "%";
    }
  }
};

/* FEATURE TO SWITCH THE VIDEO ON/OFF */
const playStop = () => {
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
};

/* FEATURE FOR USER TO SET THEM ON MUTE/UNMUTE */
const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
};

//plays the video of participant
const setPlayVideo = () => {
  const html = `<i class="unmute fa fa-pause-circle"></i>`;
  // <span class="unmute"></span>`;
  document.getElementById("playPauseVideo").innerHTML = html;              
};

//stops the video of participant
const setStopVideo = () => {
  const html = `<i class=" fa fa-video-camera"></i>`;
  document.getElementById("playPauseVideo").innerHTML = html;             
};

//unmutes the participant
const setUnmuteButton = () => {
  const html = `<i class="unmute fa fa-microphone-slash"></i>`;
  // <span class="unmute"></span>`;
  document.getElementById("muteButton").innerHTML = html;                
};

//mutes the participant
const setMuteButton = () => {
  const html = `<i class="fa fa-microphone"></i>`;
  // <span></span>`;
  document.getElementById("muteButton").innerHTML = html;
};
