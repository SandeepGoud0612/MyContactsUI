import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '#/persons',
    component: PersonsComponent
  },
  {
    path: '#/person-details/:id',
    component: PersonDetailsComponent
  },
  {
    path: '#/person-details/create',
    component: PersonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
