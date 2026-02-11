const app = document.getElementById("app");

function setScreen(title, body, buttons) {
  let html = `<h2>${title}</h2><p>${body}</p>`;

  buttons.forEach(btn => {
    html += `<button onclick="${btn.action}">${btn.label}</button>`;
  });

  app.innerHTML = html;
}

function showMainMenu() {
  setScreen(
    "Double Counter Support",
    "What are you having trouble with?",
    [
      { label: "Alt detection", action: "alt_intro()" },
      { label: "VPN / Proxy", action: "alert('Not added yet')" },
      { label: "Setup", action: "alert('Not added yet')" }
    ]
  );
}

function alt_intro() {
  setScreen(
    "Alt detection",
    "This applies if you saw any of the following messages:<br><br>" +
    "• You were automatically banned by Double Counter for: alt account<br>" +
    "• You already have an account in this server<br>" +
    "• You were detected as an ALT of another account<br>" +
    "• You already have an account verified with Double Counter",
    [
      { label: "Yes, I saw one of these", action: "alt_meaning()" },
      { label: "No, something else", action: "showMainMenu()" }
    ]
  );
}

function alt_meaning() {
  setScreen(
    "What this means",
    "Your account was linked to another account during verification.",
    [
      { label: "Continue", action: "alt_why()" }
    ]
  );
}

function alt_why() {
  setScreen(
    "Why this happens",
    "Accounts are linked when they share technical data.<br><br>" +
    "This usually happens if:<br>" +
    "• The same device or Wi-Fi was used<br>" +
    "• Someone clicked another person’s verification link<br>" +
    "• Another account verified from the same browser",
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_permanent() {
  setScreen(
    "Can this be removed?",
    "No.<br><br>Once an account is linked, the detection is permanent. " +
    "We cannot edit or reset it.",
    [
      { label: "Continue", action: "alt_lost_account()" }
    ]
  );
}

function alt_lost_account() {
  setScreen(
    "Important",
    "If your original verified account was banned, deleted, hacked, " +
    "or is no longer accessible, you cannot verify again with a new account.",
    [
      { label: "Continue", action: "alt_final()" }
    ]
  );
}

function alt_final() {
  setScreen(
    "Who can help?",
    "Only the staff of the server you are trying to join can decide to allow your account.<br><br>" +
    "Double Counter cannot:<br>" +
    "• Remove alt detections<br>" +
    "• Override server bans<br>" +
    "• Manually verify users",
    [
      { label: "Go back to start", action: "showMainMenu()" }
    ]
  );
}

showMainMenu();

