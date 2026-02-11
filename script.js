const app = document.getElementById("app");

function showStart() {
  app.innerHTML = `
    <h2>What are you having trouble with?</h2>
    <button onclick="showAlt()">Alt detection</button>
    <button onclick="showVPN()">VPN / Proxy</button>
    <button onclick="showSetup()">Setup</button>
  `;
}

function showAlt() {
  app.innerHTML = `
    <h2>Alt detection issue</h2>
    <p>If multiple accounts share the same device or network, they may be flagged.</p>
    <button onclick="showStart()">Go back</button>
  `;
}

function showVPN() {
  app.innerHTML = `
    <h2>VPN / Proxy detected</h2>
    <p>VPNs and proxies are blocked by Double Counter.</p>
    <button onclick="showStart()">Go back</button>
  `;
}

function showSetup() {
  app.innerHTML = `
    <h2>Setup issue</h2>
    <p>Make sure the bot has the required permissions.</p>
    <button onclick="showStart()">Go back</button>
  `;
}

showStart();
