import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { PersonModule } from './person.module';
import { PersonListComponent } from './person-list/person-list.component';

const personRoutes: Routes = [
  {
    path: 'person-list', component: PersonListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(personRoutes)
  ],
  exports: [ RouterModule ]
})
export class PersonRoutingModule { }
