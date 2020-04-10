import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from '../app/components/detail/detail.component'
import { NewCompanyComponent } from '../app/components/new-company/new-company.component'
import { TableComponent } from './components/table/table.component';


const routes: Routes = [{ path: "*", component: TableComponent },
  { path: "", component: TableComponent },
  { path: "table", component: TableComponent },
  { path: 'add', component: NewCompanyComponent },
  { path: 'company/:id', component: DetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
