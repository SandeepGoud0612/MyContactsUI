import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PersonDetailsService } from '../person-details.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private personDetailsService: PersonDetailsService) { }

  id: number;
  private sub: any;
  selectedPerson: Person;
  backupPerson: Person;
  readonly: boolean = true;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.personDetailsService.getPersonById(this.id).subscribe(person => {
      this.selectedPerson = person; 
    });
  }

  onPersonalDetailsUpdateClick(): void {
      this.readonly = false;
      this.backupPerson = JSON.parse(JSON.stringify(this.selectedPerson));
  }

  onPersonlDetailsUpdateCancleClick(): void {
    this.readonly = true;
    this.selectedPerson = JSON.parse(JSON.stringify(this.backupPerson));
  }

  onPersonDetailsSaveClick(): void {
     this.personDetailsService.savePerson(this.selectedPerson.id, this.selectedPerson).subscribe(person => {
      this.selectedPerson = person; 
      this.readonly = true;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
