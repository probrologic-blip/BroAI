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
