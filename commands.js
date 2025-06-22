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
    sitStay() {
        return "🐕 *sits and stays*";
    }

    playFetch() {
        const responses = ["🎾 Fetched the ball!", "🥏 Caught the frisbee!", "🦴 Found a bone!"];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    getGoodBoyStatus() {
        return this.isGoodBoy ? "🏆 Very good boy!" : "😔 Been a bad dog...";
    }

    cleanBowl() {
        this.output = [];
        return "🥣 Bowl cleaned!";
    }

    showTricks() {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(name => name !== 'constructor')
            .map(trick => `🎪 ${trick}`)
            .join('\n');
    }

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
