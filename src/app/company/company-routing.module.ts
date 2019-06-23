import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CompanyModule } from './company.module';
import { CompanyListComponent } from './company-list/company-list.component';

const companyRoutes: Routes = [
  {
    path: 'comapny-list', component: CompanyListComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes)
  ],
  exports: [ RouterModule ]
})
export class CompanyRoutingModule { }
