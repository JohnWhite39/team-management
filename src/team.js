const Character = require('./character');

class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Character already exists in the team');
        }
        this.members.add(character);
    }

    addAll(...character) {
        character.forEach(character => this.members.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }
}

module.exports = Team;