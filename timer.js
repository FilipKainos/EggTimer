// Timer logic
class EggTimer {
  constructor() {
    this.timeRemaining = 0;
    this.duration = 0;
    this.intervalId = null;
    this.isRunning = false;
    this.audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSyAzvLZiTYIGGa87eeeTRAMUKXi8LZiHAU5kdfy0HksBS1yx/DilUA');
  }

  start() {
    if (this.isRunning || this.timeRemaining === 0) return;
    
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.timeRemaining--;
      this.updateDisplay();
      
      if (this.timeRemaining <= 0) {
        this.complete();
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.pause();
    this.timeRemaining = this.duration;
    this.updateDisplay();
  }

  setTime(seconds) {
    this.duration = seconds;
    this.timeRemaining = seconds;
    this.updateDisplay();
  }

  complete() {
    this.pause();
    this.audio.play();
    alert('⏰ Time\'s up! Your eggs are ready!');
  }

  updateDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const displayEl = document.getElementById('timer-display');
    if (displayEl) {
      displayEl.textContent = display;
    }
    
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    if (startBtn) startBtn.style.display = this.isRunning ? 'none' : 'inline-block';
    if (pauseBtn) pauseBtn.style.display = this.isRunning ? 'inline-block' : 'none';
  }
}

export default EggTimer;
