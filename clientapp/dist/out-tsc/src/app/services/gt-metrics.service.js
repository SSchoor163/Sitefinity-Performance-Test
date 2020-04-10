import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let GtMetricsService = class GtMetricsService {
    constructor(http) {
        this.http = http;
        this.APIEndPoint = environment.APIEndpoint + "/api/gtmetrics/";
    }
    getAll() {
        return this.http.get(this.APIEndPoint);
    }
    get(id) {
        return this.http.get(this.APIEndPoint + "/" + id);
    }
    post(post) {
        return this.http.post(this.APIEndPoint, post);
    }
    delete(id) {
        return this.http.delete(this.APIEndPoint + '/' + id);
    }
};
GtMetricsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GtMetricsService);
export { GtMetricsService };
//# sourceMappingURL=gt-metrics.service.js.map