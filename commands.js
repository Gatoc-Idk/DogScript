// DogScript Programming Language - JavaScript Library
// A dog-themed programming language where everything is about dogs!

class DogScript {
    constructor() {
        this.dogMemory = {}; // Variables storage
        this.packMemory = []; // Array storage
        this.output = [];
        this.isGoodBoy = true;
    }

    // Variable commands
    giveTreat(name, value) {
        this.dogMemory[name] = value;
        return `🦴 Gave treat '${name}' with value: ${value}`;
    }

    sniffTreat(name) {
        return this.dogMemory[name] || null;
    }

    // Output commands
    bark(message) {
        const output = `🐕 WOOF: ${message}`;
        this.output.push(output);
        return output;
    }

    whisper(message) {
        const output = `🐕‍🦺 *whispers*: ${message}`;
        this.output.push(output);
        return output;
    }

    howl(message) {
        const output = `🐺 AWOOOO: ${message.toUpperCase()}`;
        this.output.push(output);
        return output;
    }

    // Math commands
    fetchSticks(a, b) {
        return a + b;
    }

    dropSticks(a, b) {
        return a - b;
    }

    countTreats(a, b) {
        return a * b;
    }

    shareTreats(a, b) {
        return b !== 0 ? a / b : "Can't share with zero dogs!";
    }

    // Comparison commands
    sniffSame(a, b) {
        return a === b;
    }

    sniffDifferent(a, b) {
        return a !== b;
    }

    biggerBone(a, b) {
        return a > b;
    }

    smallerBone(a, b) {
        return a < b;
    }

    // Pack (Array) commands
    createPack(name, items = []) {
        this.dogMemory[name] = [...items];
        return `🐕‍🦺 Created pack '${name}' with ${items.length} members`;
    }

    joinPack(packName, member) {
        if (this.dogMemory[packName] && Array.isArray(this.dogMemory[packName])) {
            this.dogMemory[packName].push(member);
            return `🐕 ${member} joined the ${packName} pack!`;
        }
        return "Pack not found!";
    }

    leavePack(packName) {
        if (this.dogMemory[packName] && Array.isArray(this.dogMemory[packName])) {
            const member = this.dogMemory[packName].pop();
            return member ? `🐕 ${member} left the pack` : "Pack is empty!";
        }
        return "Pack not found!";
    }

    packSize(packName) {
        return this.dogMemory[packName] ? this.dogMemory[packName].length : 0;
    }

    // Loop commands
    walkAround(times, callback) {
        const results = [];
        for (let i = 0; i < times; i++) {
            results.push(callback(i));
        }
        return results;
    }

    sniffEach(packName, callback) {
        if (this.dogMemory[packName] && Array.isArray(this.dogMemory[packName])) {
            return this.dogMemory[packName].map(callback);
        }
        return "Pack not found!";
    }

    // Conditional commands
    goodBoy(condition, ifTrue, ifFalse) {
        return condition ? ifTrue() : ifFalse();
    }

    badDog(condition, punishment) {
        if (condition) {
            this.isGoodBoy = false;
            return punishment();
        }
        return "Still a good boy! 🐕";
    }

    // String commands
    sniffScent(text) {
        return typeof text === 'string' ? text.length : 0;
    }

    rollOver(text) {
        return typeof text === 'string' ? text.split('').reverse().join('') : text;
    }

    wagTail(text, times = 3) {
        return typeof text === 'string' ? text.repeat(times) : text;
    }

    // Random commands
    randomTreat(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    fetchRandom(packName) {
        if (this.dogMemory[packName] && Array.isArray(this.dogMemory[packName])) {
            const pack = this.dogMemory[packName];
            return pack[Math.floor(Math.random() * pack.length)];
        }
        return "Pack not found!";
    }

    // Time commands
    napTime(seconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`😴 Woke up after ${seconds} seconds!`);
            }, seconds * 1000);
        });
    }

    // Utility commands
    sitStay() { return "🐕 *sits and stays*"; }
    playFetch() { 
        const r = ["🎾 Fetched ball!", "🥏 Caught frisbee!", "🦴 Found bone!"];
        return r[Math.floor(Math.random() * r.length)];
    }
    rollDice() { return Math.floor(Math.random() * 6) + 1; }
    getGoodBoyStatus() { return this.isGoodBoy ? "🏆 Very good boy!" : "😔 Been bad dog..."; }
    cleanBowl() { this.output = []; return "🥣 Bowl cleaned!"; }
    showTricks() { return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(n => n !== 'constructor').map(t => `🎪 ${t}`).join('\n'); }
    
    // Movement commands
    walkLeft() { return "🐕 Walking left..."; }
    walkRight() { return "🐕 Walking right..."; }
    runFast() { return "🏃‍♂️ Running super fast!"; }
    crawlSlow() { return "🐛 Crawling slowly..."; }
    jumpHigh() { return "🦘 Jumping high!"; }
    spinAround() { return "🌪️ Spinning around!"; }
    
    // Emotion commands
    wagTailHappy() { return "😊 *wag wag wag*"; }
    tiltHead() { return "🤔 *tilts head confused*"; }
    pant() { return "😛 *panting heavily*"; }
    yawn() { return "🥱 *yaaawn*"; }
    excited() { return "🤩 SO EXCITED!"; }
    scared() { return "😨 *hides behind owner*"; }
    
    // Food commands
    eatFood() { return "🍖 *munch munch*"; }
    drinkWater() { return "💧 *slurp slurp*"; }
    begForTreats() { return "🥺 Please give treats!"; }
    dropFood() { return "🍖 *drops food*"; }
    smellFood() { return "👃 *sniff sniff* Smells good!"; }
    gulpDown() { return "😋 *gulps down food*"; }
    
    // Weather commands
    sunnyDay() { return "☀️ Perfect day for walkies!"; }
    rainyDay() { return "🌧️ Don't want to go out..."; }
    snowDay() { return "❄️ Snow! Let's play!"; }
    windyDay() { return "💨 Ears flapping in wind!"; }
    
    // Sleep commands
    layDown() { return "🛏️ *lies down*"; }
    dreamBones() { return "💭 Dreaming of bones..."; }
    snore() { return "😴 *snore snore*"; }
    sleepyTime() { return "😪 Getting sleepy..."; }
    
    // Play commands
    chaseTail() { return "🌀 Chasing my tail!"; }
    playDead() { return "💀 *plays dead*"; }
    tug() { return "🪀 Playing tug of war!"; }
    hideAndSeek() { return "🙈 Can't find me!"; }
    wrestle() { return "🤼 Wrestling with toys!"; }
    
    // Sound commands
    whimper() { return "🥺 *whimper whimper*"; }
    growl() { return "😠 *grrrrr*"; }
    yelp() { return "😱 *yelp!*"; }
    sigh() { return "😔 *sighs deeply*"; }
    
    // Social commands
    greetOwner() { return "👋 Welcome home!"; }
    meetStranger() { return "🤝 Hello new friend!"; }
    protectHouse() { return "🏠 Guarding the house!"; }
    jealous() { return "😒 Hey, pay attention to me!"; }
    
    // Training commands
    shake() { return "🤝 *offers paw*"; }
    highFive() { return "🙏 High five!"; }
    speak() { return "🎤 Woof on command!"; }
    quiet() { return "🤫 *stops barking*"; }
    heel() { return "👣 Walking beside you"; }
    stay() { return "🛑 Staying put!"; }
    come() { return "🏃 Coming to you!"; }
    
    // Advanced math
    powerBone(base, exp) { return Math.pow(base, exp); }
    squareRoot(n) { return Math.sqrt(n); }
    roundTreat(n) { return Math.round(n); }
    floorBone(n) { return Math.floor(n); }
    ceilTreat(n) { return Math.ceil(n); }
    
    // String manipulation
    barkLoud(text) { return text.toUpperCase(); }
    whisperQuiet(text) { return text.toLowerCase(); }
    splitBark(text, sep) { return text.split(sep); }
    joinPack(arr, sep) { return arr.join(sep); }
    findScent(text, search) { return text.indexOf(search); }
    
    // Boolean logic
    andGate(a, b) { return a && b; }
    orGate(a, b) { return a || b; }
    notGate(a) { return !a; }
    
    // Color commands
    seeRed() { return "🔴 I see red!"; }
    seeBlue() { return "🔵 I see blue!"; }
    seeGreen() { return "🟢 I see green!"; }
    colorBlind() { return "🌈 Colors look different to me"; }
    
    // Size commands
    bigDog() { return "🐕‍🦺 I'm a big dog!"; }
    smallDog() { return "🐕 I'm a small dog!"; }
    tinyPuppy() { return "🐶 Just a tiny puppy!"; }
    
    // Breed commands
    goldenRetriever() { return "🦮 Golden Retriever reporting!"; }
    germanShepherd() { return "🐕‍🦺 German Shepherd on duty!"; }
    bulldog() { return "🐶 Bulldog here!"; }
    chihuahua() { return "🐕 Small but mighty!"; }
    
    // Toy commands
    squeakToy() { return "🎾 *squeak squeak*"; }
    chewBone() { return "🦴 *crunch crunch*"; }
    tugRope() { return "🪢 Tugging on rope!"; }
    
    // Health commands
    checkHealth() { return this.isGoodBoy ? "💚 Healthy pup!" : "💔 Need some care"; }
    takeMedicine() { return "💊 Taking my medicine"; }
    visitVet() { return "🏥 Going to the vet"; }
    
    // Age commands
    puppyAge() { return "🐶 I'm just a puppy!"; }
    adultAge() { return "🐕 I'm a grown dog!"; }
    seniorAge() { return "🐕‍🦺 I'm a wise old dog!"; }
    
    // Special tricks
    backflip() { return "🤸 *does backflip*"; }
    balance() { return "⚖️ Balancing on hind legs!"; }
    weave() { return "🏃‍♂️ Weaving through obstacles!"; }
    
    // Random generators
    randomColor() { const c = ['red','blue','green','yellow','purple']; return c[Math.floor(Math.random()*c.length)]; }
    randomDog() { const d = ['Golden','Poodle','Beagle','Husky']; return d[Math.floor(Math.random()*d.length)]; }
    randomToy() { const t = ['ball','bone','rope','squeaky']; return t[Math.floor(Math.random()*t.length)]; }

    // Parser for DogScript syntax
    execute(code) {
        try {
            // Simple parser for basic DogScript commands
            const lines = code.split('\n').filter(line => line.trim());
            const results = [];

            for (let line of lines) {
                line = line.trim();
                if (line.startsWith('//') || !line) continue;

                // Handle variable assignment: name = value
                if (line.includes(' = ')) {
                    const [name, value] = line.split(' = ');
                    const evalValue = this.parseValue(value.trim());
                    results.push(this.giveTreat(name.trim(), evalValue));
                    continue;
                }

                // Handle method calls
                const result = this.parseCommand(line);
                if (result !== undefined) results.push(result);
            }

            return results;
        } catch (error) {
            return [`❌ Bad dog! Error: ${error.message}`];
        }
    }

    parseValue(value) {
        if (value.startsWith('"') && value.endsWith('"')) {
            return value.slice(1, -1);
        }
        if (!isNaN(value)) {
            return Number(value);
        }
        if (value === 'true') return true;
        if (value === 'false') return false;
        return this.sniffTreat(value) || value;
    }

    parseCommand(command) {
        // Simple command parser - in real implementation would be more sophisticated
        try {
            return eval(`this.${command}`);
        } catch {
            return `❓ Unknown command: ${command}`;
        }
    }
}

// Export for browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DogScript;
} else {
    window.DogScript = DogScript;
}
