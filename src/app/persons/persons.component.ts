import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonsService } from '../persons.service';
import { CommonService } from '../common.service';
import { PersonSearchCriteria } from '../person-search-criteria';
import { ApplicationConstants } from '../constants';
import { AlertType } from '../alerttype';

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
    this.personService.getAllPersonsBySearchCriteria(this.personSearchCriteria).subscribe(persons => {
      this.commonService.persons = persons;
      if (this.commonService.persons.length === 0) {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.NO_PERSONS_FOUND;
        this.commonService.alertType = AlertType.Warning;
      }
    });
  }

  getAllPersons(): void {
    this.personService.getAllPersons().subscribe(persons => {
      this.commonService.persons = persons;
    });
  }

  deletePerson(): void {
    this.personService.deletePerson(this.personSelected.id).subscribe(() => {
      this.commonService.persons = this.commonService.persons.filter(person => {
        this.personSelected.id !== person.id;
      });
      this.commonService.showAlert = true;
      this.commonService.alertMessage = ApplicationConstants.PERSONS_DELETED;
      this.commonService.alertType = AlertType.Success;
    },
      err => {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.PERSONS_NOT_DELETED + ' ' +err;
        this.commonService.alertType = AlertType.Error;
      }
    );
  }

}
