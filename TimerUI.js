// Timer UI
export default function TimerUI(timer) {
  return `
    <div class="timer-display-container">
      <div id="timer-display" class="timer-display">00:00</div>
      <div class="timer-controls">
        <button id="start-btn" class="btn btn-primary" onclick="window.timerInstance.start()">
          ▶️ Start
        </button>
        <button id="pause-btn" class="btn btn-secondary" onclick="window.timerInstance.pause()" style="display: none;">
          ⏸️ Pause
        </button>
        <button class="btn btn-secondary" onclick="window.timerInstance.reset()">
          🔄 Reset
        </button>
      </div>
    </div>
  `;
}

// Store timer instance globally for onclick handlers
window.timerInstance = null;
