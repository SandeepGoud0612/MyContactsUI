import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonsService) { }

  ngOnInit() {
    this.personService.getAllPersons().subscribe(persons => this.persons = persons);
  }

}
