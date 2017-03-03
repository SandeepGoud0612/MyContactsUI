import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module' 

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsService } from './persons.service';
import { CommonService } from './common.service';
import { PersonDetailsService } from './person-details.service';

@NgModule({
  declarations: [
    AppComponent,    
    PersonsComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ PersonsService, CommonService, PersonDetailsService ],
  bootstrap: [ AppComponent ], 
})
export class AppModule { }
