import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { UrlSerializer } from '@angular/router';
import { CustomUrlSerializer } from './CustomUrlSerializer';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsService } from './persons.service';
import { PersonDetailsService } from './person-details.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from './common.service';
import { DashboardComponentService } from './dashboard-component.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PersonsService, PersonDetailsService, DashboardComponentService, CommonService,
    { provide: UrlSerializer, useClass: CustomUrlSerializer }],
  bootstrap: [AppComponent],
})
export class AppModule { }
