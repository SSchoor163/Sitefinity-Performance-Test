import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from '../app/components/detail/detail.component';
import { NewCompanyComponent } from '../app/components/new-company/new-company.component';
import { TableComponent } from './components/table/table.component';
const routes = [{ path: "*", component: TableComponent },
    { path: "", component: TableComponent },
    { path: "table", component: TableComponent },
    { path: 'add', component: NewCompanyComponent },
    { path: 'company/:id', component: DetailComponent }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map