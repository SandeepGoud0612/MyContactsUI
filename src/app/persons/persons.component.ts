import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonsService } from '../persons.service';
import { CommonService } from '../common.service';
import { PersonSearchCriteria } from '../person-search-criteria';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];
  personSearchCriteria: PersonSearchCriteria = new PersonSearchCriteria();

  constructor(private personService: PersonsService, private commonService: CommonService) { }

  ngOnInit() {
  }

   getAllPersonsBySearchCriteria(): void {
    this.personService.getAllPersonsBySearchCriteria(this.personSearchCriteria).subscribe(persons => this.commonService.persons = persons);
  }

  getAllPersons(): void {
    this.personService.getAllPersons().subscribe(persons => this.commonService.persons = persons);
  }

}
