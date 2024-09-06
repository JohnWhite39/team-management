const Team = require('../src/team');
const Character = require('../src/character');

function runTests() {
    const team = new Team();
    const char1 = new Character('Hero1');
    const char2 = new Character('Hero2');
    const char3 = new Character('Hero3');

try {
    team.add(char1);
    console.log('Test add method: Passed');
} catch (error) {
    console.error('Test add method: Failed', error);
}

try {
    team.add(char1);
    console.error('Test add method (duplicate): Failed');
} catch (error) {
    console.log('Test add method (duplicate): Passed', error.message);
}

team.addAll(char2, char3);
if (team.members.size === 3) {
    console.log('Test addAll method: Passed');
} else {
    console.error('Test addAll method: Failed');
}

const array = team.toArray();
if(array.length === 3 && array.includes(char1) && array.includes(char2) && array.includes(char3)) {
    console.log('Test toArray method: Passed');
} else {
    console.error('Test toArray method: Failed');
}
}

runTests();

