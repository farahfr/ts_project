import { HackerRepository } from "./repository";
import type { NewHacker } from "./types";
import type { ExploitLaunchedEvent } from "./types";
import { ExploitRepository } from "./repository";

const hackerRepo = new HackerRepository();

const newHackerData: NewHacker = {
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
function handleExploitLaunched(event: ExploitLaunchedEvent): void {
    console.log(
    `Hacker ${event.hackerId} launched ${event.exploitName}`
    );
}

handleExploitLaunched({
    type: "exploit-launched",
    hackerId: 1,
    exploitName: "SQL Injection"
});

const exploits = new ExploitRepository();

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
} catch (error: any) {
    console.log("Erreur interceptée avec succès :", error.message);
}