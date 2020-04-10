import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.APIEndPoint = environment.APIEndpoint + "/api/company/";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': this.APIEndPoint
            })
        };
    }
    getAll() {
        return this.http.get(this.APIEndPoint);
    }
    get(id) {
        return this.http.get(this.APIEndPoint + id, this.httpOptions);
    }
    post(company) {
        return this.http.post(this.APIEndPoint, company);
    }
    delete(id) {
        return this.http.delete(this.APIEndPoint + id);
    }
    update(company, id) {
        return this.http.put(this.APIEndPoint + id, company);
    }
};
CompanyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyService);
export { CompanyService };
//# sourceMappingURL=company.service.js.map