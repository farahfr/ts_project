import type { Hacker, NewHacker } from "./types";
export declare class HackerRepository {
    private hackers;
    private nextId;
    add(newHacker: NewHacker): Hacker;
    getAll(): Hacker[];
    findByDivision(division: Hacker["division"]): Hacker[];
}
export type Exploit = {
    id: number;
    name: string;
    category: string;
    power: number;
};
declare class BaseRepository<T> {
    protected items: T[];
    add(item: T): void;
    getAll(): T[];
}
export declare class ExploitRepository extends BaseRepository<Exploit> {
    add(exploit: Exploit): void;
}
export {};
//# sourceMappingURL=repository.d.ts.map