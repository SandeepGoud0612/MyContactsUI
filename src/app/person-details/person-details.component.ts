import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { CommonService } from '../common.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

   persons: Person[] = [];  

   selectedPerson: Person;

  constructor(private personService: PersonsService, private commonService: CommonService) { }

  ngOnInit() {
  }

}
