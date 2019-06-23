import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: 'company',
    // component: CompanyComponent,
    loadChildren: './company/company.module#CompanyModule',
    data: { preload: true }
  },
  {
    path: 'person',
    // component: PersonComponent,
    loadChildren: './person/person.module#PersonModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
