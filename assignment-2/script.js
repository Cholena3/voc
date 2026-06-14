// ===== DOM Elements =====
const ingredientsToggle = document.getElementById('ingredientsToggle');
const ingredientsList = document.getElementById('ingredientsList');
const stepsToggle = document.getElementById('stepsToggle');
const stepsList = document.getElementById('stepsList');
const startCookingBtn = document.getElementById('startCookingBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const resetBtn = document.getElementById('resetBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const timerContainer = document.getElementById('timerContainer');
const timerDisplay = document.getElementById('timerDisplay');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');

// ===== State =====
let currentStep = -1;
let totalSteps = 0;
let timerInterval = null;
let timerSeconds = 55 * 60; // 55 minutes total
let timerPaused = false;

// ===== Toggle Ingredients Visibility =====
ingredientsToggle.addEventListener('click', function () {
    const btn = this.querySelector('.toggle-btn');
    ingredientsList.classList.toggle('hidden');

    if (ingredientsList.classList.contains('hidden')) {
        btn.textContent = 'Show';
    } else {
        btn.textContent = 'Hide';
    }
});

// ===== Toggle Steps Visibility =====
stepsToggle.addEventListener('click', function () {
    const btn = this.querySelector('.toggle-btn');
    stepsList.classList.toggle('hidden');

    if (stepsList.classList.contains('hidden')) {
        btn.textContent = 'Show';
    } else {
        btn.textContent = 'Hide';
    }
});

// ===== Start Cooking =====
startCookingBtn.addEventListener('click', function () {
    // Show steps if hidden
    if (stepsList.classList.contains('hidden')) {
        stepsList.classList.remove('hidden');
        stepsToggle.querySelector('.toggle-btn').textContent = 'Hide';
    }

    // Show ingredients if hidden
    if (ingredientsList.classList.contains('hidden')) {
        ingredientsList.classList.remove('hidden');
        ingredientsToggle.querySelector('.toggle-btn').textContent = 'Hide';
    }

    // Initialize steps
    const steps = stepsList.querySelectorAll('li');
    totalSteps = steps.length;
    currentStep = 0;

    // Highlight first step
    highlightStep(currentStep);

    // Show/hide buttons
    startCookingBtn.classList.add('hidden');
    nextStepBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

    // Show and start timer (Bonus)
    timerContainer.classList.remove('hidden');
    startTimer();

    // Update progress
    updateProgress();
});

// ===== Next Step =====
nextStepBtn.addEventListener('click', function () {
    const steps = stepsList.querySelectorAll('li');

    if (currentStep < totalSteps - 1) {
        // Mark current as completed
        steps[currentStep].classList.remove('active-step');
        steps[currentStep].classList.add('completed-step');

        // Move to next step
        currentStep++;
        highlightStep(currentStep);
        updateProgress();
    } else {
        // Last step completed
        steps[currentStep].classList.remove('active-step');
        steps[currentStep].classList.add('completed-step');
        currentStep++;
        updateProgress();

        // Change button text
        nextStepBtn.textContent = 'Done!';
        nextStepBtn.disabled = true;
        nextStepBtn.style.opacity = '0.6';

        // Stop timer
        stopTimer();
    }
});

// ===== Reset =====
resetBtn.addEventListener('click', function () {
    const steps = stepsList.querySelectorAll('li');

    // Remove all step classes
    steps.forEach(function (step) {
        step.classList.remove('active-step', 'completed-step');
    });

    // Reset state
    currentStep = -1;

    // Reset buttons
    startCookingBtn.classList.remove('hidden');
    nextStepBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
    nextStepBtn.textContent = 'Next Step';
    nextStepBtn.disabled = false;
    nextStepBtn.style.opacity = '1';

    // Reset progress
    progressFill.style.width = '0%';
    progressText.textContent = '0%';

    // Reset and hide timer
    stopTimer();
    timerSeconds = 55 * 60;
    timerDisplay.textContent = '55:00';
    timerContainer.classList.add('hidden');
    pauseTimerBtn.textContent = 'Pause';
    timerPaused = false;
});

// ===== Highlight Step =====
function highlightStep(index) {
    const steps = stepsList.querySelectorAll('li');
    if (index >= 0 && index < steps.length) {
        steps[index].classList.add('active-step');

        // Scroll step into view
        steps[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ===== Update Progress Bar =====
function updateProgress() {
    const percentage = Math.round((currentStep / totalSteps) * 100);
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
}

// ===== Timer Functions (Bonus) =====
function startTimer() {
    stopTimer(); // Clear any existing interval
    timerPaused = false;
    pauseTimerBtn.textContent = 'Pause';

    timerInterval = setInterval(function () {
        if (!timerPaused) {
            timerSeconds--;

            if (timerSeconds <= 0) {
                stopTimer();
                timerDisplay.textContent = '00:00';
                alert('Time is up! Your chocolate cake should be ready!');
                return;
            }

            updateTimerDisplay();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent =
        String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

// Pause/Resume timer
pauseTimerBtn.addEventListener('click', function () {
    timerPaused = !timerPaused;
    this.textContent = timerPaused ? 'Resume' : 'Pause';
});

// Reset timer
resetTimerBtn.addEventListener('click', function () {
    timerSeconds = 55 * 60;
    updateTimerDisplay();
    timerPaused = false;
    pauseTimerBtn.textContent = 'Pause';
});
