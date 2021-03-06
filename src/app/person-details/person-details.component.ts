import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PersonDetailsService } from '../person-details.service';
import { Person } from '../person';
import { Occasion } from '../occasion';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { PersonsService } from '../persons.service';
import { Address } from '../address';
import { ApplicationConstants } from '../constants';
import { AlertType } from '../alerttype';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private personDetailsService: PersonDetailsService,
    private router: Router, private personService: PersonsService, private commonService: CommonService) { }

  id: number;
  private sub: any;
  selectedPerson: Person;
  backupPerson: Person;
  backupOccasion: Occasion;
  readonlyPersonalDetails: boolean = true;
  readOnlyOccasion: boolean = true;
  selectedOccasion: Occasion;
  createOccasion: boolean = false;
  active = true;
  readOnlyAddress: boolean = true;
  selectedAddress: Address;
  createAddress: boolean = false;
  createPerson: boolean = false;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if (this.id) {
      this.personDetailsService.getPersonById(this.id).subscribe(person => {
        this.selectedPerson = person;
      });
    } else {
      this.createPerson = true;
      this.selectedPerson = new Person();
    }
  }

  onPersonalDetailsUpdateClick(): void {
    this.readonlyPersonalDetails = false;
    this.backupPerson = JSON.parse(JSON.stringify(this.selectedPerson));
  }

  onPersonlDetailsUpdateCancleClick(): void {
    this.readonlyPersonalDetails = true;
    this.selectedPerson = JSON.parse(JSON.stringify(this.backupPerson));
  }

  onPersonDetailsUpdateSaveClick(): void {
    if (this.selectedPerson.dob) {
      let parts = this.selectedPerson.dob.toString().split('-');
      this.selectedPerson.dob = new Date(parts['0'], parts['1'] - 1, parts['2']);
    }
    this.personDetailsService.updatePerson(this.selectedPerson.id, this.selectedPerson).subscribe(person => {
      this.selectedPerson = person;
      this.readonlyPersonalDetails = true;
      this.ngOnInit();
      this.commonService.showAlert = true;
      this.commonService.alertMessage = ApplicationConstants.PERSONAL_DETAILS_UPDATED_SUCCESSFULLY;
      this.commonService.alertType = AlertType.Success;
    },
      err => {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.PERSONAL_DETAILS_NOT_UPDATED;
        this.commonService.alertType = AlertType.Error;
      }
    );
  }

  onPersonDetailsCreateSaveClick(): void {
    if (this.selectedPerson.dob) {
      let parts = this.selectedPerson.dob.toString().split('-');
      this.selectedPerson.dob = new Date(parts['0'], parts['1'] - 1, parts['2']);
    }
    this.personDetailsService.createPerson(this.selectedPerson).subscribe(person => {
      this.selectedPerson = person;
      this.readonlyPersonalDetails = true;
      this.createPerson = false;
      this.active = true;
      this.commonService.persons.push(this.selectedPerson);
      this.commonService.showAlert = true;
      this.commonService.alertMessage = ApplicationConstants.PERSON_CREATED_SUCCESSFULLY;
      this.commonService.alertType = AlertType.Success;
      this.router.navigate(['/#/persons']);
    },
      err => {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.PERSON_NOT_CREATED;
        this.commonService.alertType = AlertType.Error;
      });
  }

  onAddressUpdateClick(address: Address): void {
    this.selectedAddress = address;
    this.readOnlyAddress = false;
    this.createAddress = false;
    this.backupPerson = JSON.parse(JSON.stringify(this.selectedPerson));
  }

  selectAddressForDelete(address: Address): void {
    this.selectedAddress = address;
  }

  onAddressDeleteClick(): void {
    this.selectedPerson.addressList = this.selectedPerson.addressList.filter(addressItem => this.selectedAddress.id !== addressItem.id);
    this.personDetailsService.updatePerson(this.selectedPerson.id, this.selectedPerson).subscribe(person => {
      this.personDetailsService.getPersonById(this.id).subscribe(person => {
        this.selectedPerson = person;
      });
      this.commonService.showAlert = true;
      this.commonService.alertMessage = ApplicationConstants.ADDRESS_DELETED_SUCCESSFULLY;
      this.commonService.alertType = AlertType.Success;
    },
      err => {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.ADDRESS_NOT_DELETED;
        this.commonService.alertType = AlertType.Error;
      });
  }

  onAddressUpdateSaveClick(): void {
    if (this.createAddress) {
      this.selectedPerson.addressList.push(this.selectedAddress);
    }
    this.personDetailsService.updatePerson(this.selectedPerson.id, this.selectedPerson).subscribe(Person => {
      this.selectedPerson = Person;
      if (this.createAddress) {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.ADDRESS_CREATED_SUCCESSFULLY;
        this.commonService.alertType = AlertType.Success;
      } else {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.ADDRESS_UPDATED_SUCCESSFULLY;
        this.commonService.alertType = AlertType.Success;
      }
      this.readOnlyAddress = true;
      this.createAddress = false;
    },
      err => {
        if (this.createAddress) {
          this.commonService.showAlert = true;
          this.commonService.alertMessage = ApplicationConstants.ADDRESS_NOT_CREATED;
          this.commonService.alertType = AlertType.Error;
        } else {
          this.commonService.showAlert = true;
          this.commonService.alertMessage = ApplicationConstants.ADDRESS_NOT_UPDATED;
          this.commonService.alertType = AlertType.Error;
        }
      }
    );
  }

  onAddressUpdateCancleClick(): void {
    this.readOnlyAddress = true;
    this.createAddress = false;
    this.selectedPerson = JSON.parse(JSON.stringify(this.backupPerson));
  }

  onAddressCreateClick(): void {
    this.readOnlyAddress = false;
    this.createAddress = true;
    this.selectedAddress = new Address();
  }

  onOccasionUpdateClick(occasion: Occasion): void {
    this.selectedOccasion = occasion;
    this.readOnlyOccasion = false;
    this.createOccasion = false;
    this.backupPerson = JSON.parse(JSON.stringify(this.selectedPerson));
  }

  selectOccasionForDelete(occasion: Occasion): void {
    this.selectedOccasion = occasion;
  }

  onOccasionDeleteClick(): void {
    this.selectedPerson.occasionList = this.selectedPerson.occasionList.filter(occasionItem => this.selectedOccasion.id !== occasionItem.id);
    this.personDetailsService.updatePerson(this.selectedPerson.id, this.selectedPerson).subscribe(person => {
      this.personDetailsService.getPersonById(this.id).subscribe(person => {
        this.selectedPerson = person;
      });
      this.commonService.showAlert = true;
      this.commonService.alertMessage = ApplicationConstants.OCCASION_DELETED_SUCCESSFULLY;
      this.commonService.alertType = AlertType.Success;
    },
      err => {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.OCCASION_NOT_DELETED;
        this.commonService.alertType = AlertType.Error;
      });
  }

  onOccasionUpdateCancleClick(): void {
    this.readOnlyOccasion = true;
    this.createOccasion = false;
    this.selectedPerson = JSON.parse(JSON.stringify(this.backupPerson));
  }

  onOccasionUpdateSaveClick(): void {
    if (this.selectedOccasion.date) {
      let parts = this.selectedOccasion.date.toString().split('-');
      this.selectedOccasion.date = new Date(parts['0'], parts['1'] - 1, parts['2']);
    }
    if (this.createOccasion) {
      this.selectedPerson.occasionList.push(this.selectedOccasion);
    }
    this.personDetailsService.updatePerson(this.selectedPerson.id, this.selectedPerson).subscribe(person => {
      this.selectedPerson = person;
      this.ngOnInit();
      if (this.createOccasion) {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.OCCASION_CREATED_SUCCESSFULLY;
        this.commonService.alertType = AlertType.Success;
      } else {
        this.commonService.showAlert = true;
        this.commonService.alertMessage = ApplicationConstants.OCCASION_UPDATED_SUCCESSFULLY;
        this.commonService.alertType = AlertType.Success;
      }
      this.readOnlyOccasion = true;
      this.createOccasion = false;
    },
      err => {
        if (this.createOccasion) {
          this.commonService.showAlert = true;
          this.commonService.alertMessage = ApplicationConstants.OCCASION_NOT_CREATED;
          this.commonService.alertType = AlertType.Error;
        } else {
          this.commonService.showAlert = true;
          this.commonService.alertMessage = ApplicationConstants.OCCASION_NOT_UPDATED;
          this.commonService.alertType = AlertType.Error;
        }
      });
  }

  onOccasionCreateClick(): void {
    this.readOnlyOccasion = false;
    this.createOccasion = true;
    this.selectedOccasion = new Occasion();
    this.selectedOccasion.remindMe = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

}
