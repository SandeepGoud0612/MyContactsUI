import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonsService } from '../persons.service';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit { 

   persons: Person[] = [];  

  constructor(private personService: PersonsService, private commonService: CommonService) { }

  ngOnInit() { }

  getAllPersons(): void {       
      this.personService.getAllPersons().subscribe(persons => this.persons = persons);
  }

}
