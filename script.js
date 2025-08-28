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
    { question: "Would you rather be completely bald or completely hairy?", optionA: "Completely bald", optionB: "Completely hairy" },
    { question: "Would you rather have the ability to stop time or travel at light speed?", optionA: "Stop time", optionB: "Travel at light speed" },
    { question: "Would you rather live in a world without internet or without electricity?", optionA: "Without internet", optionB: "Without electricity" },
    { question: "Would you rather have perfect memory or perfect health?", optionA: "Perfect memory", optionB: "Perfect health" },
    { question: "Would you rather be able to change the past or see the future?", optionA: "Change the past", optionB: "See the future" },
    { question: "Would you rather have unlimited knowledge or unlimited creativity?", optionA: "Unlimited knowledge", optionB: "Unlimited creativity" },
    { question: "Would you rather live underwater or in outer space?", optionA: "Live underwater", optionB: "Live in outer space" },
    { question: "Would you rather have the power to make anyone fall in love with you or make anyone trust you?", optionA: "Make anyone fall in love", optionB: "Make anyone trust you" },
    { question: "Would you rather be able to eat anything without gaining weight or never need to exercise?", optionA: "Eat without gaining weight", optionB: "Never need exercise" },
    { question: "Would you rather have a personal chef or a personal trainer?", optionA: "Personal chef", optionB: "Personal trainer" },
    { question: "Would you rather be able to control your dreams or never have nightmares?", optionA: "Control dreams", optionB: "Never have nightmares" },
    { question: "Would you rather have the ability to become any animal or any fictional character?", optionA: "Become any animal", optionB: "Become fictional character" },
    { question: "Would you rather live in a mansion alone or a small apartment with your best friends?", optionA: "Mansion alone", optionB: "Small apartment with friends" },
    { question: "Would you rather have the power to heal any disease or prevent any crime?", optionA: "Heal any disease", optionB: "Prevent any crime" },
    { question: "Would you rather be able to speak to the dead or see ghosts?", optionA: "Speak to the dead", optionB: "See ghosts" },
    { question: "Would you rather have a job you love with low pay or a job you hate with high pay?", optionA: "Love job, low pay", optionB: "Hate job, high pay" },
    { question: "Would you rather be able to breathe underwater indefinitely or fly at any height?", optionA: "Breathe underwater", optionB: "Fly at any height" },
    { question: "Would you rather have the ability to make plants grow instantly or make technology work perfectly?", optionA: "Grow plants instantly", optionB: "Perfect technology" },
    { question: "Would you rather live in a world where everyone tells the truth or where everyone is kind?", optionA: "Everyone tells truth", optionB: "Everyone is kind" },
    { question: "Would you rather have the power to make anyone happy or make anyone successful?", optionA: "Make anyone happy", optionB: "Make anyone successful" },
    { question: "Would you rather be able to teleport anywhere instantly or time travel to any period?", optionA: "Teleport anywhere", optionB: "Time travel anywhere" },
    { question: "Would you rather have a magic wand or a crystal ball?", optionA: "Magic wand", optionB: "Crystal ball" },
    { question: "Would you rather be able to control the weather in your city or have perfect weather follow you everywhere?", optionA: "Control city weather", optionB: "Perfect weather follows" },
    { question: "Would you rather have the ability to make any food appear or make any object disappear?", optionA: "Make food appear", optionB: "Make objects disappear" },
    { question: "Would you rather live in a world without war or without poverty?", optionA: "Without war", optionB: "Without poverty" },
    { question: "Would you rather have the power to make anyone laugh or make anyone feel loved?", optionA: "Make anyone laugh", optionB: "Make anyone feel loved" },
    { question: "Would you rather be able to run as fast as a cheetah or swim as fast as a dolphin?", optionA: "Run like cheetah", optionB: "Swim like dolphin" },
    { question: "Would you rather have night vision or telescopic vision?", optionA: "Night vision", optionB: "Telescopic vision" },
    { question: "Would you rather be able to phase through walls or become completely invisible at will?", optionA: "Phase through walls", optionB: "Invisible at will" },
    { question: "Would you rather have a personal robot assistant or a personal AI companion?", optionA: "Robot assistant", optionB: "AI companion" },
    { question: "Would you rather be able to control electricity or control magnetism?", optionA: "Control electricity", optionB: "Control magnetism" },
    { question: "Would you rather live in a treehouse in the Amazon or an igloo in Antarctica?", optionA: "Amazon treehouse", optionB: "Antarctica igloo" },
    { question: "Would you rather have the ability to make anyone forget something or remember something?", optionA: "Make anyone forget", optionB: "Make anyone remember" },
    { question: "Would you rather be able to create portals to anywhere or duplicate any object?", optionA: "Create portals", optionB: "Duplicate objects" },
    { question: "Would you rather have super hearing or super smell?", optionA: "Super hearing", optionB: "Super smell" },
    { question: "Would you rather be able to control your age or control your size?", optionA: "Control age", optionB: "Control size" },
    { question: "Would you rather live in a world where money doesn't exist or where time doesn't exist?", optionA: "No money", optionB: "No time" },
    { question: "Would you rather have the power to make plants talk or make animals dance?", optionA: "Make plants talk", optionB: "Make animals dance" },
    { question: "Would you rather be able to survive without oxygen or without food?", optionA: "Without oxygen", optionB: "Without food" },
    { question: "Would you rather have a house that cleans itself or a car that drives itself?", optionA: "Self-cleaning house", optionB: "Self-driving car" },
    { question: "Would you rather be able to make anyone fall asleep or wake anyone up?", optionA: "Make anyone sleep", optionB: "Wake anyone up" },
    { question: "Would you rather have the ability to walk on water or walk through fire unharmed?", optionA: "Walk on water", optionB: "Walk through fire" },
    { question: "Would you rather live in a world where everyone has superpowers or where no one has superpowers?", optionA: "Everyone has powers", optionB: "No one has powers" },
    { question: "Would you rather be able to control shadows or control light?", optionA: "Control shadows", optionB: "Control light" },
    { question: "Would you rather have a photographic memory for faces or for places?", optionA: "Remember faces", optionB: "Remember places" },
    { question: "Would you rather be able to make any machine work perfectly or make any relationship work perfectly?", optionA: "Perfect machines", optionB: "Perfect relationships" },
    { question: "Would you rather have the power to make anyone brave or make anyone wise?", optionA: "Make anyone brave", optionB: "Make anyone wise" },
    { question: "Would you rather live in a castle in the clouds or a palace under the sea?", optionA: "Castle in clouds", optionB: "Palace under sea" },
    { question: "Would you rather be able to control your heartbeat or control your breathing?", optionA: "Control heartbeat", optionB: "Control breathing" },
    { question: "Would you rather have the ability to make any door appear or make any wall disappear?", optionA: "Make doors appear", optionB: "Make walls disappear" },
    { question: "Would you rather be able to communicate with computers or communicate with nature?", optionA: "Communicate with computers", optionB: "Communicate with nature" },
    { question: "Would you rather have unlimited energy or unlimited patience?", optionA: "Unlimited energy", optionB: "Unlimited patience" },
    { question: "Would you rather be able to make anyone confident or make anyone calm?", optionA: "Make anyone confident", optionB: "Make anyone calm" },
    { question: "Would you rather live in a world where everyone can read your thoughts or where you can read everyone's thoughts?", optionA: "Everyone reads mine", optionB: "I read everyone's" },
    { question: "Would you rather have the power to make any book come to life or make any movie become real?", optionA: "Books come to life", optionB: "Movies become real" },
    { question: "Would you rather be able to control ice or control steam?", optionA: "Control ice", optionB: "Control steam" },
    { question: "Would you rather have a magic mirror that shows the future or the past?", optionA: "Shows future", optionB: "Shows past" },
    { question: "Would you rather be able to make anyone artistic or make anyone athletic?", optionA: "Make anyone artistic", optionB: "Make anyone athletic" },
    { question: "Would you rather live in a world without music or without colors?", optionA: "Without music", optionB: "Without colors" },
    { question: "Would you rather have the ability to make any vehicle or make any building?", optionA: "Make any vehicle", optionB: "Make any building" },
    { question: "Would you rather be able to control your luck or control your destiny?", optionA: "Control luck", optionB: "Control destiny" },
    { question: "Would you rather have super flexibility or super balance?", optionA: "Super flexibility", optionB: "Super balance" },
    { question: "Would you rather be able to make anyone generous or make anyone honest?", optionA: "Make anyone generous", optionB: "Make anyone honest" },
    { question: "Would you rather live in a house made of glass or a house made of mirrors?", optionA: "Glass house", optionB: "Mirror house" },
    { question: "Would you rather have the power to make any game real or make any sport easy?", optionA: "Make games real", optionB: "Make sports easy" },
    { question: "Would you rather be able to control your emotions perfectly or read emotions perfectly?", optionA: "Control emotions", optionB: "Read emotions" },
    { question: "Would you rather have a pet phoenix or a pet griffin?", optionA: "Pet phoenix", optionB: "Pet griffin" },
    { question: "Would you rather be able to make anyone motivated or make anyone peaceful?", optionA: "Make anyone motivated", optionB: "Make anyone peaceful" },
    { question: "Would you rather live in a world where gravity is half as strong or twice as strong?", optionA: "Half gravity", optionB: "Double gravity" },
    { question: "Would you rather have the ability to make any tool or make any weapon?", optionA: "Make any tool", optionB: "Make any weapon" },
    { question: "Would you rather be able to control your metabolism or control your immune system?", optionA: "Control metabolism", optionB: "Control immune system" },
    { question: "Would you rather have perfect pitch or perfect rhythm?", optionA: "Perfect pitch", optionB: "Perfect rhythm" },
    { question: "Would you rather be able to make anyone curious or make anyone satisfied?", optionA: "Make anyone curious", optionB: "Make anyone satisfied" },
    { question: "Would you rather live in a world where everyone is telepathic or where everyone is empathic?", optionA: "Everyone telepathic", optionB: "Everyone empathic" },
    { question: "Would you rather have the power to make any substance or make any energy?", optionA: "Make any substance", optionB: "Make any energy" },
    { question: "Would you rather be able to control your reflexes or control your instincts?", optionA: "Control reflexes", optionB: "Control instincts" },
    { question: "Would you rather have a magic pen that makes anything you write come true or magic paint that makes anything you paint come alive?", optionA: "Magic pen", optionB: "Magic paint" },
    { question: "Would you rather be able to make anyone focused or make anyone creative?", optionA: "Make anyone focused", optionB: "Make anyone creative" },
    { question: "Would you rather live in a world where everyone lives forever or where everyone lives exactly 100 years?", optionA: "Everyone lives forever", optionB: "Everyone lives 100 years" },
    { question: "Would you rather have the ability to make any sound or make any smell?", optionA: "Make any sound", optionB: "Make any smell" },
    { question: "Would you rather be able to control your adrenaline or control your endorphins?", optionA: "Control adrenaline", optionB: "Control endorphins" },
    { question: "Would you rather have super taste or super touch?", optionA: "Super taste", optionB: "Super touch" },
    { question: "Would you rather be able to make anyone logical or make anyone intuitive?", optionA: "Make anyone logical", optionB: "Make anyone intuitive" },
    { question: "Would you rather live in a house that's always the perfect temperature or always perfectly quiet?", optionA: "Perfect temperature", optionB: "Perfectly quiet" },
    { question: "Would you rather have the power to make any pattern or make any texture?", optionA: "Make any pattern", optionB: "Make any texture" },
    { question: "Would you rather be able to control your coordination or control your reaction time?", optionA: "Control coordination", optionB: "Control reaction time" },
    { question: "Would you rather have a magic compass that points to what you need most or what you want most?", optionA: "Points to needs", optionB: "Points to wants" },
    { question: "Would you rather be able to make anyone determined or make anyone flexible?", optionA: "Make anyone determined", optionB: "Make anyone flexible" },
    { question: "Would you rather live in a world where everyone has the same personality or completely different personalities?", optionA: "Same personality", optionB: "Different personalities" },
    { question: "Would you rather have the ability to make any liquid or make any gas?", optionA: "Make any liquid", optionB: "Make any gas" },
    { question: "Would you rather be able to control your perception of time or your perception of space?", optionA: "Perception of time", optionB: "Perception of space" },
    { question: "Would you rather have perfect handwriting or perfect drawing ability?", optionA: "Perfect handwriting", optionB: "Perfect drawing" },
    { question: "Would you rather be able to make anyone optimistic or make anyone realistic?", optionA: "Make anyone optimistic", optionB: "Make anyone realistic" },
    { question: "Would you rather live in a world where everyone communicates through music or through art?", optionA: "Communicate through music", optionB: "Communicate through art" },
    { question: "Would you rather have the power to make any crystal or make any metal?", optionA: "Make any crystal", optionB: "Make any metal" },
    { question: "Would you rather be able to control your strength precisely or your speed precisely?", optionA: "Control strength", optionB: "Control speed" },
    { question: "Would you rather have a magic key that opens anything or a magic lock that secures anything?", optionA: "Magic key", optionB: "Magic lock" },
    { question: "Would you rather be able to make anyone adventurous or make anyone cautious?", optionA: "Make anyone adventurous", optionB: "Make anyone cautious" },
    { question: "Would you rather live in a world where everyone has perfect memory or perfect intuition?", optionA: "Perfect memory", optionB: "Perfect intuition" },
    { question: "Would you rather have the ability to make any fabric or make any paper?", optionA: "Make any fabric", optionB: "Make any paper" },
    { question: "Would you rather be able to control your hunger or control your thirst?", optionA: "Control hunger", optionB: "Control thirst" },
    { question: "Would you rather have perfect balance in life or perfect harmony in relationships?", optionA: "Perfect life balance", optionB: "Perfect relationship harmony" },
    { question: "Would you rather be able to make anyone independent or make anyone collaborative?", optionA: "Make anyone independent", optionB: "Make anyone collaborative" },
    { question: "Would you rather live in a world where everyone is always learning or always teaching?", optionA: "Always learning", optionB: "Always teaching" },
    { question: "Would you rather have the power to make any scent or make any flavor?", optionA: "Make any scent", optionB: "Make any flavor" },
    { question: "Would you rather be able to control your sleep quality or your dream content?", optionA: "Control sleep quality", optionB: "Control dream content" },
    { question: "Would you rather have a magic seed that grows anything or magic water that heals anything?", optionA: "Magic seed", optionB: "Magic water" },
    { question: "Would you rather be able to make anyone spontaneous or make anyone organized?", optionA: "Make anyone spontaneous", optionB: "Make anyone organized" },
    { question: "Would you rather live in a world where everyone has the same skills or completely unique skills?", optionA: "Same skills", optionB: "Unique skills" },
    { question: "Would you rather have the ability to make any light or make any shadow?", optionA: "Make any light", optionB: "Make any shadow" },
    { question: "Would you rather be able to control your focus or control your awareness?", optionA: "Control focus", optionB: "Control awareness" },
    { question: "Would you rather have perfect timing in everything or perfect spacing in everything?", optionA: "Perfect timing", optionB: "Perfect spacing" },
    { question: "Would you rather be able to make anyone humble or make anyone confident?", optionA: "Make anyone humble", optionB: "Make anyone confident" },
    { question: "Would you rather live in a world where everyone shares everything or keeps everything private?", optionA: "Shares everything", optionB: "Keeps private" },
    { question: "Would you rather have the power to make any weather or make any season?", optionA: "Make any weather", optionB: "Make any season" },
    { question: "Would you rather be able to control your curiosity or control your satisfaction?", optionA: "Control curiosity", optionB: "Control satisfaction" },
    { question: "Would you rather have a magic thread that connects anything or magic glue that bonds anything?", optionA: "Magic thread", optionB: "Magic glue" },
    { question: "Would you rather be able to make anyone patient or make anyone efficient?", optionA: "Make anyone patient", optionB: "Make anyone efficient" },
    { question: "Would you rather live in a world where everyone thinks the same way or feels the same way?", optionA: "Thinks the same", optionB: "Feels the same" },
    { question: "Would you rather have the ability to make any shape or make any size?", optionA: "Make any shape", optionB: "Make any size" },
    { question: "Would you rather be able to control your motivation or control your discipline?", optionA: "Control motivation", optionB: "Control discipline" },
    { question: "Would you rather have perfect coordination between mind and body or perfect harmony between heart and mind?", optionA: "Mind-body coordination", optionB: "Heart-mind harmony" },
    { question: "Would you rather be able to make anyone open-minded or make anyone decisive?", optionA: "Make anyone open-minded", optionB: "Make anyone decisive" },
    { question: "Would you rather live in a world where everyone has the same dreams or completely different dreams?", optionA: "Same dreams", optionB: "Different dreams" },
    { question: "Would you rather have the power to make any frequency or make any vibration?", optionA: "Make any frequency", optionB: "Make any vibration" },
    { question: "Would you rather be able to control your empathy or control your logic?", optionA: "Control empathy", optionB: "Control logic" },
    { question: "Would you rather have a magic map that shows where you've been or where you're going?", optionA: "Shows where been", optionB: "Shows where going" },
    { question: "Would you rather be able to make anyone resilient or make anyone adaptable?", optionA: "Make anyone resilient", optionB: "Make anyone adaptable" },
    { question: "Would you rather live in a world where everyone has perfect health or perfect happiness?", optionA: "Perfect health", optionB: "Perfect happiness" },
    { question: "Would you rather have the ability to make any temperature or make any pressure?", optionA: "Make any temperature", optionB: "Make any pressure" },
    { question: "Would you rather be able to control your intuition or control your analysis?", optionA: "Control intuition", optionB: "Control analysis" },
    { question: "Would you rather have perfect rhythm in music or perfect flow in movement?", optionA: "Perfect musical rhythm", optionB: "Perfect movement flow" },
    { question: "Would you rather be able to make anyone passionate or make anyone serene?", optionA: "Make anyone passionate", optionB: "Make anyone serene" },
    { question: "Would you rather live in a world where everyone has the same values or completely different values?", optionA: "Same values", optionB: "Different values" },
    { question: "Would you rather have the power to make any dimension or make any perspective?", optionA: "Make any dimension", optionB: "Make any perspective" },
    { question: "Would you rather be able to control your inspiration or control your execution?", optionA: "Control inspiration", optionB: "Control execution" },
    { question: "Would you rather have a magic lens that shows truth or shows potential?", optionA: "Shows truth", optionB: "Shows potential" },
    { question: "Would you rather be able to make anyone innovative or make anyone traditional?", optionA: "Make anyone innovative", optionB: "Make anyone traditional" },
    { question: "Would you rather live in a world where everyone has perfect communication or perfect understanding?", optionA: "Perfect communication", optionB: "Perfect understanding" },
    { question: "Would you rather have the ability to make any connection or make any separation?", optionA: "Make any connection", optionB: "Make any separation" },
    { question: "Would you rather be able to control your presence or control your absence?", optionA: "Control presence", optionB: "Control absence" },
    { question: "Would you rather have perfect synchronization with others or perfect independence from others?", optionA: "Perfect synchronization", optionB: "Perfect independence" },
    { question: "Would you rather be able to make anyone expressive or make anyone reserved?", optionA: "Make anyone expressive", optionB: "Make anyone reserved" },
    { question: "Would you rather live in a world where everyone has the same pace or completely different paces?", optionA: "Same pace", optionB: "Different paces" },
    { question: "Would you rather have the power to make any rhythm or make any melody?", optionA: "Make any rhythm", optionB: "Make any melody" },
    { question: "Would you rather be able to control your reception or control your transmission?", optionA: "Control reception", optionB: "Control transmission" },
    { question: "Would you rather have a magic scale that measures anything or magic ruler that measures everything?", optionA: "Magic scale", optionB: "Magic ruler" },
    { question: "Would you rather be able to make anyone systematic or make anyone spontaneous?", optionA: "Make anyone systematic", optionB: "Make anyone spontaneous" },
    { question: "Would you rather live in a world where everyone has perfect timing or perfect spacing?", optionA: "Perfect timing", optionB: "Perfect spacing" },
    { question: "Would you rather have the ability to make any wave or make any particle?", optionA: "Make any wave", optionB: "Make any particle" },
    { question: "Would you rather be able to control your expansion or control your contraction?", optionA: "Control expansion", optionB: "Control contraction" },
    { question: "Would you rather have perfect resonance with your environment or perfect isolation from disturbance?", optionA: "Perfect resonance", optionB: "Perfect isolation" },
    { question: "Would you rather be able to make anyone receptive or make anyone selective?", optionA: "Make anyone receptive", optionB: "Make anyone selective" },
    { question: "Would you rather live in a world where everyone has the same frequency or completely different frequencies?", optionA: "Same frequency", optionB: "Different frequencies" },
    { question: "Would you rather have the power to make any field or make any force?", optionA: "Make any field", optionB: "Make any force" },
    { question: "Would you rather be able to control your attraction or control your repulsion?", optionA: "Control attraction", optionB: "Control repulsion" },
    { question: "Would you rather have a magic prism that separates anything or magic lens that focuses everything?", optionA: "Magic prism", optionB: "Magic lens" },
    { question: "Would you rather be able to make anyone flowing or make anyone structured?", optionA: "Make anyone flowing", optionB: "Make anyone structured" },
    { question: "Would you rather live in a world where everyone has perfect balance or perfect momentum?", optionA: "Perfect balance", optionB: "Perfect momentum" },
    { question: "Would you rather have the ability to make any current or make any resistance?", optionA: "Make any current", optionB: "Make any resistance" },
    { question: "Would you rather be able to control your conductivity or control your insulation?", optionA: "Control conductivity", optionB: "Control insulation" },
    { question: "Would you rather have perfect amplification of your abilities or perfect filtering of distractions?", optionA: "Perfect amplification", optionB: "Perfect filtering" },
    { question: "Would you rather be able to make anyone conductive or make anyone resistant?", optionA: "Make anyone conductive", optionB: "Make anyone resistant" },
    { question: "Would you rather live in a world where everyone has the same charge or opposite charges?", optionA: "Same charge", optionB: "Opposite charges" },
    { question: "Would you rather have the power to make any circuit or make any break?", optionA: "Make any circuit", optionB: "Make any break" },
    { question: "Would you rather be able to control your voltage or control your amperage?", optionA: "Control voltage", optionB: "Control amperage" },
    { question: "Would you rather have a magic battery that never runs out or magic solar panel that works anywhere?", optionA: "Magic battery", optionB: "Magic solar panel" },
    { question: "Would you rather be able to make anyone energetic or make anyone grounded?", optionA: "Make anyone energetic", optionB: "Make anyone grounded" }
];}

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