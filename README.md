<h1 id="top" align="center"> <img src="https://www.berkswellschool.org.uk/wp-content/uploads/2021/02/microsoft-teams-logo-png_480-480.png" alt="Microsoft" width="50.5" height="50.5"> MICROSOFT TEAMS CLONE </h1>
<h3 align="center"> Keeping you connected, wherever you are!<br>
Presenting to you the Clone of Microsoft Teams, 'Engage' with enhanced features.<br></h3>
<h2 align="center"><a href="https://engage-microsoft-teams-clone.herokuapp.com/">'Engage'</a></h2>

#### 'Engage,:earth_africa:' a video conferencing and in-built chat web application that helps you connect, chat, call and collaborate in just one place!

![alt text](https://user-images.githubusercontent.com/72864182/125263925-0c04d000-e321-11eb-9e7f-f9abf691a9a7.png "Landing Page")  

[Link to Figma file](https://www.figma.com/file/puvOiVDJUYGZPa3HJlJ81u/Microsoft-Teams-Clone-UI%2FUX?node-id=0%3A1)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Enjoy a Seamless Experience with Engage!  
- [x] **User**👱‍♂️  : Oh right, that's you!   
- [x] **Participant**👱‍♀️  : And that's your friend!  
- [x] **Multiple Participants** 👨‍👦‍👦   : Wish to call your friends? No worries!  
- [x] **Unique Room**  : Enjoy an individual room for you and your members!  
- [x] **Mute/Unmute** 🎤: : Want to have the flexibility to mute/unmute yourself? You're in the right place.  
- [x] **Video ON/OFF** 👀 : Do you want to keep your video-streaming ON? Or OFF? You'll not be disappointed!  
- [x] **Surprise Element**: Chat with your friends while in the meeting. All aboard! 🎇:
- [x] **Security**: Ensures that your unique room is safe from intrusion. 
- [x] **Leave Meeting** 👩‍💻 : Leave the room at any given time you want!

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Table of Contents
- Product Description
- Methodology and Principles
- Languages and Technology used
- User Journey
- Notable Features
- Code Performance and Optimisation
- Frameworks used
- Future Improvements/Integrations
- External Questions
- References
- Support

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Product Description

### Microsoft Teams
The global workforce underwent a shocking and rapid switch to remote work during the COVID-19 pandemic. But that shift was never going to be temporary. The pandemic only accelerated a trend towards flex working that was well underway in 2019. The expected change posed a big question: How will workers collaborate when they're dispersed and constantly moving?
Cut back to today, the answer is Microsoft Teams. A collaboration platform that unifies chat, voice, video and file sharing as part of the Microsoft Office 365. It is currently designed to be used by local, remote and distributed work groups - anyone in any company, really! 🌃

<a href="url"><img src = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/220350iAB12F9D09E4FB916/image-size/large?v=v2&px=999" align = "center"></a>
[Img Source](https://www.zdnet.com/article/microsoft-teams-is-now-at-145-million-daily-active-users/)

Some of the notable features of Microsoft Teams that makes it stand out from other collaboration software 🌠:
- [x] **Teams and Channels**
- [x] **Conversations within Channels and Teams**
- [x] **A Chat Feature**
- [x] **Document Storage in SharePoint**
- [x] **Online video calling and screen sharing**
- [x] **Audio Conferencing**
- [x] **Full telephony**    


----------------------------------------------------------------------
# Methodology and Principles  
----------------------------------------------------------------------
### Agile Development Methodology 📆:
The entire workflow of the web application was deployed using the principles of agile methodology, where iterative development was followed for the implemented features and the requirements and solutions evolved with the growing feedback and usage. The entire duration of the development was divided by me into 3 primary sprints where each lasted for almost a week:
* **Sprint-1** : The duration of this entire sprint lasted a week where I primarily worked on designing my Product Requirements Document (PRD) and the UI/UX of the web application for various interfaces.
* **Sprint-2** : The duration of this sprint encompassed a week again where I started developing my minimal viable requirements (**Connecting two participants via meeting**) while tested and assimilated the code into my previously designed code segments.
* **Sprint-3** : Finally, during the last week of the sprint, I worked on the additional features of my product encompassing the feedback from previous sprints and adopted a CI/CD and TDD Approach. With the developer feedback at every stage, I build the test and then developed functionality until the code passed the test. Each time, when I made a new addition to the code, its test was added to the suite of tests that are run when I built the integrated work. This ensured that new additions don’t break the functioning work that came before them. 

<a href="url"><img src = "https://qph.fs.quoracdn.net/main-qimg-579cf28b15fdecacc7ac8ee4b6fde68c" align = "center" length = "1000" width = "1000" ></a>
[Img Source](https://www.quora.com/What-is-the-typical-design-process-in-agile-development)


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Languages Used
**Web Application Framework** - Express.js  
**Library used**- PeerJS (WebRTC)  
**Frontend**- HTML, CSS, JavaScript, EJS, Node.js, websockets, WebRTC, Material Design   

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Supporting Documentation
- [Figma Designs and Prototypes](https://www.figma.com/file/puvOiVDJUYGZPa3HJlJ81u/Microsoft-Teams-Clone-UI%2FUX?node-id=0%3A1)
- [Video Demonstration of the Project](https://youtu.be/H4SvB4KLa2o)
- [Agile Scrum Methodology](https://microsoft-teams-clone-project.atlassian.net/wiki/spaces/MS/pages/131221/Microsoft+Teams+Clone)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# User Journey

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 1. Types of Users 💻
### General User / Participant 👨‍🦱
He/she refers to the participant in the meeting invited via a URL. They can view video-streams of other participants, view the canvas, have the ability to mute/unmute themselves and participate in the chat messages. They can be converted into a controller by the administrator of the meeting.

### Administrator / Controller 🙋‍♀️
He/she is the creator of the unique room and known as the administrator of that particular room. They have the general admin powers like muting/unmuting themselves as well as other users, granting control to other participants and ending the meeting.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2. User Flow Journey and Navigation
The user flow journey designed on Figma, presents a clear navigation, understandable labelling, links and with well-labelled and consistent CTAs (Call-To-Action). It encompasses the complete flow starting from the landing page for the user till they are present in the meeting with other participants to chat, collaborate, etc.

### Landing Page 
When the user receives the link, he/she is directed to the main landing page either to join or start a meeting of their own. It caters to the idea of the application being free hence potentially leads to more user engagement and retention ratio. The UI/UX was designed keeping in mind the current colour palette of Microsoft Teams.

![alt text](https://user-images.githubusercontent.com/72864182/125263925-0c04d000-e321-11eb-9e7f-f9abf691a9a7.png "Landing Page")  

### Video Conferencing Interface
This particular protoype depicts the video conferencing interface between mutiple participants on the website application.The peculiar features that can be pointed out from the wireframe are: Mute button, Video On/Off Button, Screen Sharing feature, Add more participants button, In-built chat feature and Leave Meeting button.The one particular user who is speaking in a required moment will be displayed on the front interface of all the participants and the other participants present will be display in the grid below.

![alt text](https://user-images.githubusercontent.com/72864182/125287256-5181c700-e33a-11eb-9dd9-b993302d6ec1.png "Video Conference") 

### Screen Sharing
This particular protoype depicts the screen sharing interface between mutiple participants on the website application. The peculiar features that can be pointed out from the wireframe are: Mute button, Video On/Off Button, Screen Sharing feature, Add more participants button, In-built chat feature and Exit Meeting button.

![alt text](https://user-images.githubusercontent.com/72864182/125288597-f3ee7a00-e33b-11eb-99b5-78ee1c81d525.png "Screen Sharing") 

### Chat Feature
This particular protoype depicts the video conferencing along with the in-built chat feature for the participants.The vital features that can be pointed out from the wireframe are: Mute button, Video On/Off Button, Screen Sharing feature, Add more participants button, In-built chat feature and Exit Meeting button with the Chat feature as ON. The in-built chat feature depicts the streamline of texts between different participants, the active participants, time at which a particular text is sent, etc.

![alt text](https://user-images.githubusercontent.com/72864182/125288908-45970480-e33c-11eb-9d48-df7240017dde.png "Chat Feature") 

[Link to Figma file](https://www.figma.com/file/puvOiVDJUYGZPa3HJlJ81u/Microsoft-Teams-Clone-UI%2FUX?node-id=0%3A1)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Important Features

## 1. Multiple Participants 👪
Allows the flexibility to add as many participants as you like. All you have to do is share the unique URL!
![image](https://user-images.githubusercontent.com/72864182/125295441-dbce2900-e342-11eb-9dd3-b99d9aa19d83.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2. Mute/Unmute 🎤
Total flexbility to mute/unmute yourself within the meeting!
![image](https://user-images.githubusercontent.com/72864182/125296265-bc83cb80-e343-11eb-8e49-a96a851ca82f.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Video ON/OFF 📹
Want to join a meeting but keep the video OFF? I got you covered!
![image](https://user-images.githubusercontent.com/72864182/125298485-cd354100-e345-11eb-9d36-ba99048552db.png)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## In-Built Chat 💻
Now that you have successfully landed in the meeting, how do you communicate with your peers? Well, the chat feature is here to help you!
![image](https://user-images.githubusercontent.com/72864182/125300261-7a5c8900-e347-11eb-8b1b-a96bb823989d.png)

Visit ['Engage'](https://engage-microsoft-teams-clone.herokuapp.com/) to access the deployed application.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Code Performance and Optimisation ➕
The performance of the video conferencing web-application is calculated and optimised using [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- The following metrics are obtained for the hosted applications and optimisation techniques are adopted post that. 

![image](https://user-images.githubusercontent.com/72864182/125499007-d2782a96-e89f-482d-b98e-5437f2164955.png)
![image](https://user-images.githubusercontent.com/72864182/125499105-01bd0884-432b-4879-8af4-3b630fcbfe7b.png)

## Optimisation
The following processes were adopted to efficiently increase the code performance and delivery of the application:
- ✔️ **Eliminate render blocking resources** : Since some resources were blocking the first paint of my application, I assimilated delivering critical JS/CSS inline and deferring all non-critical JS/styles.
- ✔️ **Uniform text** : Leveraged the font-display CSS feature to ensure text is user-visible while webfonts are loading.
- ✔️ **Chaining Requests** : Considering the length of chains, I reduced the download size of resources, and deferred the download of unnecessary resources to improve page load.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Frameworks Used 📁

## WebRTC
WebRTC is an open framework for the web that provides browsers and mobile applications with Real-Time Communications (RTC) capabilities without the need of either internal or external plugins. It enables all kinds of real time communications such as audio, video and text between users by utilizing the browsers. It is a free and provides high quality. The fundamental reason why I opted for WebRTC are:
* **Ease of Use** : Real Time communications are supported without the need for additional applications or plug-ins.
* **Secutity** : WebRTC enforces the usage of encryption for the media.

![alt_text](https://user-images.githubusercontent.com/72864182/125329977-c61d2b80-e363-11eb-9df6-214db88ed60e.png "Flowchart for WebRTC")

## Bootstrap UI:
Bootstrap is a free and open-source front-end library for creating websites and web applications. It contains HTML- and CSS-based design templates for typography, forms,   buttons, navigation and other interface components, as well as optional JavaScript extensions. It aims to ease the development of dynamic websites and web applications. It has been used mainly for creating and proper positioning of elements. 

-------------------------------------------------------------------------

# Future Improvements :dart: 
- Screen Sharing feature 💻
- Record meetings feature ⏺️
- User Registry / Authentication 👦
- Mobile compatibility 📱
- In-App Integrations (Spotify, Microsoft 365, etc) 🎵
- Integrated bot 🤖
- In-Built Calendar Feature 📆
- Bookmark Conversations 🔖

-----------------------------------
# External Questions ❓:
**Can external participants join a meeting?** 
- Absolutely! In fact, you can share the same link with all meeting participants, making it easier to get everyone you need on the call.

**Do I need to install or pay anything?**
- Zero, zip, zilch, nada! The application is totally free and you don't need to install anything for it!

-----------------------------------
# References 📚:
- [Tutorial on WebRTC - I](https://webrtc.org/)
- [Tutorial on WebRTC - II](https://www.html5rocks.com/en/tutorials/webrtc/basics/)
- [Introduction to Node.js](https://medium.com/jspoint/introduction-to-node-js-a-beginners-guide-to-node-js-and-npm-eca9c408f9fe)
- [Client-Server Architecture for Chat Application](https://yellow.systems/blog/guide-to-the-chat-architecture)
- [Ngrok](https://ngrok.com/product)
- [Frontend-I](https://uxplanet.org/top-ui-design-principles-to-keep-in-mind-bfb3ad8790c6)  
- [Frontend-II](https://medium.com/@esharanjit/ui-ux-case-study-microsoft-teams-dbe25e27d969)  

-----------------------------------
# Support 🤗:
For any queries or problems that might arise with regards to the project, the author can be contacted at manikajain11@gmail.com 
