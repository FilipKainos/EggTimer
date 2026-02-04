// Entry point for EggTimer app
import EggTimer from './timer.js';
import TimerUI from './TimerUI.js';
import PresetButtons from './PresetButtons.js';
import CustomTimeInput from './CustomTimeInput.js';

// Initialize app
const app = document.getElementById('app');
const timer = new EggTimer();

// Store timer globally for onclick handlers
window.timerInstance = timer;

// Render UI
app.innerHTML = `
  <div class="timer-container">
    <h1>🥚 Egg Timer</h1>
    ${PresetButtons(timer)}
    ${CustomTimeInput(timer)}
    ${TimerUI(timer)}
  </div>
`;

// Initialize timer display
timer.updateDisplay();
