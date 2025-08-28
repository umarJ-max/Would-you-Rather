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

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('option-a-text').textContent = question.optionA;
    document.getElementById('option-b-text').textContent = question.optionB;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
    
    // Reset button states
    document.getElementById('option-a').classList.remove('selected');
    document.getElementById('option-b').classList.remove('selected');
    document.getElementById('next-btn').disabled = true;
    selectedOption = null;
}

function selectOption(option) {
    selectedOption = option;
    
    // Remove previous selection
    document.getElementById('option-a').classList.remove('selected');
    document.getElementById('option-b').classList.remove('selected');
    
    // Add selection to chosen option
    document.getElementById('option-' + option).classList.add('selected');
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (selectedOption) {
        answeredCount++;
        
        // Update display
        document.getElementById('answered-count').textContent = answeredCount;
        
        // Move to next question
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            // Game finished
            alert(`Game Complete! You answered all ${questions.length} questions.`);
            restartGame();
        }
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    answeredCount = 0;
    selectedOption = null;
    
    document.getElementById('answered-count').textContent = answeredCount;
    
    loadQuestion();
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});