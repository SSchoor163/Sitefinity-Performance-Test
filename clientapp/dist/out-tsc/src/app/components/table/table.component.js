import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
let TableComponent = class TableComponent {
    constructor(cService, router, gtService, modal, resetService) {
        this.cService = cService;
        this.router = router;
        this.gtService = gtService;
        this.modal = modal;
        this.resetService = resetService;
        this.displayedColumns = ['name', 'address', 'business', 'contacted', 'speedScore', 'yslowScore', 'genReport', 'edit', 'delete'];
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        this.cService.getAll().subscribe((data) => {
            this.test = data;
            this.dataSource = new MatTableDataSource(data);
        });
    }
    onSelect(company) {
        this.router.navigate(["/company", company.id]);
    }
    onGen(company) {
        let post = {
            companyId: company.id,
            url: company.url
        };
        this.gtService.post(post).subscribe();
    }
    onEdit(company) {
        this.router.navigate(["/edit", company.id]);
    }
    onDelete(company) {
        this.cService.delete(company.id).subscribe();
        this.resetService.resetView();
    }
};
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css']
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map