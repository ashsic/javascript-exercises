const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = "";
    for (person of people){
        if (("yearOfDeath" in person ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth >= oldestAge){
            oldestAge = ("yearOfDeath" in person ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
