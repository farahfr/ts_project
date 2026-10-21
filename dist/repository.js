"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploitRepository = exports.HackerRepository = void 0;
const decorators_1 = require("./decorators");
class HackerRepository {
    hackers = [];
    nextId = 1;
    add(newHacker) {
        const hacker = {
            id: this.nextId++,
            ...newHacker,
        };
        this.hackers.push(hacker);
        return hacker;
    }
    getAll() {
        return this.hackers;
    }
    findByDivision(division) {
        return this.hackers.filter((hacker) => hacker.division === division);
    }
}
exports.HackerRepository = HackerRepository;
class BaseRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
class ExploitRepository extends BaseRepository {
    add(exploit) {
        super.add(exploit);
    }
}
exports.ExploitRepository = ExploitRepository;
__decorate([
    decorators_1.ValidateExploitPower
], ExploitRepository.prototype, "add", null);
//# sourceMappingURL=repository.js.map