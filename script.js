const questions = [
    { question: "Would you rather have the ability to fly or be invisible?", optionA: "Have the ability to fly", optionB: "Be invisible" },
    { question: "Would you rather live forever or have the power to bring back one person from the dead?", optionA: "Live forever", optionB: "Bring back one person" },
    { question: "Would you rather be able to read minds or predict the future?", optionA: "Read minds", optionB: "Predict the future" },
    { question: "Would you rather have unlimited money or unlimited time?", optionA: "Unlimited money", optionB: "Unlimited time" },
    { question: "Would you rather never have to sleep or never have to eat?", optionA: "Never sleep", optionB: "Never eat" },
    { question: "Would you rather be famous or be the best friend of someone famous?", optionA: "Be famous", optionB: "Friend of famous person" },
    { question: "Would you rather live in the past or live in the future?", optionA: "Live in the past", optionB: "Live in the future" },
    { question: "Would you rather have super strength or super speed?", optionA: "Super strength", optionB: "Super speed" },
    { question: "Would you rather be able to control fire or control water?", optionA: "Control fire", optionB: "Control water" },
    { question: "Would you rather never be able to lie or never be able to tell the truth?", optionA: "Never lie", optionB: "Never tell truth" },
    { question: "Would you rather have a rewind button or a pause button for your life?", optionA: "Rewind button", optionB: "Pause button" },
    { question: "Would you rather be incredibly intelligent or incredibly attractive?", optionA: "Incredibly intelligent", optionB: "Incredibly attractive" },
    { question: "Would you rather live without music or live without movies?", optionA: "Without music", optionB: "Without movies" },
    { question: "Would you rather have the ability to teleport or time travel?", optionA: "Teleport", optionB: "Time travel" },
    { question: "Would you rather be able to speak all languages or play all instruments?", optionA: "Speak all languages", optionB: "Play all instruments" },
    { question: "Would you rather have a photographic memory or be able to forget anything you want?", optionA: "Photographic memory", optionB: "Selective forgetting" },
    { question: "Would you rather live in a world without problems or live in a world where you rule?", optionA: "World without problems", optionB: "World where I rule" },
    { question: "Would you rather be able to breathe underwater or survive in space?", optionA: "Breathe underwater", optionB: "Survive in space" },
    { question: "Would you rather have wings or have gills?", optionA: "Have wings", optionB: "Have gills" },
    { question: "Would you rather be able to change your appearance or change your personality?", optionA: "Change appearance", optionB: "Change personality" },
    { question: "Would you rather have unlimited battery life on all your devices or have free WiFi wherever you go?", optionA: "Unlimited battery", optionB: "Free WiFi everywhere" },
    { question: "Would you rather be able to talk to animals or speak to plants?", optionA: "Talk to animals", optionB: "Speak to plants" },
    { question: "Would you rather have the power to heal others or the power to bring good luck?", optionA: "Heal others", optionB: "Bring good luck" },
    { question: "Would you rather live in a treehouse or live in a cave?", optionA: "Live in treehouse", optionB: "Live in cave" },
    { question: "Would you rather have x-ray vision or night vision?", optionA: "X-ray vision", optionB: "Night vision" },
    { question: "Would you rather be able to control the weather or control gravity?", optionA: "Control weather", optionB: "Control gravity" },
    { question: "Would you rather have a magic carpet or a time machine?", optionA: "Magic carpet", optionB: "Time machine" },
    { question: "Would you rather be able to duplicate yourself or be able to delete yourself from existence temporarily?", optionA: "Duplicate myself", optionB: "Delete myself temporarily" },
    { question: "Would you rather have taste buds on your fingers or have ears on your knees?", optionA: "Taste buds on fingers", optionB: "Ears on knees" },
    { question: "Would you rather sweat honey or have your tears be chocolate?", optionA: "Sweat honey", optionB: "Chocolate tears" },
    { question: "Would you rather have a head the size of a tennis ball or the size of a watermelon?", optionA: "Tennis ball head", optionB: "Watermelon head" },
    { question: "Would you rather have to hop everywhere or crawl everywhere?", optionA: "Hop everywhere", optionB: "Crawl everywhere" },
    { question: "Would you rather have fingers as long as legs or legs as short as fingers?", optionA: "Fingers as long as legs", optionB: "Legs as short as fingers" },
    { question: "Would you rather speak in rhyme for the rest of your life or sing instead of speaking?", optionA: "Speak in rhyme", optionB: "Sing instead of speak" },
    { question: "Would you rather have a unicorn horn or a monkey tail?", optionA: "Unicorn horn", optionB: "Monkey tail" },
    { question: "Would you rather have to wear clown shoes every day or a clown nose every day?", optionA: "Clown shoes", optionB: "Clown nose" },
    { question: "Would you rather have your only mode of transportation be a donkey or a giraffe?", optionA: "Donkey", optionB: "Giraffe" },
    { question: "Would you rather have to use a public toilet that's extremely dirty or hold it for a whole day?", optionA: "Use dirty toilet", optionB: "Hold it all day" },
    { question: "Would you rather have hiccups for the rest of your life or feel like you need to sneeze but not be able to?", optionA: "Hiccups forever", optionB: "Permanent sneeze feeling" },
    { question: "Would you rather have everything you eat be too salty or too sweet?", optionA: "Too salty", optionB: "Too sweet" },
    { question: "Would you rather live in a house made of cheese or a house made of chocolate?", optionA: "Cheese house", optionB: "Chocolate house" },
    { question: "Would you rather have to wear wet socks every day or never be allowed to wear socks?", optionA: "Wet socks daily", optionB: "Never wear socks" },
    { question: "Would you rather have a pet dragon or a pet unicorn?", optionA: "Pet dragon", optionB: "Pet unicorn" },
    { question: "Would you rather be able to only whisper or only shout?", optionA: "Only whisper", optionB: "Only shout" },
    { question: "Would you rather have to dance every time you heard music or sing along to every song you heard?", optionA: "Dance to all music", optionB: "Sing to all songs" },
    { question: "Would you rather have a permanent unibrow or no eyebrows at all?", optionA: "Permanent unibrow", optionB: "No eyebrows" },
    { question: "Would you rather have to eat everything with chopsticks or eat everything with your hands?", optionA: "Chopsticks only", optionB: "Hands only" },
    { question: "Would you rather have a rewind button for your life or a fast forward button?", optionA: "Rewind button", optionB: "Fast forward button" },
    { question: "Would you rather be stuck in an elevator with wet dogs or three fat men with bad breath?", optionA: "Wet dogs", optionB: "Three fat men" },
    { question: "Would you rather have a missing finger or have an extra toe?", optionA: "Missing finger", optionB: "Extra toe" },
    { question: "Would you rather be completely bald or completely hairy?", optionA: "Completely bald", optionB: "Completely hairy" }
];

let currentQuestionIndex = 0;
let answeredCount = 0;
let selectedOption = null;
let streak = 0;
let bestStreak = 0;
let score = 0;
let timerMode = false;
let timeLeft = 10;
let timerInterval = null;

// Fun facts for different choices
const funFacts = [
    "Did you know? 73% of people choose the first option when they can't decide!",
    "Interesting! Studies show people make better decisions when they trust their gut.",
    "Fun fact: The average person makes 35,000 decisions per day!",
    "Cool choice! Research suggests we're happiest when we have 3-5 options to choose from.",
    "Amazing! Your brain processes this decision in just 0.3 seconds.",
    "Great pick! Psychologists say our choices reveal our core values.",
    "Wow! This type of question activates your brain's reward center.",
    "Nice! Studies show that difficult choices often lead to personal growth."
];

// Sound effects (using Web Audio API for simple beeps)
function playSound(frequency, duration) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        // Fallback for browsers that don't support Web Audio API
        console.log('Sound not supported');
    }
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('option-a-text').textContent = question.optionA;
    document.getElementById('option-b-text').textContent = question.optionB;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
    
    // Update progress bar
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Reset button states
    document.getElementById('option-a').classList.remove('selected');
    document.getElementById('option-b').classList.remove('selected');
    document.getElementById('next-btn').disabled = true;
    document.getElementById('choice-feedback').style.display = 'none';
    selectedOption = null;
    
    // Start timer if in timer mode
    if (timerMode) {
        startTimer();
    }
    
    // Add entrance animation
    const questionContainer = document.querySelector('.question-container');
    questionContainer.style.opacity = '0';
    questionContainer.style.transform = 'translateY(20px)';
    setTimeout(() => {
        questionContainer.style.transition = 'all 0.5s ease';
        questionContainer.style.opacity = '1';
        questionContainer.style.transform = 'translateY(0)';
    }, 100);
}

function selectOption(option) {
    if (selectedOption) return; // Prevent multiple selections
    
    selectedOption = option;
    
    // Stop timer if running
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Play selection sound
    playSound(800, 0.2);
    
    // Remove previous selection
    document.getElementById('option-a').classList.remove('selected');
    document.getElementById('option-b').classList.remove('selected');
    
    // Add selection to chosen option with animation
    const selectedBtn = document.getElementById('option-' + option);
    selectedBtn.classList.add('selected');
    selectedBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        selectedBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Update streak and score
    streak++;
    score += timerMode ? (timeLeft * 10) : 10;
    if (streak > bestStreak) {
        bestStreak = streak;
        document.getElementById('best-streak').textContent = bestStreak;
    }
    
    // Update display
    document.getElementById('streak-count').textContent = streak;
    document.getElementById('score').textContent = score;
    
    // Show fun fact
    showChoiceFeedback();
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Check for milestones
    checkMilestones();
}

function nextQuestion() {
    if (selectedOption) {
        answeredCount++;
        
        // Play next sound
        playSound(600, 0.15);
        
        // Update display
        document.getElementById('answered-count').textContent = answeredCount;
        
        // Move to next question
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            // Game finished
            showGameComplete();
        }
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    answeredCount = 0;
    selectedOption = null;
    streak = 0;
    score = 0;
    
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Reset displays
    document.getElementById('answered-count').textContent = answeredCount;
    document.getElementById('streak-count').textContent = streak;
    document.getElementById('score').textContent = score;
    document.getElementById('progress-fill').style.width = '0%';
    
    // Play restart sound
    playSound(400, 0.3);
    
    loadQuestion();
}

function toggleTimerMode() {
    timerMode = !timerMode;
    const timerBtn = document.getElementById('timer-mode-btn');
    const timerSection = document.getElementById('timer-section');
    
    if (timerMode) {
        timerBtn.textContent = '⏱️ Timer: ON';
        timerBtn.style.background = '#4CAF50';
        timerSection.style.display = 'block';
    } else {
        timerBtn.textContent = '⏱️ Timer Mode';
        timerBtn.style.background = '#667eea';
        timerSection.style.display = 'none';
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }
    
    playSound(700, 0.2);
}

function startTimer() {
    timeLeft = 10;
    document.getElementById('timer').textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 3) {
            document.getElementById('timer').style.color = '#ff6b6b';
            playSound(1000, 0.1); // Warning beep
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            // Auto-select random option
            const randomOption = Math.random() < 0.5 ? 'a' : 'b';
            selectOption(randomOption);
            streak = 0; // Reset streak for timeout
            document.getElementById('streak-count').textContent = streak;
        }
    }, 1000);
}

function showChoiceFeedback() {
    const feedback = document.getElementById('choice-feedback');
    const feedbackText = document.getElementById('feedback-text');
    
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    feedbackText.textContent = randomFact;
    
    feedback.style.display = 'block';
    feedback.style.opacity = '0';
    feedback.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        feedback.style.transition = 'all 0.3s ease';
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateY(0)';
    }, 100);
}

function checkMilestones() {
    let celebrationText = '';
    
    if (streak === 5) celebrationText = 'Amazing! 5 in a row! 🔥';
    else if (streak === 10) celebrationText = 'Incredible! 10 streak! 🚀';
    else if (streak === 20) celebrationText = 'LEGENDARY! 20 streak! 👑';
    else if (answeredCount === 10) celebrationText = '10 questions down! Keep going! 💪';
    else if (answeredCount === 25) celebrationText = 'Halfway there! You\'re crushing it! ⭐';
    
    if (celebrationText) {
        showCelebration(celebrationText);
    }
}

function showCelebration(text) {
    const celebration = document.getElementById('celebration');
    const celebrationTextEl = document.getElementById('celebration-text');
    
    celebrationTextEl.textContent = text;
    celebration.style.display = 'flex';
    
    // Play celebration sound
    playSound(880, 0.3);
    setTimeout(() => playSound(1100, 0.3), 150);
    
    setTimeout(() => {
        celebration.style.display = 'none';
    }, 2000);
}

function showGameComplete() {
    const finalScore = score;
    const finalStreak = bestStreak;
    
    let message = `🎉 GAME COMPLETE! 🎉\n\n`;
    message += `Final Score: ${finalScore} points\n`;
    message += `Best Streak: ${finalStreak}\n`;
    message += `Questions Answered: ${questions.length}\n\n`;
    
    if (finalScore > 1000) message += 'INCREDIBLE PERFORMANCE! 🏆';
    else if (finalScore > 500) message += 'Great job! 🌟';
    else message += 'Nice work! 👍';
    
    // Play completion sound sequence
    playSound(523, 0.2); // C
    setTimeout(() => playSound(659, 0.2), 200); // E
    setTimeout(() => playSound(784, 0.4), 400); // G
    
    setTimeout(() => {
        alert(message);
        restartGame();
    }, 800);
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Reset timer display color
    document.getElementById('timer').style.color = '#666';
    loadQuestion();
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'a' || e.key === 'A') {
            if (!selectedOption) selectOption('a');
        } else if (e.key === 'b' || e.key === 'B') {
            if (!selectedOption) selectOption('b');
        } else if (e.key === 'Enter' || e.key === ' ') {
            if (!document.getElementById('next-btn').disabled) {
                nextQuestion();
            }
        }
    });
});