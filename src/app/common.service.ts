import { Injectable } from '@angular/core';
import { Person } from './person';
import { AlertType } from './alerttype';

export class CommonService {

    persons: Person[] = [];

    showAlert: boolean = false;
    alertMessage: string;
    alertType: AlertType;

    hideAlert(): void {
        this.showAlert = false;
    }

    get alertClass(): string {
        if (this.alertType === 1) {
            return "alert alert-success alert-dismissible fade show";
        }
        else if (this.alertType === 2) {
            return "alert alert-warning alert-dismissible fade show";
        }
        else if (this.alertType === 3) {
            return "alert alert-danger alert-dismissible fade show";
        }
    }

    personsUri: string = 'http://localhost:8080/person';
    occasionsUri: string = 'http://localhost:8080/occasions';

    //personsUri: string = '/person';
    //occasionsUri: string = '/occasions';

}