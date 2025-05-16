// Sample blockchain logs (can be dynamically updated)
const logs = [
  { time: '10:15:23', event: 'Block #452 Recorded', hash: '0xAB34C9F1A2B3C4D5E6F' },
  { time: '10:16:01', event: 'Block #453 Recorded', hash: '0xDE91F8B7C4D3E2F1A0B' },
  { time: '10:17:45', event: 'Block #454 Recorded', hash: '0x7F4AC9E8B2D1C3E6F5A' },
];

// Show popup with fade-in animation and render logs
function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('hidden');
  renderLogs();
}

// Hide popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}

// Render blockchain logs dynamically inside popup
function renderLogs() {
  const container = document.getElementById('blockchainLogs');
  container.innerHTML = ''; // Clear previous logs
  logs.forEach(log => {
    const div = document.createElement('div');
    div.classList.add('logItem');
    div.textContent = `[${log.time}] ${log.event} — ${log.hash}`;
    container.appendChild(div);
  });
}

// Setup event listeners
document.getElementById('activateBtn').addEventListener('click', showPopup);
document.getElementById('closeBtn').addEventListener('click', hidePopup);
