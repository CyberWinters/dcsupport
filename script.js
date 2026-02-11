const app = document.getElementById("app");

function setScreen(title, body, buttons) {
  let html = `<h2>${title}</h2>${body}`;

  buttons.forEach(btn => {
    html += `<button onclick="${btn.action}">${btn.label}</button>`;
  });

  app.innerHTML = html;
}

/* MAIN MENU */

function showMainMenu() {
  setScreen(
    "Double Counter Support",
    `<p>What are you having trouble with?</p>`,
    [
      { label: "Alt detection", action: "alt_intro()" },
      { label: "VPN / Proxy", action: "alert('This flow is not added yet. Please visit the support server: https://discord.gg/doublecounter')" },
      { label: "Setup", action: "alert('This flow is not added yet. Please visit the support server: https://discord.gg/doublecounter')" },
      { label: "Other", action: "alert('This flow is not added yet. Please visit the support server: https://discord.gg/doublecounter')" }
    ]
  );
}

/* ALT DETECTION FLOW */

function alt_intro() {
  setScreen(
    "Alt detection",
    `
    <p>This applies if you saw any of the following messages:</p>
    <ul>
      <li>You were automatically banned by Double Counter for: alt account</li>
      <li>You already have an account in this server</li>
      <li>You were detected as an ALT of another account</li>
      <li>You already have an account verified with Double Counter</li>
    </ul>
    `,
    [
      { label: "Yes, I saw one of these", action: "alt_meaning()" },
      { label: "No, something else", action: "showMainMenu()" }
    ]
  );
}

function alt_meaning() {
  setScreen(
    "What this means",
    `
    <p>Your account was linked to another account during verification.</p>
    `,
    [
      { label: "Continue", action: "alt_why()" }
    ]
  );
}

function alt_why() {
  setScreen(
    "Why this happens",
    `
    <p>Accounts are linked when they share technical data.</p>
    <p>This usually happens if:</p>
    <ul>
      <li>The same device or Wi-Fi was used</li>
      <li>Someone clicked another person’s verification link</li>
      <li>Another account verified from the same browser</li>
    </ul>
    `,
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_permanent() {
  setScreen(
    "Can this be removed?",
    `
    <p><strong>No.</strong></p>
    <p>Once an account is linked, the detection is permanent.</p>
    <p>We cannot edit or reset it.</p>
    `,
    [
      { label: "Continue", action: "alt_lost_account()" }
    ]
  );
}

function alt_lost_account() {
  setScreen(
    "Important",
    `
    <p>
      If your original verified account was banned, deleted, hacked,
      or is no longer accessible, you cannot verify again with a new account.
    </p>
    `,
    [
      { label: "Continue", action: "alt_final()" }
    ]
  );
}

function alt_final() {
  setScreen(
    "Who can help?",
    `
    <p>Only the staff of the server you are trying to join can decide to allow your account.</p>
    <p>Double Counter cannot:</p>
    <ul>
      <li>Remove alt detections</li>
      <li>Override server bans</li>
      <li>Manually verify users</li>
    </ul>
    `,
    [
      { label: "Go back to start", action: "showMainMenu()" }
    ]
  );
}

/* ITS ALIVE!!!! ITS ALIVE!!!! */

showMainMenu();
