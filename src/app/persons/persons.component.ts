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
  personSelected: Person;

  constructor(private personService: PersonsService, private commonService: CommonService) { }

  ngOnInit() {
  }

  selectPersonForDelete(personDelete: Person): void {
    this.personSelected = personDelete;
  }

  getAllPersonsBySearchCriteria(): void {
    this.personService.getAllPersonsBySearchCriteria(this.personSearchCriteria).subscribe(persons => this.commonService.persons = persons);
  }

  getAllPersons(): void {
    this.personService.getAllPersons().subscribe(persons => this.commonService.persons = persons);
  }

  deletePerson(): void {
    this.personService.deletePerson(this.personSelected.id).subscribe(() => {
      this.commonService.persons = this.commonService.persons.filter(person => this.personSelected.id !== person.id);
    });
  }

}
