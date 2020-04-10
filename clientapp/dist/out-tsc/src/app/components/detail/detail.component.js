import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DetailComponent = class DetailComponent {
    constructor(route, router, companyService) {
        this.route = route;
        this.router = router;
        this.companyService = companyService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = parseInt(params.get('id'));
            this.companyId = id;
        });
        this.companyService.get(this.companyId).subscribe(data => {
            this.company = data;
            this.htmlBytes = this.formatBytes(this.company.gtMetrics.htmlBytes);
            this.pageBytes = this.formatBytes(this.company.gtMetrics.pageBytes);
            this.pageLoadTime = this.msToTime(this.company.gtMetrics.pageLoadTime);
            console.log(this.pageBytes);
        }, error => {
            console.log(error);
        });
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        return +secs + '.' + ms + 's';
    }
};
DetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.css']
    })
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map