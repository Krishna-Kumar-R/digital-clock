const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const toggleFormatBtn = document.getElementById('toggle-format');
const toggleThemeBtn = document.getElementById('toggle-theme');

let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let ampm = hr >= 12 ? 'PM' : 'AM';

  if (!is24Hour) {
    hr = hr % 12 || 12;
  }

  hoursEl.textContent = hr.toString().padStart(2, '0');
  minutesEl.textContent = min.toString().padStart(2, '0');
  secondsEl.textContent = sec.toString().padStart(2, '0');
  ampmEl.textContent = is24Hour ? '' : ampm;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

function updateFormatButtonText() {
  toggleFormatBtn.textContent = is24Hour
    ? 'Switch 24 to 12h format'
    : 'Switch 12 to 24h format';
}

// Format toggle
toggleFormatBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  updateFormatButtonText();
  updateClock();
});

// Theme toggle
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  updateClock();
});

// Initialize
updateFormatButtonText();
updateClock();
setInterval(updateClock, 1000);
