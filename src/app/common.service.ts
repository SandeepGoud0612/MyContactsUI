import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class CommonService { 

   persons: Person[] = [];  

   selectedPerson: Person;

}
