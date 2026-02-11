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
      { label: "Alt Detection", action: "alt_intro()" },
      { label: "VPN Intrusion", action: "vpn_intro()" },
      { label: "Crawlers are not allowed", action: "vpn_crawlers()" },
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
    <p> If you see any of the following messages, then it's an Alt Detection:</p>
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
    <p>Your account is marked as an alt and cannot be globally verified.</p>

    <p>
      Most servers that use Double Counter use the Global Detections mode, which links accounts across servers to prevent evasion of issued punishments. Double Counter staff can NOT help you with this or change this link for security and transparency reasons.
    </p>

    <p>
      Data is retained according to the Privacy Policy shown to you at the time of verification. You need to contact the staff team of the server you are trying to verify in using their modmail/ticket system or by DMing their staff, depending on the server. Double Counter staff have neither the ability nor the authority to intervene on how other servers are run.
    </p>

    <p>
      If your other account (the main) is still accessible, you may use it to contact server staff and have it handled at their discretion.
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
      If your previous account was deleted, disabled, or banned, you cannot verify a new account on servers using Double Counter's Global Detections mode.
    </p>

    <p>
      This prevents malicious actors from circumventing bans or other punishments Double Counter staff can NOT help you with this or change this link for security and transparency reasons.
    </p>

    <p>
      You need to contact the staff team of the server you are trying to verify in using their modmail/ticket system or by DMing their staff, depending on the server. Double Counter staff have neither the ability nor the authority to intervene in how other servers are run.
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

    <p>For you to be able to verify, the server must:</p>

    <ol>
      <li>Disable Alt Auto-Ban</li>
      <li>Remove you from the ban list</li>
      <li>Allow you to rejoin the server</li>
      <li>Manually verify you (do not attempt verification again)</li>
      <li>Re-enable Alt Auto-Ban (optional)</li>
    </ol>

    <p>
      If the server decides not to perform these steps, then there is no solution forward.
    </p>

    <p>
     Double Counter staff have neither the ability nor the authority to intervene in how other servers are run and as such Double Counter cannot perform any of these actions.
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
      If your account was locked due to failed attempts, it will automatically unlock after approximately 30 minutes.
    </p>

    <p>
      However, the issue that caused the lock will still exist. Attempting to re-verify will result in the same outcome.
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
    <p>We cannot edit or reset it. Making a data deletion request will NOT change alt detections</p>
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
      If your original verified account was banned, deleted, hacked, or is no longer accessible, you cannot verify again with a new account.
    </p>

    <p>
      This prevents malicious actors from circumventing bans or other punishments Double Counter staff can NOT help you with this or change this link for security and transparency reasons.
    </p>

    <p>
      You need to contact the staff team of the server you are trying to verify in using their modmail/ticket system or by DMing their staff, depending on the server. Double Counter staff have neither the ability nor the authority to intervene in how other servers are run.
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
    <p>Double Counter staff cannot remove alt detections, unban users or manually verify them</p>
    `,
    [
      { label: "Go back to start", action: "showMainMenu()" }
    ]
  );
}

function vpn_intro() {
  setScreen(
    "VPN Intrusion",
    `
    <p>This applies if you saw messages such as:</p>
    <ul>
      <li>You have been blocked for using a VPN</li>
      <li>You’re using a VPN</li>
      <li>VPNs are not allowed in this server</li>
    </ul>
    `,
    [
      { label: "Yes, I saw one of these", action: "vpn_why()" },
      { label: "No, something else", action: "showMainMenu()" }
    ]
  );
}

function vpn_why() {
  setScreen(
    "Why does this happens",
    `
    <p>
      Double Counter blocks connections that appear to come from VPNs, proxies, CDNs, or other services that hide or mask your real connection.
    </p>

    <p>
      This prevents abuse, ban evasion, and certain alt-account evasion techniques.
    </p>
    `,
    [
      { label: "Continue", action: "vpn_common_triggers()" }
    ]
  );
}

function vpn_common_triggers() {
  setScreen(
    "Common reasons for a VPN block",
    `
    <p>You may see this block even if you are not intentionally using a VPN.</p>

    <ul>
      <li>Ad blockers or privacy extensions that modify network requests</li>
      <li>Apple settings such as Hide IP Address or iCloud Private Relay</li>
      <li>Privacy-focused browsers like Brave or Opera</li>
      <li>Shared or proxy IPs provided by your ISP</li>
    </ul>
    `,
    [
      { label: "I saw 'Crawlers are not allowed'", action: "vpn_crawlers()" },
      { label: "Continue", action: "vpn_fix()" }
    ]
  );
}

function vpn_crawlers() {
  setScreen(
    "Crawlers are not allowed",
    `
    <p>This block is commonly triggered by:</p>

    <ul>
      <li>Using Discord’s in-app browser on mobile</li>
      <li>Cloudflare WARP, DNS modifiers, or similar tools</li>
      <li>Browser extensions or proxy settings that alter your fingerprint</li>
    </ul>

    <p>
      Open the verification link in your device’s default browser and disable the listed tools temporarily, then retry verification.
    </p>
    `,
    [
      { label: "Continue", action: "vpn_fix()" }
    ]
  );
}

function vpn_fix() {
  setScreen(
    "What you can do",
    `
    <ul>
      <li>Disable VPNs, proxies, DNS modifiers, and privacy tools</li>
      <li>Turn off ad blockers and network-altering extensions</li>
      <li>On iPhone/iPad: disable Hide IP and iCloud Private Relay</li>
      <li>Use a standard browser like Chrome or Edge</li>
      <li>Retry verification, then re-enable tools if desired</li>
    </ul>
    `,
    [
      { label: "Continue", action: "vpn_final()" }
    ]
  );
}

function vpn_final() {
  setScreen(
    "Still blocked?",
    `
    <p>
      If you still cannot verify after disabling the triggering settings,
      contact the staff of the server you are trying to join.
    </p>

    <p>
      Some servers may offer manual verification, but this is entirely
      at their discretion.
    </p>

    <p>
      Double Counter cannot bypass VPN blocks or override server decisions.
    </p>
    `,
    [
      { label: "Go back to start", action: "showMainMenu()" }
    ]
  );
}


/* IT'S ALIVE!!!! IT'S ALIVE!!!! */

showMainMenu();


