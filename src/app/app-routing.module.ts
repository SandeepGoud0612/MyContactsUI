import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component'

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/persons', 
    pathMatch: 'full' 
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: 'person-details/:id',
    component: PersonDetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
}
