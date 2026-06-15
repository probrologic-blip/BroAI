function sendMsg() {
  let input = document.getElementById("input");
  let text = input.value;

  if(text === "") return;

  let chatBox = document.getElementById("chatBox");

  // USER MSG
  let userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = text;
  chatBox.appendChild(userMsg);

  // BOT REPLY (simple demo AI)
  let botMsg = document.createElement("div");
  botMsg.className = "msg bot";

  setTimeout(() => {
    botMsg.innerText = "BroAI: I received -> " + text;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}

function newChat() {
  document.getElementById("chatBox").innerHTML =
    '<div class="msg bot">New chat started 🚀</div>';
}