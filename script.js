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
      { label: "Continue", action: "alt_account_status()" }
    ]
  );
}

function alt_account_status() {
  setScreen(
    "Your situation",
    `
    <p>Which of the following best describes your situation?</p>
    `,
    [
      { label: "Account belongs to me", action: "alt_owned_account()" },
      { label: "Account was deleted, lost, or banned", action: "alt_deleted_account()" },
      { label: "I was banned instantly", action: "alt_instant_ban()" },
      { label: "Account was locked from failed attempts", action: "alt_locked_account()" }
    ]
  );
}

function alt_owned_account() {
  setScreen(
    "Account belongs to you",
    `
    <p>Your account is marked as an alternate and cannot be globally verified.</p>

    <p>
      Double Counter links accounts across servers to prevent evasion of moderation actions.
      This status cannot be changed by Double Counter for security and transparency reasons.
    </p>

    <p>
      Data is retained according to our Privacy Policy.
      You must contact the staff of the server you wish to join using their support or ticket system.
    </p>

    <p>
      If your other account is still accessible, you may use it to contact server staff.
      Different servers may handle this differently.
    </p>
    `,
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_owned_account() {
  setScreen(
    "Account belongs to you",
    `
    <p>Your account is marked as an alternate and cannot be globally verified.</p>

    <p>
      Double Counter links accounts across servers to prevent evasion of moderation actions.
      This status cannot be changed by Double Counter for security and transparency reasons.
    </p>

    <p>
      Data is retained according to our Privacy Policy.
      You must contact the staff of the server you wish to join using their support or ticket system.
    </p>

    <p>
      If your other account is still accessible, you may use it to contact server staff.
      Different servers may handle this differently.
    </p>
    `,
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_deleted_account() {
  setScreen(
    "Previous account unavailable",
    `
    <p>
      If your previous account was deleted, disabled, or banned,
      you cannot verify a new account in servers using Double Counter.
    </p>

    <p>
      This prevents circumvention of bans or other moderation actions.
      Double Counter cannot assist with this.
    </p>

    <p>
      Contact the staff of the server you are trying to join.
      Manual verification is entirely at their discretion.
    </p>

    <p>
      You may find the following Discord resources helpful:
    </p>

    <ul>
      <li><a href="https://support.discord.com/hc/en-us/articles/115003114091" target="_blank">Account Recovery</a></li>
      <li><a href="https://support.discord.com/hc/en-us/articles/218410947" target="_blank">Password Recovery</a></li>
    </ul>
    `,
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_instant_ban() {
  setScreen(
    "Instant ban after verification",
    `
    <p>
      You were likely banned because the server has <strong>Alt Auto-Ban</strong> enabled.
    </p>

    <p>For the ban to be lifted, the server must:</p>

    <ol>
      <li>Disable Alt Auto-Ban</li>
      <li>Remove you from the ban list</li>
      <li>Allow you to rejoin the server</li>
      <li>Manually verify you (do not attempt verification again)</li>
      <li>Re-enable Alt Auto-Ban if desired</li>
    </ol>

    <p>
      If the server chooses not to complete these steps,
      the ban cannot be lifted.
    </p>

    <p>
      Double Counter cannot perform any of these actions.
    </p>
    `,
    [
      { label: "Continue", action: "alt_permanent()" }
    ]
  );
}

function alt_locked_account() {
  setScreen(
    "Account temporarily locked",
    `
    <p>
      If your account was locked due to failed attempts,
      it will automatically unlock after approximately 30 minutes.
    </p>

    <p>
      However, the issue that caused the lock will still exist.
      Attempting to re-verify will result in the same outcome.
    </p>
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

