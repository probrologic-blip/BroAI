// ======================
// BroAI Script v1.0
// ======================

// Login Check
if (
  location.pathname.includes("dashboard") ||
  location.pathname.includes("ai-chat") ||
  location.pathname.includes("ai-images") ||
  location.pathname.includes("prompt-store") ||
  location.pathname.includes("youtube-tools") ||
  location.pathname.includes("profile") ||
  location.pathname.includes("settings")
) {
  if (localStorage.getItem("broai_user") !== "loggedin") {
    window.location.href = "login.html";
  }
}

// Credits
let credits = parseInt(localStorage.getItem("broai_credits") || 100);

function updateCredits() {
  localStorage.setItem("broai_credits", credits);

  let creditBox = document.getElementById("creditCount");

  if (creditBox) {
    creditBox.innerText = credits;
  }
}

updateCredits();

// Logout
function logoutUser() {
  localStorage.removeItem("broai_user");
  window.location.href = "index.html";
}

// Activity
function saveActivity(text) {

  localStorage.setItem("broai_activity", text);

  let box = document.getElementById("activityBox");

  if (box) {
    box.innerText = text;
  }

}

// Load Activity
window.onload = function () {

  updateCredits();

  let activity =
    localStorage.getItem("broai_activity");

  if (activity) {

    let box =
      document.getElementById("activityBox");

    if (box) {
      box.innerText = activity;
    }

  }

};

// Premium Prompt
function unlockPrompt() {

  alert("Premium Version Coming Soon 🚀");

}

// Profile
function saveProfile() {

  let name =
    document.getElementById("name");

  let email =
    document.getElementById("email");

  if (name)
    localStorage.setItem("broai_name", name.value);

  if (email)
    localStorage.setItem("broai_email", email.value);

  alert("Profile Saved");

}

// Load Profile
window.addEventListener("load", () => {

  let name =
    document.getElementById("name");

  let email =
    document.getElementById("email");

  if (name)
    name.value =
      localStorage.getItem("broai_name") || "";

  if (email)
    email.value =
      localStorage.getItem("broai_email") || "";

});
// ======================
// AI CHAT
// ======================

function sendMessage() {

let input = document.getElementById("userInput");
let chatBox = document.getElementById("chat-box");

if(!input || !chatBox) return;

if(input.value.trim() === ""){
return;
}

if(credits <= 0){
alert("No Credits Remaining");
return;
}

credits--;

updateCredits();

saveActivity("🤖 AI Chat Used");

let userMsg = document.createElement("div");
userMsg.className="user-message";
userMsg.innerText=input.value;
chatBox.appendChild(userMsg);

let botMsg=document.createElement("div");
botMsg.className="bot-message";
botMsg.className="loading";

botMsg.innerHTML="🤖 BroAI is thinking...";
chatBox.appendChild(botMsg);

chatBox.scrollTop=chatBox.scrollHeight;

setTimeout(function(){

botMsg.className="bot-message";

typeReply(
botMsg,
"🤖 Demo Response: " + input.value
);

},700);

input.value="";

}

// Enter Key

document.addEventListener("DOMContentLoaded",()=>{

let input=document.getElementById("userInput");

if(input){

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

}

});


// ======================
// AI IMAGE
// ======================

function generateImage(){

let prompt=document.getElementById("promptInput");

if(!prompt) return;

if(prompt.value.trim()==""){

alert("Please enter prompt");

return;

}

if(credits<=0){

alert("No Credits Remaining");

return;

}

credits--;

updateCredits();

saveActivity("🎨 Image Generated");

let img=document.getElementById("resultImage");

img.src="https://picsum.photos/800/500?random="+Math.random();

}
// AI Typing Effect

function typeReply(element,text){

let i=0;

element.innerHTML="";

let timer=setInterval(function(){

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

}

},20);

}
