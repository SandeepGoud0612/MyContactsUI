import { Injectable } from '@angular/core';
import { Person } from './person';

export class CommonService {

    persons: Person[] = [];

    personsUri: string = 'http://localhost:8080/persons';

}
