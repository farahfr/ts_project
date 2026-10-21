export type Hacker = {
    id: number;
    name: string;
    division: "RedTeam" | "BlueTeam" | "Forensics" | "DevSecOps";
    level: number;
    active: boolean;
};
export type NewHacker = Omit<Hacker, "id">;
export type AcademyEvent = {
    type: "exploit-launched";
    hackerId: number;
    exploitName: string;
} | {
    type: "level-up";
    hackerId: number;
    newLevel: number;
} | {
    type: "hacker-expelled";
    hackerId: number;
};
export type ExploitLaunchedEvent = Extract<AcademyEvent, {
    type: "exploit-launched";
}>;
//# sourceMappingURL=types.d.ts.map