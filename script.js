const logs = [];

function generateLog() {
  const blockNumber = 450 + logs.length;
  const log = {
    time: new Date().toLocaleTimeString(),
    event: `Block #${blockNumber} Recorded`,
    hash: '0x' + Math.random().toString(16).substr(2, 10).toUpperCase()
  };
  logs.unshift(log); // Add to top
  if (logs.length > 10) logs.pop(); // Limit to 10 logs
  renderLogs();
}

function renderLogs() {
  const container = document.getElementById('blockchainLogs');
  container.innerHTML = '';
  logs.forEach(log => {
    const div = document.createElement('div');
    div.classList.add('logItem');
    div.textContent = `[${log.time}] ${log.event} — ${log.hash}`;
    container.appendChild(div);
  });
}

function showPopup() {
  document.getElementById('popup').classList.remove('hidden');
  generateLog();
}

function hidePopup() {
  document.getElementById('popup').classList.add('hidden');
}

// Activate button
document.getElementById('activateBtn').addEventListener('click', () => {
  showPopup();
});

// Close button
document.getElementById('closeBtn').addEventListener('click', () => {
  hidePopup();
});

// ESC key to close popup
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hidePopup();
  }
});

// Simulate real-time logs every 6 seconds if popup is open
setInterval(() => {
  const popup = document.getElementById('popup');
  if (!popup.classList.contains('hidden')) {
    generateLog();
  }
}, 6000);
