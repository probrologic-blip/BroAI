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
}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
const API_KEY = " ";

async function sendMsg() {
  let input = document.getElementById("input");
  let text = input.value;

  if (!text) return;

  let chatBox = document.getElementById("chatBox");

  let userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = text;
  chatBox.appendChild(userMsg);

  input.value = "";

  let botMsg = document.createElement("div");
  botMsg.className = "msg bot";
  botMsg.innerText = "Thinking...";
  chatBox.appendChild(botMsg);

  let res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: text }]
    })
  });

  let data = await res.json();

  botMsg.innerText = data.choices[0].message.content;
}
