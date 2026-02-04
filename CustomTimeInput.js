// Custom time input
export default function CustomTimeInput(timer) {
  return `
    <div class="custom-time-input">
      <label for="custom-minutes">Custom Time:</label>
      <input type="number" id="custom-minutes" min="0" max="99" placeholder="Minutes" />
      <input type="number" id="custom-seconds" min="0" max="59" placeholder="Seconds" />
      <button class="btn btn-primary" onclick="
        const mins = parseInt(document.getElementById('custom-minutes').value) || 0;
        const secs = parseInt(document.getElementById('custom-seconds').value) || 0;
        window.timerInstance.setTime(mins * 60 + secs);
      ">Set</button>
    </div>
  `;
}
