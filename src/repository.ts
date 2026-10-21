import type { Hacker, NewHacker } from "./types";
import { ValidateExploitPower } from "./decorators";

export class HackerRepository {
    private hackers: Hacker[] = [];
    private nextId = 1;

    add(newHacker: NewHacker): Hacker {
        const hacker: Hacker = {
            id: this.nextId++,
            ...newHacker,
        };
        this.hackers.push(hacker);
        return hacker;
    }

    getAll(): Hacker[] {
        return this.hackers;
    }

    findByDivision(division: Hacker["division"]): Hacker[] {
        return this.hackers.filter(
            (hacker) => hacker.division === division
        );
    }
}
export type Exploit = {
    id: number;
    name: string;
    category: string;
    power: number;
};

class BaseRepository<T> {
    protected items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
}

export class ExploitRepository extends BaseRepository<Exploit> {
    @ValidateExploitPower
    override add(exploit: Exploit): void {
        super.add(exploit);
    }
}
