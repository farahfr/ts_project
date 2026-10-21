"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateExploitPower = ValidateExploitPower;
function ValidateExploitPower(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const candidate = args[0];
        if (typeof candidate === "object" && candidate !== null && "power" in candidate &&
            typeof candidate.power === "number" &&
            candidate.power < 0) {
            throw new Error("Exploit power cannot be negative");
        }
        return originalMethod.apply(this, args);
    };
}
//# sourceMappingURL=decorators.js.map