import * as tslib_1 from "tslib";
import { Injectable, Output } from '@angular/core';
let ResetService = class ResetService {
    constructor() {
        this.reset = true;
    }
    resetView() {
        setTimeout(() => this.reset = false);
        setTimeout(() => this.reset = true);
    }
};
tslib_1.__decorate([
    Output()
], ResetService.prototype, "reset", void 0);
ResetService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ResetService);
export { ResetService };
//# sourceMappingURL=reset.service.js.map