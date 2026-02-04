// Preset buttons
export default function PresetButtons(timer) {
  const presets = [
    { label: '🥚 Soft (3 min)', time: 180 },
    { label: '🥚 Medium (6 min)', time: 360 },
    { label: '🥚 Hard (9 min)', time: 540 },
  ];

  return `
    <div class="preset-buttons">
      ${presets.map(preset => `
        <button class="btn btn-preset" onclick="window.timerInstance.setTime(${preset.time})">
          ${preset.label}
        </button>
      `).join('')}
    </div>
  `;
}
