let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let enteredTime = null;
  
function startTimer() { 
    timer = setInterval(updateTimer, 1000); 
}
  
function updateTimer() { 
    const timerElement = 
        document.getElementById('timer');
    timerElement.textContent =  
        formatTime(minutes, seconds); 
  
    if (minutes === 0 && seconds === 0) { 
        clearInterval(timer); 
        alert('Time is up! Take a break.'); 
    } else if (!isPaused) { 
        if (seconds > 0) { 
            seconds--; 
        } else { 
            seconds = 59; 
            minutes--; 
        } 
    } 
} 
  
function formatTime(minutes, seconds) { 
    // Pad minutes and seconds to ensure double digits (e.g., 05:07)
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;
    return `${paddedMinutes}:${paddedSeconds}`;
} 
  
function toggleStartResume() { 
    const startResumeButton =
        document.querySelector('.control-buttons button'); 
    isPaused = !isPaused; 
  
    if (isPaused) { 
        clearInterval(timer); 
        startResumeButton.textContent = 'Start'; 
    } else { 
        startTimer(); 
        startResumeButton.textContent = 'Stop'; 
    } 
} 
  
function restartTimer() { 
    clearInterval(timer); 
    minutes = enteredTime || 25; 
    seconds = 0; 
    isPaused = false; 
    const timerElement = 
        document.getElementById('timer'); 
    timerElement.textContent = 
        formatTime(minutes, seconds); 
    const startResumeButton = 
        document.querySelector('.control-buttons button'); 
    startResumeButton.textContent = 'Stop'; 
    startTimer(); 
} 
  
function chooseTime() { 
    const newTime = prompt('Enter new time in minutes:'); 
    if (!isNaN(newTime) && newTime > 0) { 
        enteredTime = parseInt(newTime); 
        minutes = enteredTime; 
        seconds = 0; 
        isPaused = false; 
        const timerElement = 
            document.getElementById('timer'); 
        timerElement.textContent = 
            formatTime(minutes, seconds); 
        clearInterval(timer); 
        const startResumeButton =
            document.querySelector('.control-buttons button'); 
        startResumeButton.textContent = 'Stop'; 
        startTimer(); 
    } else { 
        alert('Invalid input. Please enter'+ 
              ' a valid number greater than 0.'); 
    } 
} 
  
startTimer();