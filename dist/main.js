"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
const repository_2 = require("./repository");
const hackerRepo = new repository_1.HackerRepository();
const newHackerData = {
    name: "Farah",
    division: "RedTeam",
    level: 5,
    active: true,
};
const registeredHacker = hackerRepo.add(newHackerData);
console.log(registeredHacker);
hackerRepo.add({
    name: "hajar",
    division: "RedTeam",
    level: 3,
    active: true,
});
hackerRepo.add({
    name: "Morbius",
    division: "BlueTeam",
    level: 6,
    active: true,
});
const redTeamHackers = hackerRepo.findByDivision("RedTeam");
console.log("Hackers de la RedTeam :", redTeamHackers);
function handleExploitLaunched(event) {
    console.log(`Hacker ${event.hackerId} launched ${event.exploitName}`);
}
handleExploitLaunched({
    type: "exploit-launched",
    hackerId: 1,
    exploitName: "SQL Injection"
});
const exploits = new repository_2.ExploitRepository();
exploits.add({
    id: 102,
    name: "ZeroDay Shield",
    category: "defense",
    power: 50,
});
console.log("Exploit valide ajouté avec succès !");
try {
    exploits.add({
        id: 103,
        name: "Bad Exploit",
        category: "attack",
        power: -10,
    });
}
catch (error) {
    console.log("Erreur interceptée avec succès :", error.message);
}
//# sourceMappingURL=main.js.map