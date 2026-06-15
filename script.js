const API_KEY = "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";
async function sendMsg() {
  let input = document.getElementById("input");
  let text = input.value.trim();

  if (text === "") return;

  let chatBox = document.getElementById("chatBox");

  // USER MESSAGE
  let userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = text;
  chatBox.appendChild(userMsg);

  input.value = "";

  // BOT MESSAGE
  let botMsg = document.createElement("div");
  botMsg.className = "msg bot";
  botMsg.innerText = "Thinking...";
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    let res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
headers: {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json",
  "HTTP-Referer": window.location.href,
  "X-Title": "BroAI"
    }
      body: JSON.stringify({
      model: "mistralai/mixtral-8x7b-instruct",
        messages: [
          { role: "user", content: text }
        ]
      })
    });

    let data = await res.json();

    console.log(data);

    if (data.error) {
      botMsg.innerText = "Error: " + data.error.message;
    } else {
      botMsg.innerText = data.choices[0].message.content;
    }

  } catch (err) {
    botMsg.innerText = "Network error. Check API key or internet.";
  }
}

function newChat() {
  document.getElementById("chatBox").innerHTML =
    '<div class="msg bot">New chat started 🚀</div>';
}
