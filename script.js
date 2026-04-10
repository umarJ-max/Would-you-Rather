// ── 200 quality questions across varied categories ────────────────────────
const ALL_QUESTIONS = [
  // SUPERPOWERS
  { q: "Would you rather be able to fly or be completely invisible at will?", a: "Fly anywhere", b: "Turn invisible" },
  { q: "Would you rather be able to read minds or predict the future?", a: "Read minds", b: "Predict the future" },
  { q: "Would you rather have super strength or super speed?", a: "Super strength", b: "Super speed" },
  { q: "Would you rather teleport anywhere instantly or time travel to any year?", a: "Teleport", b: "Time travel" },
  { q: "Would you rather breathe underwater or survive in outer space?", a: "Breathe underwater", b: "Survive in space" },
  { q: "Would you rather have x-ray vision or the ability to hear any conversation within 1 km?", a: "X-ray vision", b: "Super hearing" },
  { q: "Would you rather be able to pause time or rewind it?", a: "Pause time", b: "Rewind time" },
  { q: "Would you rather speak every language fluently or play every instrument perfectly?", a: "Every language", b: "Every instrument" },
  { q: "Would you rather have night vision or the ability to see 10 km away clearly?", a: "Night vision", b: "Telescopic vision" },
  { q: "Would you rather be able to control fire or control water?", a: "Control fire", b: "Control water" },
  { q: "Would you rather phase through walls or become intangible to any attack?", a: "Phase through walls", b: "Intangible to attacks" },
  { q: "Would you rather have a photographic memory or be able to selectively erase your memories?", a: "Photographic memory", b: "Selective erasure" },
  { q: "Would you rather have perfect luck for a year or perfect skill at one thing forever?", a: "Perfect luck (1 year)", b: "Perfect skill (forever)" },
  { q: "Would you rather be immune to all disease or never age past 30?", a: "Immune to disease", b: "Never age past 30" },
  { q: "Would you rather have the power to heal any injury instantly or make anyone fall asleep instantly?", a: "Heal any injury", b: "Make anyone sleep" },

  // LIFESTYLE & LIFE CHOICES
  { q: "Would you rather have unlimited money or unlimited free time?", a: "Unlimited money", b: "Unlimited free time" },
  { q: "Would you rather live in the past or the future?", a: "Live in the past", b: "Live in the future" },
  { q: "Would you rather be famous worldwide or be completely anonymous but incredibly happy?", a: "World famous", b: "Anonymous & happy" },
  { q: "Would you rather live in a remote cabin with great WiFi or a luxury penthouse in a noisy city?", a: "Remote cabin + WiFi", b: "Luxury penthouse" },
  { q: "Would you rather have a job you love for average pay or a job you tolerate for 3x the salary?", a: "Love the job", b: "3x the salary" },
  { q: "Would you rather live forever and watch everyone you love die or live exactly 80 more years?", a: "Live forever", b: "80 more years" },
  { q: "Would you rather know the exact day you'll die or not know but live 20 fewer years?", a: "Know the day", b: "Live 20 fewer years" },
  { q: "Would you rather have one true best friend forever or 100 good friends who come and go?", a: "One best friend", b: "100 good friends" },
  { q: "Would you rather live in a world without war or a world without poverty?", a: "Without war", b: "Without poverty" },
  { q: "Would you rather always be the smartest person in the room or always be the most likeable?", a: "Smartest in the room", b: "Most likeable" },
  { q: "Would you rather have a rewind button for your life or a fast-forward button?", a: "Rewind button", b: "Fast-forward button" },
  { q: "Would you rather always be 10 minutes early or always be exactly on time but feel rushed?", a: "Always early", b: "Exactly on time" },
  { q: "Would you rather live in a treehouse in the Amazon or an igloo in Antarctica?", a: "Amazon treehouse", b: "Antarctica igloo" },
  { q: "Would you rather have a personal chef or a personal driver for the rest of your life?", a: "Personal chef", b: "Personal driver" },
  { q: "Would you rather spend a year in prison with your best friend or a month alone in paradise?", a: "Year with best friend", b: "Month in paradise alone" },

  // SOCIAL & RELATIONSHIPS
  { q: "Would you rather always say exactly what you think or always know what others really think of you?", a: "Say what you think", b: "Know what others think" },
  { q: "Would you rather be able to make anyone laugh or make anyone feel genuinely loved?", a: "Make anyone laugh", b: "Make anyone feel loved" },
  { q: "Would you rather have 10 million followers online but no real friends or 5 deep friendships?", a: "10M followers", b: "5 deep friendships" },
  { q: "Would you rather always know when someone is lying to you or be able to tell any lie perfectly?", a: "Detect all lies", b: "Tell perfect lies" },
  { q: "Would you rather be completely honest in every situation or always say the right thing diplomatically?", a: "Completely honest", b: "Always diplomatic" },
  { q: "Would you rather find your perfect romantic partner at 20 but lose them at 40 or meet them at 60?", a: "Meet at 20, lose at 40", b: "Meet at 60" },
  { q: "Would you rather everyone can hear your thoughts for a day or you can hear everyone's thoughts for a day?", a: "They hear mine", b: "I hear theirs" },
  { q: "Would you rather be loved by everyone but understood by no one or understood by one person deeply?", a: "Loved by everyone", b: "Understood by one" },
  { q: "Would you rather have to hug every person you meet or never hug anyone ever again?", a: "Hug everyone", b: "Never hug again" },
  { q: "Would you rather give up all social media forever or give up watching any TV or films forever?", a: "No social media", b: "No TV or films" },

  // TECH & MODERN
  { q: "Would you rather lose the internet forever or lose air conditioning and heating forever?", a: "Lose internet", b: "Lose A/C & heating" },
  { q: "Would you rather live without your phone or live without a car for the rest of your life?", a: "No phone", b: "No car" },
  { q: "Would you rather have unlimited battery on all your devices or free fast WiFi everywhere?", a: "Unlimited battery", b: "Free WiFi everywhere" },
  { q: "Would you rather have a robot do all your chores or an AI that perfectly manages your schedule?", a: "Robot for chores", b: "AI schedule manager" },
  { q: "Would you rather live in a world with no social media at all or with no search engines?", a: "No social media", b: "No search engines" },
  { q: "Would you rather have a self-driving car that never crashes or a jetpack that's perfectly safe?", a: "Self-driving car", b: "Safe jetpack" },
  { q: "Would you rather always have the latest technology or never have to update or charge anything again?", a: "Latest tech always", b: "No updates or charging" },

  // FOOD & BODY
  { q: "Would you rather only eat your single favourite meal forever or never eat it again?", a: "Favourite meal forever", b: "Never eat it again" },
  { q: "Would you rather taste everything you touch or be able to turn anything into food?", a: "Taste everything", b: "Turn anything to food" },
  { q: "Would you rather eat only sweet things or only savoury things for the rest of your life?", a: "Only sweet", b: "Only savoury" },
  { q: "Would you rather never have to sleep or never have to eat?", a: "Never sleep", b: "Never eat" },
  { q: "Would you rather eat a spoonful of wasabi or drink a glass of extremely sour lemon juice?", a: "Spoonful of wasabi", b: "Glass of lemon juice" },
  { q: "Would you rather be able to eat anything without gaining weight or never need to exercise?", a: "Eat without gaining", b: "Never exercise" },
  { q: "Would you rather have to eat everything with chopsticks or eat everything with your bare hands?", a: "Chopsticks only", b: "Bare hands only" },
  { q: "Would you rather only drink water for the rest of your life or never drink water again?", a: "Only water", b: "Never drink water" },
  { q: "Would you rather have food that's always too salty or always too bland?", a: "Too salty", b: "Too bland" },
  { q: "Would you rather never taste anything again or smell everything 100x stronger?", a: "No taste", b: "100x smell" },

  // FUNNY & WEIRD
  { q: "Would you rather have fingers as long as your legs or legs as short as your fingers?", a: "Long finger legs", b: "Short finger legs" },
  { q: "Would you rather sweat maple syrup or cry sparkling water?", a: "Sweat maple syrup", b: "Cry sparkling water" },
  { q: "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?", a: "100 tiny horses", b: "1 giant duck" },
  { q: "Would you rather have to hop everywhere you go or crawl everywhere on all fours?", a: "Hop everywhere", b: "Crawl everywhere" },
  { q: "Would you rather have to sing everything you say or rhyme everything you say?", a: "Sing everything", b: "Rhyme everything" },
  { q: "Would you rather have a unicorn horn or a monkey's prehensile tail?", a: "Unicorn horn", b: "Monkey tail" },
  { q: "Would you rather hiccup every time you laugh or sneeze every time you lie?", a: "Hiccup when laughing", b: "Sneeze when lying" },
  { q: "Would you rather have taste buds on your fingers or ears on your elbows?", a: "Finger taste buds", b: "Elbow ears" },
  { q: "Would you rather only be able to whisper or only be able to shout?", a: "Only whisper", b: "Only shout" },
  { q: "Would you rather always have wet socks or always have a small pebble in your shoe?", a: "Wet socks forever", b: "Pebble in shoe forever" },
  { q: "Would you rather have a head the size of a tennis ball or the size of a watermelon?", a: "Tennis ball head", b: "Watermelon head" },
  { q: "Would you rather accidentally call your teacher 'mum' every day or accidentally burp in every meeting?", a: "Call teacher mum", b: "Burp in every meeting" },
  { q: "Would you rather have a permanent clown nose or permanently wear clown shoes?", a: "Clown nose", b: "Clown shoes" },
  { q: "Would you rather bray like a donkey every time you're surprised or meow every time you're happy?", a: "Bray when surprised", b: "Meow when happy" },
  { q: "Would you rather only be able to move like a crab or only be able to sit like a frog?", a: "Move like a crab", b: "Sit like a frog" },

  // DEEP / PHILOSOPHICAL
  { q: "Would you rather live in a world where everyone always tells the truth or where everyone is always kind?", a: "Everyone honest", b: "Everyone kind" },
  { q: "Would you rather be remembered for 1000 years for something bad or forgotten completely?", a: "Remembered badly", b: "Forgotten completely" },
  { q: "Would you rather know the meaning of life but never be able to share it or never know it at all?", a: "Know but not share", b: "Never know" },
  { q: "Would you rather have perfect happiness with no purpose or great purpose with frequent struggle?", a: "Perfect happiness", b: "Great purpose" },
  { q: "Would you rather change one thing about the world or one thing about yourself?", a: "Change the world", b: "Change yourself" },
  { q: "Would you rather live a short extraordinary life or a long ordinary one?", a: "Short & extraordinary", b: "Long & ordinary" },
  { q: "Would you rather have all your questions about life answered or keep the mystery?", a: "All answers", b: "Keep the mystery" },
  { q: "Would you rather feel everything deeply and suffer more or feel less deeply and suffer less?", a: "Feel deeply", b: "Feel less" },
  { q: "Would you rather have free will in a difficult world or be controlled in a perfect one?", a: "Free will", b: "Controlled perfection" },
  { q: "Would you rather know you're in a simulation or never find out?", a: "Know it's a simulation", b: "Never find out" },
  { q: "Would you rather be able to undo your biggest regret or relive your best memory in full?", a: "Undo biggest regret", b: "Relive best memory" },
  { q: "Would you rather leave a big impact on a small community or a tiny impact on the whole world?", a: "Big impact, small place", b: "Tiny impact, whole world" },
  { q: "Would you rather live your life over with full memory of this one or start fresh with no memory?", a: "Full memory", b: "Start fresh" },
  { q: "Would you rather be completely feared or completely ignored?", a: "Completely feared", b: "Completely ignored" },
  { q: "Would you rather only ever feel joy and boredom or love and heartbreak?", a: "Joy and boredom", b: "Love and heartbreak" },

  // ANIMALS & NATURE
  { q: "Would you rather have a pet dragon that's totally loyal or a pet griffin that can fly you anywhere?", a: "Loyal dragon", b: "Flying griffin" },
  { q: "Would you rather be able to talk to all animals or control all plants?", a: "Talk to animals", b: "Control plants" },
  { q: "Would you rather have the strength of a gorilla or the speed of a cheetah?", a: "Gorilla strength", b: "Cheetah speed" },
  { q: "Would you rather live in a world where dinosaurs still exist or where dragons are real?", a: "Dinosaurs exist", b: "Dragons are real" },
  { q: "Would you rather always have perfect weather wherever you go or be able to control the weather?", a: "Perfect weather follows you", b: "Control the weather" },
  { q: "Would you rather swim as fast as a dolphin or run as fast as a cheetah?", a: "Swim like a dolphin", b: "Run like a cheetah" },
  { q: "Would you rather have a tiny elephant that fits in your pocket or a giant cat the size of a horse?", a: "Pocket elephant", b: "Horse-sized cat" },
  { q: "Would you rather be able to see in complete darkness or never be affected by extreme temperatures?", a: "See in darkness", b: "Immune to temperature" },

  // CREATIVE & KNOWLEDGE
  { q: "Would you rather have written the most beloved book ever or directed the most acclaimed film ever?", a: "Greatest book ever", b: "Greatest film ever" },
  { q: "Would you rather have unlimited knowledge or unlimited creativity?", a: "Unlimited knowledge", b: "Unlimited creativity" },
  { q: "Would you rather be a master of every sport or a master of every art form?", a: "Master of sport", b: "Master of art" },
  { q: "Would you rather have perfect pitch or perfect drawing ability?", a: "Perfect pitch", b: "Perfect drawing" },
  { q: "Would you rather be able to make any song a hit or make any business a success?", a: "Any song a hit", b: "Any business a success" },
  { q: "Would you rather have a book that tells you what to say in any situation or a map that shows the best path forward?", a: "Perfect words always", b: "Perfect path always" },
  { q: "Would you rather be an expert in one narrow field or decently good at everything?", a: "Expert in one thing", b: "Good at everything" },

  // COMFORT & INCONVENIENCE
  { q: "Would you rather never have to wait in a queue or never have to sit in traffic?", a: "No queues ever", b: "No traffic ever" },
  { q: "Would you rather always wake up refreshed no matter how little you sleep or always fall asleep in 30 seconds?", a: "Always wake refreshed", b: "Sleep in 30 seconds" },
  { q: "Would you rather have a wardrobe that always has the perfect outfit for every occasion or a fridge that's always stocked exactly how you like it?", a: "Perfect wardrobe", b: "Perfect fridge" },
  { q: "Would you rather never feel cold or never feel too hot?", a: "Never feel cold", b: "Never feel too hot" },
  { q: "Would you rather have unlimited data on your phone or unlimited money on public transport?", a: "Unlimited data", b: "Free public transport" },
  { q: "Would you rather always find a parking spot instantly or always get a seat on any train or flight?", a: "Instant parking", b: "Always get a seat" },
  { q: "Would you rather have a cleaner come daily or a personal shopper handle everything you need to buy?", a: "Daily cleaner", b: "Personal shopper" },
  { q: "Would you rather your home always be perfectly tidy automatically or never have to do laundry again?", a: "Auto-tidy home", b: "No laundry ever" },
  { q: "Would you rather never get a headache or never get a cold?", a: "No headaches ever", b: "No colds ever" },
  { q: "Would you rather have a perfect night's sleep every single night or an extra 3 hours in every day?", a: "Perfect sleep always", b: "3 extra hours daily" },

  // ADVENTURE & EXPERIENCE
  { q: "Would you rather explore the deepest ocean or visit the surface of Mars?", a: "Deepest ocean", b: "Surface of Mars" },
  { q: "Would you rather skydive from space or dive to the bottom of the Mariana Trench?", a: "Skydive from space", b: "Mariana Trench dive" },
  { q: "Would you rather go back and witness one historical event or fast-forward to see one future event?", a: "One historical event", b: "One future event" },
  { q: "Would you rather spend a year in total silence or a year where you can only listen and never speak?", a: "Year of silence", b: "Year of listening only" },
  { q: "Would you rather live as a medieval knight for a year or a Roman senator for a year?", a: "Medieval knight", b: "Roman senator" },
  { q: "Would you rather attend Hogwarts for a year or live in Middle-earth for a year?", a: "Hogwarts for a year", b: "Middle-earth for a year" },
  { q: "Would you rather go on a solo world trip for 2 years or stay home but have everyone you love visit you?", a: "Solo world trip", b: "Everyone visits you" },

  // HYPOTHETICALS & WOULD YOU REALLY
  { q: "Would you rather always have to tell people your exact salary or your exact weight?", a: "Share salary", b: "Share weight" },
  { q: "Would you rather have your search history made public or your camera roll made public?", a: "Search history public", b: "Camera roll public" },
  { q: "Would you rather go to jail for 2 years for something you didn't do or get away with something you did?", a: "Jail for 2 years innocent", b: "Get away with it" },
  { q: "Would you rather lose all your photos and memories or all your money?", a: "Lose all photos", b: "Lose all money" },
  { q: "Would you rather be 10 years older right now or 10 years younger?", a: "10 years older", b: "10 years younger" },
  { q: "Would you rather always have to wear a hat or never be allowed to wear a hat?", a: "Always wear a hat", b: "Never wear a hat" },
  { q: "Would you rather get paid to sleep or get paid to eat?", a: "Paid to sleep", b: "Paid to eat" },
  { q: "Would you rather have free flights for life or free accommodation wherever you stay?", a: "Free flights forever", b: "Free stays everywhere" },
  { q: "Would you rather be completely invisible in social situations or be the most noticeable person in every room?", a: "Invisible socially", b: "Most noticeable always" },
  { q: "Would you rather only be able to watch one genre of film forever or one genre of music?", a: "One film genre only", b: "One music genre only" },

  // FANTASY & SCI-FI
  { q: "Would you rather live in a Star Wars galaxy or a Marvel universe?", a: "Star Wars galaxy", b: "Marvel universe" },
  { q: "Would you rather have a lightsaber or an Iron Man suit?", a: "Lightsaber", b: "Iron Man suit" },
  { q: "Would you rather be a vampire or a werewolf?", a: "Vampire", b: "Werewolf" },
  { q: "Would you rather live in a world with magic or a world with advanced technology 500 years ahead?", a: "Magic world", b: "Future tech world" },
  { q: "Would you rather be a pirate captain with a loyal crew or a lone explorer with no ties?", a: "Pirate captain", b: "Lone explorer" },
  { q: "Would you rather have a magic wand that works once a day or a crystal ball that's always right?", a: "Daily magic wand", b: "Always-right crystal ball" },
  { q: "Would you rather be able to enter any book as a character or any video game?", a: "Enter any book", b: "Enter any video game" },
  { q: "Would you rather be a superhero with no secret identity or a villain with an unbreakable alibi?", a: "Known superhero", b: "Perfect villain alibi" },

  // CAREER & AMBITION
  { q: "Would you rather be the best in the world at something nobody cares about or average at something everyone values?", a: "Best at unloved thing", b: "Average at valued thing" },
  { q: "Would you rather work 4 days a week forever or work 3 months on and 3 months completely off?", a: "4 days a week", b: "3 on, 3 off" },
  { q: "Would you rather run a company you built from scratch or inherit one already worth billions?", a: "Build from scratch", b: "Inherit billions" },
  { q: "Would you rather be an astronaut or a deep-sea submarine pilot?", a: "Astronaut", b: "Deep-sea pilot" },
  { q: "Would you rather win a Nobel Prize or win an Olympic gold medal?", a: "Nobel Prize", b: "Olympic gold" },
  { q: "Would you rather be a brilliantly creative person who is always broke or a mediocre person who is always rich?", a: "Brilliantly creative", b: "Mediocre but rich" },

  // SCHOOL & GROWING UP
  { q: "Would you rather have been homeschooled your whole life or gone to boarding school?", a: "Homeschooled", b: "Boarding school" },
  { q: "Would you rather have had perfect grades but no social life or great friends but poor grades?", a: "Perfect grades", b: "Great social life" },
  { q: "Would you rather skip school entirely and be self-taught or repeat school but know everything you know now?", a: "Skip school", b: "Repeat with current knowledge" },
  { q: "Would you rather have had a famous parent or a completely normal but deeply loving family?", a: "Famous parent", b: "Normal loving family" },

  // SENSES & PERCEPTION
  { q: "Would you rather lose your sense of smell or your sense of taste?", a: "Lose smell", b: "Lose taste" },
  { q: "Would you rather be colourblind or have no sense of rhythm at all?", a: "Colourblind", b: "No sense of rhythm" },
  { q: "Would you rather see the world in a constant slow motion or at 2x speed?", a: "Constant slow motion", b: "2x speed world" },
  { q: "Would you rather hear music playing faintly wherever you go or have complete silence whenever you want it?", a: "Music everywhere", b: "Silence on demand" },
  { q: "Would you rather have super taste that makes everything delicious or super touch that makes everything feel perfect?", a: "Super taste", b: "Super touch" },

  // ENVIRONMENT & HOME
  { q: "Would you rather live in a house made entirely of glass or entirely of mirrors?", a: "Glass house", b: "Mirror house" },
  { q: "Would you rather live underground in a beautiful bunker or in a floating sky home?", a: "Underground bunker", b: "Sky home" },
  { q: "Would you rather live in a city that never sleeps or a village where nothing ever happens?", a: "City that never sleeps", b: "Quiet village" },
  { q: "Would you rather have a garden that grows any food automatically or a workshop that builds anything?", a: "Auto food garden", b: "Magic workshop" },
  { q: "Would you rather live next to a beach or next to mountains?", a: "Next to beach", b: "Next to mountains" },

  // RANDOM FUN
  { q: "Would you rather be able to make it rain money for 30 seconds once a year or earn an extra $500 every month?", a: "Money rain once a year", b: "$500 extra monthly" },
  { q: "Would you rather know every person's first impression of you or know your own first impression on others?", a: "Their first impression of me", b: "My impression on others" },
  { q: "Would you rather have a pause button for awkward conversations or a delete button for embarrassing moments?", a: "Pause awkward moments", b: "Delete embarrassing moments" },
  { q: "Would you rather be able to speak at exactly the right moment every time or always know when to stay silent?", a: "Always say the right thing", b: "Always know when to stay silent" },
  { q: "Would you rather have a button that skips Monday or a button that repeats your best day ever?", a: "Skip Monday", b: "Repeat best day" },
  { q: "Would you rather have never-ending motivation or never-ending patience?", a: "Never-ending motivation", b: "Never-ending patience" },
  { q: "Would you rather always win at board games or always win at arguments?", a: "Win board games", b: "Win arguments" },
  { q: "Would you rather find $100 every day or get one unexpected $50,000?", a: "$100 every day", b: "One $50,000 surprise" },
  { q: "Would you rather be able to stop time for 10 minutes a day or add 10 minutes to every hour?", a: "Stop time 10 min/day", b: "10 extra min each hour" },
  { q: "Would you rather have your dream home or your dream car?", a: "Dream home", b: "Dream car" },

  // EXTRA WEIRD & SPECIFIC
  { q: "Would you rather have knees that bend the wrong way or elbows that only bend fully once a day?", a: "Backward knees", b: "One-bend elbows daily" },
  { q: "Would you rather sneeze confetti or burp bubbles?", a: "Sneeze confetti", b: "Burp bubbles" },
  { q: "Would you rather have a laugh that sounds like a car alarm or a sneeze that sounds like a foghorn?", a: "Car alarm laugh", b: "Foghorn sneeze" },
  { q: "Would you rather only be able to walk backwards or only be able to communicate in mime?", a: "Walk backwards forever", b: "Communicate by mime" },
  { q: "Would you rather have your Google search history narrated aloud at random moments or all your texts read out in a formal voice?", a: "Random search narration", b: "Texts in formal voice" },
  { q: "Would you rather have to high-five every person you greet or bow deeply to every stranger?", a: "High-five everyone", b: "Bow to every stranger" },
  { q: "Would you rather narrate your life in third person out loud or always refer to yourself by your full name?", a: "Narrate in third person", b: "Full name always" },
];

// ── State ─────────────────────────────────────────────────────────────────
let shuffled = [];
let currentIndex = 0;
let currentQ = null;
let picked = false;
let streak = 0;
let totalAnswered = 0;
let loopCount = 0;

// ── DOM ───────────────────────────────────────────────────────────────────
const questionText  = document.getElementById('questionText');
const textA         = document.getElementById('textA');
const textB         = document.getElementById('textB');
const choiceA       = document.getElementById('choiceA');
const choiceB       = document.getElementById('choiceB');
const pickedState   = document.getElementById('pickedState');
const pickedVerdict = document.getElementById('pickedVerdict');
const navCount      = document.getElementById('navCount');
const navStreak     = document.getElementById('navStreak');
const progressFill  = document.getElementById('progressFill');

// ── Init ──────────────────────────────────────────────────────────────────
function init() {
  shuffled = shuffle([...ALL_QUESTIONS]);
  currentIndex = 0;
  loopCount = 0;
  showQuestion();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showQuestion() {
  // If we've exhausted the deck, reshuffle for a fresh loop
  if (currentIndex >= shuffled.length) {
    shuffled = shuffle([...ALL_QUESTIONS]);
    currentIndex = 0;
    loopCount++;
  }

  currentQ = shuffled[currentIndex];
  picked = false;

  // Reset UI
  choiceA.classList.remove('dimmed', 'chosen');
  choiceB.classList.remove('dimmed', 'chosen');
  choiceA.disabled = false;
  choiceB.disabled = false;
  pickedState.classList.add('hidden');

  // Animate in
  const wrap = document.getElementById('questionWrap');
  const choices = document.getElementById('choicesArea');
  wrap.classList.remove('question-swap');
  choices.classList.remove('question-swap');
  void wrap.offsetWidth;
  wrap.classList.add('question-swap');
  choices.classList.add('question-swap');

  questionText.textContent = currentQ.q;
  textA.textContent = currentQ.a;
  textB.textContent = currentQ.b;

  // Update nav counter
  const displayNum = totalAnswered + 1;
  navCount.textContent = `Q ${displayNum}`;

  // Progress within current deck (0–100%)
  const pct = (currentIndex / ALL_QUESTIONS.length) * 100;
  progressFill.style.width = pct + '%';
}

function pick(side) {
  if (picked) return;
  picked = true;
  streak++;
  totalAnswered++;

  const chosen = side === 'a' ? choiceA : choiceB;
  const other  = side === 'a' ? choiceB : choiceA;

  chosen.classList.add('chosen');
  other.classList.add('dimmed');
  choiceA.disabled = true;
  choiceB.disabled = true;

  // Streak badge
  if (streak >= 3) {
    navStreak.classList.remove('hidden');
    navStreak.textContent = `🔥 ${streak}`;
  }

  // Verdict message
  const verdicts = [
    'Bold choice.', 'Interesting pick!', 'Respect.',
    'Can\'t argue with that.', 'A classic answer.', 'Daring.',
    'Most people agree with you.', 'You\'re in the minority — nice.',
    'Classic.', 'That took guts.', 'No regrets?'
  ];
  pickedVerdict.textContent = verdicts[Math.floor(Math.random() * verdicts.length)];
  pickedState.classList.remove('hidden');

  currentIndex++;
}

function nextQuestion() {
  showQuestion();
}

function resetGame() {
  streak = 0;
  totalAnswered = 0;
  loopCount = 0;
  navStreak.classList.add('hidden');
  navStreak.textContent = '🔥 0';
  shuffled = shuffle([...ALL_QUESTIONS]);
  currentIndex = 0;
  showQuestion();
}

// ── Keyboard ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (!picked) {
    if (k === 'a') pick('a');
    if (k === 'b') pick('b');
  } else {
    if (k === 'enter' || k === ' ') { e.preventDefault(); nextQuestion(); }
  }
  if (k === 'r' && e.ctrlKey) { e.preventDefault(); resetGame(); }
});

document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);

// ── Start ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
