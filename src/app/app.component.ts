import { Component } from '@angular/core';
import { PersonsService } from './persons.service';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private personService: PersonsService, private commonService: CommonService) { }

  onAllContactsClick(): void {
    this.personService.getAllPersons().subscribe(persons => this.commonService.persons = persons);
  }

}
